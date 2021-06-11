
const api_url = 'https://vue3-course-api.hexschool.io/api';
const api_path = 'hunterchen';


Object.keys(VeeValidateRules).forEach(rule => {
    if (rule !== 'default') {
      VeeValidate.defineRule(rule, VeeValidateRules[rule]);
    }
  });

VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});

const app = Vue.createApp({
    data(){
        return {
            products: [
                {
                }
            ],
            pagination: {
            },
            product : {

            },
            carts: [
              ],
              total: 0,
              final_total: 0,
              form: {
                user: {
                  name: '',
                  email: '',
                  tel: '',
                  address: '',
                },
                message: '',
              },
        }
    },
    methods : {
        getProductList(page) {
            const targetPage = page == undefined ? this.pagination.current_page : page;
            const url = `${api_url}/${api_path}/products?page=` + targetPage;
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
        getCartList() {
            const url = `${api_url}/${api_path}/cart`;
            axios.get(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.carts = response.data.data.carts;
                        this.total = response.data.data.total;
                        this.final_total = response.data.data.final_total;
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
        getProductDetail(item) {
            const url = `${api_url}/${api_path}/product/` + item.id;
            console.log(url);
            axios.get(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.product = item;
                        this.$refs.userProductModal.openDialog();
                        console.log(this.$refs);
                        // console.log(productModal);
                        // productModal.show();
                        // console.log(response.data);

                        // this.carts = response.data.data.carts;
                        // this.total = response.data.data.total;
                        // this.final_total = response.data.data.final_total;
                    }
                    else {
                        console.log(response.data);
                        const message = response.data.message;
                        alert(message);
                        location.href = 'index.html';
                    }
                })
                .catch(error => {
                    alert(error);
                })
        },
        addProductToCart(id, qty = 1){
            const url = `${api_url}/${api_path}/cart`;
            const cartData = {
                data :{
                    product_id: id,
                    qty : qty
                }
            }
            axios.post(url,cartData)
                .then(response => {
                    alert('加入購物車成功。');
                    this.getCartList();
                    this.$refs.userProductModal.closeDialog();
                })
                .catch(error => {
                    alert(error);
                })
        },
        updateCartQry(item){
            const url = `${api_url}/${api_path}/cart/` + item.id;
            const cartData = {
                data :{
                    product_id: item.product_id,
                    qty : parseInt(item.qty)
                }
            }
            axios.put(url,cartData)
                .then(response => {
                    alert('更新購物車數量成功。');
                    this.getCartList();
                })
                .catch(error => {
                    alert(error);
                })
        },
        deleteCartAllItem(){
            const url = `${api_url}/${api_path}/carts`;
            axios.delete(url)
                .then(response => {
                    alert('清空購物車成功。');
                    this.getCartList();
                })
                .catch(error => {
                    alert(error);
                })
        },
        deleteCartItem(id){
            const url = `${api_url}/${api_path}/cart/` + id;
            axios.delete(url)
                .then(response => {
                    alert('刪除購物清單成功。');
                    this.getCartList();
                })
                .catch(error => {
                    alert(error);
                })
        },
        onSubmit(){
            //以下為範例程式移植
            //呼叫結單API，並傳入form的表單物件
            //成功重設form物件並refresh購物車
            const url = `${api_url}/${api_path}/order`;
            const order = { data: this.form };
            console.log(order);
            axios.post(url,order)
                .then(response => {
                    alert('訂單新增成功。');
                    this.getCartList();
                    this.$refs.form.resetForm();
                })
                .catch(error => {
                    alert(error);
                })
        }
    },
    mounted() {
        this.getProductList(1);
        this.getCartList();
    },
});

app.component('product-modal',{
    props : ['product'],
    data(){
        return {
            productModal : {

            }
        }
    },
    template: '#userProductModal',
    methods : {
        openDialog(){
            this.productModal.show();
        },
        closeDialog(){
            this.productModal.hide();
        },
        addCartByModal(){
            this.$emit('emit-add-cart', this.product.id, this.product.num);
        }
    },
    mounted() {
        const myProductModal = document.querySelector("#productModal");
        this.productModal = new bootstrap.Modal(myProductModal);        
    },
});

app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);

app.mount("#app");