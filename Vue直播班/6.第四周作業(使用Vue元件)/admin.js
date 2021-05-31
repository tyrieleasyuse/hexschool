let productModal;
let delProductModal;

const my_url = 'https://vue3-course-api.hexschool.io/api';
const my_api_path = 'hunterchen';

const app = {
    data() {
        return {
            products: [
            ],
            axios: {
                url: 'https://vue3-course-api.hexschool.io/api',
                api_path: 'hunterchen'
            },
            tempProdcut: {
                imagesUrl : []
            }
        }
    },
    methods: {
        getProductList() {
            const url = `${this.axios.url}/${this.axios.api_path}/admin/products?page=1`;
            axios.get(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.products = response.data.products;
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
            this.tempProdcut = { ...item };
            delProductModal.show();
        },
        editProductItemDialog(item) {
            this.tempProdcut = { ...item };
            productModal.show();
        },
        addProductItemDialog() {
            this.tempProdcut = {
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
        this.getProductList();
        this.bindingModal();
    },
}

Vue.createApp(app)

.component('edit-modal',{
    props: {
        Prodcut: {
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
            if (this.Prodcut.id === undefined) {
                this.tempImage = '';
                const url = `${my_url}/${my_api_path}/admin/product`;
                const requestData = {
                    data: this.Prodcut
                }
                axios.post(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.$emit('update');
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
                const id = this.Prodcut.id;
                const url = `${my_url}/${my_api_path}/admin/product/${id}`;
                const requestData = {
                    data: this.Prodcut
                }
                axios.put(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.$emit('update');
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
            this.Prodcut.imagesUrl.splice(index,1);            
        },
        addImageItem(index){
            this.Prodcut.imagesUrl.push(this.tempImage);
        },
    },
    mounted() {    
    }
})

.component('delete-modal',{
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
            const url = `${my_url}/${my_api_path}/admin/product/${id}`;
            console.log('url', url);
            console.log('id', id);
            axios.delete(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.$emit('update');
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
