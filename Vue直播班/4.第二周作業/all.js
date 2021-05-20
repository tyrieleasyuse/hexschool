
const component = {
      signin :   {
        "username": "hexscholl@test.com",
        "password": "zzxxccvv"
      },
      axios : {
          url : "https://vue3-course-api.hexschool.io/"
      }
      ,
      userSignin(){
          const signinBtn = document.querySelector(".js-signinBtn");
          signinBtn.addEventListener('click',(e)=>{
              e.preventDefault();
              const username = document.querySelector('#username').value;
              const password = document.querySelector('#password').value;
              if(username.trim() === '' || password.trim() === '' )
              {
                  alert('請輸入帳號密碼進行登入!');
                  return;
              }
              const url = `${this.axios.url}admin/signin`;
              console.log(url);
              this.signin.username = username;
              this.signin.password = password;
              axios.post(url,this.signin)
              .then(response =>{
                const success = response.data.success;
                if(success){
                    const token = response.data.token;
                    Cookies.set('token', token);
                    alert("登入成功。");
                    location.href = "admin.html";
                }
                else
                {
                    alert("登入失敗。");
                }
              })
              .catch(error=>{
                alert("系統發生錯誤，請稍後在試。");
              })
          })
      },
      init(){
          this.userSignin();
      }
}

component.init();
