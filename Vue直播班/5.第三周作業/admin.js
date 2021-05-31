let productModal;
let delProductModal;

const app = {
    data() {
        return {
            products: [
                // {
                //     "category": "衣服3",
                //     "content": "這是內容",
                //     "description": "Sit down please 名設計師設計",
                //     "id": "-L9tH8jxVb2Ka_DYPwng",
                //     "imageUrl": "主圖網址",
                //     "imagesUrl": [
                //         "圖片網址一",
                //         "圖片網址二",
                //         "圖片網址三",
                //         "圖片網址四",
                //         "圖片網址五"
                //     ],
                //     "is_enabled": 1,
                //     "num": 1,
                //     "origin_price": 100,
                //     "price": 600,
                //     "title": "[賣]動物園造型衣服3",
                //     "unit": "個"
                // }
            ],
            axios: {
                url: 'https://vue3-course-api.hexschool.io/api',
                api_path: 'hunterchen'
            },
            tempProdcut: {
                imagesUrl : []
            },
            tempImage : ''
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
        deleteProductItem() {
            const id = this.tempProdcut.id;
            const url = `${this.axios.url}/${this.axios.api_path}/admin/product/${id}`;
            axios.delete(url)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        this.getProductList();
                        delProductModal.hide();
                    } else {
                        alert(success);
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
        editProductItem() {
            if (this.tempProdcut.id === undefined) {
                const url = `${this.axios.url}/${this.axios.api_path}/admin/product`;
                const requestData = {
                    data: this.tempProdcut
                }
                axios.post(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.getProductList();
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
                const id = this.tempProdcut.id;
                const url = `${this.axios.url}/${this.axios.api_path}/admin/product/${id}`;
                const requestData = {
                    data: this.tempProdcut
                }
                axios.put(url, requestData)
                    .then(response => {
                        const success = response.data.success;
                        if (success) {
                            this.getProductList();
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
            this.tempImage = '';
            productModal.show();
        },
        deleteImageItem(index){
            this.tempProdcut.imagesUrl.splice(index,1);            
        },
        addImageItem(index){
            this.tempProdcut.imagesUrl.push(this.tempImage);
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

Vue.createApp(app).mount("#app");
