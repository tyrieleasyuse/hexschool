let productModal;
let delProductModal;

const api_url = 'https://vue3-course-api.hexschool.io/api';
const api_path = 'hunterchen';

Vue.createApp({
    data() {
        return {
            products: [
            ],
            pagination: {
              },
            tempProduct: {
                imagesUrl : []
            }
        }
    },
    methods: {
        getProductList(page) {
            const targetPage = page == undefined ? this.pagination.current_page : page;
            const url = `${api_url}/${api_path}/admin/products?page=` + targetPage;
            axios.get(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.products = response.data.products;
                        this.pagination = response.data.pagination;
                    }
                    else {
                        const message = response.data.message;
                        alert(message);
                        location.href = 'index.html';
                    }
                })
                .catch(error => {
                    alert(error);
                })
        },
        deleteProductItemDialog(item) {
            this.tempProduct = { ...item };
            delProductModal.show();
        },
        editProductItemDialog(item) {
            this.tempProduct = JSON.parse(JSON.stringify(item)); //需深層拷貝，避免圖片物件刪除未送出，下次編輯時卻未帶出的Bug。
            productModal.show();
        },
        addProductItemDialog() {
            this.tempProduct = {
                category: "",
                content: "",
                description: "",
                imageUrl: "",
                imagesUrl: [
                ],
                is_enabled: 1,
                num: 1,
                origin_price: 0,
                price: 0,
                title: "",
                unit: "個"
            };
            productModal.show();
        },
        bindingModal() {
            const myProductModal = document.querySelector("#productModal");
            const myDelProductModal = document.querySelector("#delProductModal");
            productModal = new bootstrap.Modal(myProductModal);
            delProductModal = new bootstrap.Modal(myDelProductModal);
        }
    },
    mounted() {
        axios.defaults.headers.common.Authorization = Cookies.get('token');
        this.getProductList(1);
        this.bindingModal();
    },
})

.component('edit-modal',{
    //props為參考範例原始碼
    //帶入物件需類別驗證為type : Object，預設值為imagesUrl: []
    props: {
        product: {
          type: Object,
          default() {
            return { 
              imagesUrl: [],
            }
          }
        }
    },
    template : '#editModalTemplate',
    data(){
        return {
            tempImage : ''
        }
    },
    methods:{
        editProductItem() {
            if (this.product.id === undefined) {
                this.tempImage = '';
                const url = `${api_url}/${api_path}/admin/product`;
                const requestData = {
                    data: this.product
                }
                axios.post(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.$emit('emit-update');
                            productModal.hide();
                        } else {
                            const message = response.data.message;
                            alert(message);
                        }
                    })
                    .catch(error => {
                        alert(error);
                    })
            }
            else {
                const id = this.product.id;
                const url = `${api_url}/${api_path}/admin/product/${id}`;
                const requestData = {
                    data: this.product
                }
                axios.put(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.$emit('emit-update');
                            productModal.hide();
                        } else {
                            const message = response.data.message;
                            alert(message);
                        }
                    })
                    .catch(error => {
                        alert(error);
                    })
            }
        },
        deleteImageItem(index){
            this.product.imagesUrl.splice(index,1);            
        },
        addImageItem(){
            this.product.imagesUrl.push(this.tempImage);
        },
    },
    mounted() {    
    }
})

.component('pagination',{
    //props為參考範例原始碼
    //帶入物件需類別驗證為type : Object，預設值為空物件
    props: {
        item: {
        type: Object,
        default() {
          return { 
          }
        }
      }
    },
    template : '#paginationTemplate',
    data(){
        return {
        }
    },
    methods :{
        navigatePage(index) {
            this.$emit('emit-navigate',index);
        }
    },
    mounted() {
    },
})

.component('delete-modal',{
    //props為參考範例原始碼
    //帶入物件需類別驗證為type : Object，預設值為空物件
    props: {
      item: {
        type: Object,
        default() {
          return { 
          }
        }
      }
    },
    template : '#deleteModalTemplate',
    data(){
        return {
        }
    },
    methods :{
        deleteProductItem() {
            const id = this.item.id;
            const url = `${api_url}/${api_path}/admin/product/${id}`;
            console.log('url', url);
            console.log('id', id);
            axios.delete(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.$emit('emit-update');
                        delProductModal.hide();
                    } else {
                        const message = response.data.message
                        alert(message);
                    }
                })
                .catch(error => {
                    alert(error);
                })
        },
    },
    mounted() {
    },
})

.mount("#app");
