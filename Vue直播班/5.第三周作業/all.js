
let productModal;
let delProductModal;

const app = {
    data() {
        return {
            //       signin :   {
            //         "username": "hexscholl@test.com",
            //         "password": "zzxxccvv"
            //       },
            signin: {
                username: "",
                password: ""
            },
            axios: {
                url: "https://vue3-course-api.hexschool.io/"
            }
        }
    },
    methods: {
        userSignin() {
            if (this.signin.username.trim() === '' || this.signin.password.trim() === '') {
                alert('請輸入帳號密碼進行登入!');
                return;
            }
            const url = `${this.axios.url}admin/signin`;
            axios.post(url, this.signin)
                .then(response => {
                    const success = response.data.success;
                    if (success) {
                        const token = response.data.token;
                        Cookies.set('token', token);
                        alert("登入成功。");
                        location.href = "admin.html";
                    }
                    else {
                        const message = response.data.message;
                        alert(message);
                    }
                })
                .catch(error => {
                    alert("系統發生錯誤，請稍後在試。");
                })

        }
    },
    created() {
    },
}

Vue.createApp(app).mount("#app");