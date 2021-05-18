
const component = {
    "signin" :   {
        "username": "hexscholl@test.com",
        "password": "zzxxccvv"
      },
      "axios" : {
          url : "https://vue3-course-api.hexschool.io/",
          api_path : "hunterchen"
      }
      ,
      userSignin(){
          const signinBtn = document.querySelector(".js-signinBtn");
          signinBtn.addEventListener('click',(e)=>{
              e.preventDefault();
              const username = document.querySelector('#username').value;
              const password = document.querySelector('#password').value;
              if(username.toString().trim() === '' || username.toString().trim() === 'password' )
              {
                  alert('請輸入帳號密碼進行登入!');
                  return;
              }
              const url = `${this.axios.url}admin/signin`;
              console.log(url);
              axios.post(url,{
                "username": username,
                "password": password
              })
              .then(response =>{
                const success = response.data.success;
                if(success){
                    const token = response.data.token;
                    console.log(response);
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
    //   redirectProductPage(){
    //     const url = 'index.html';
    //     axios.post(url,{
    //         "username": username,
    //         "password": password
    //       })
    //       .then(response =>{
    //         const success = response.data.success;
    //         if(success){
    //             const token = response.data.token;
    //             console.log(response);
    //             Cookies.set('token', token);
    //             alert("登入成功。");
    //             return this.redirectProductPage();
    //         }
    //         else
    //         {
    //             alert("登入失敗。");
    //         }
    //       })
    //       .catch(error=>{
    //         alert("系統發生錯誤，請稍後在試。");
    //       })
    //   },
      init(){
          this.userSignin();
      }
}

component.init();

// const componet = {
//     "products": [
//         {
//             "category": "衣服3",
//             "content": "這是內容",
//             "description": "Sit down please 名設計師設計",
//             "id": "-L9tH8jxVb2Ka_DYPwng",
//             "imageUrl" : "主圖網址",
//             "imagesUrl": [
//               "圖片網址一",
//               "圖片網址二",
//               "圖片網址三",
//               "圖片網址四",
//               "圖片網址五"
//             ],
//             "is_enabled": 1,
//             "num": 1,
//             "origin_price": 100,
//             "price": 600,
//             "title": "[賣]動物園造型衣服3",
//             "unit": "個"
//         }
//     ],
//     "axois" : {
//         url : 'https://vue3-course-api.hexschool.io/api',
//         api_path : 'hunterchen'
//     },
//     getProductList(){
//         const url = `${this.axois.url}/${this.axois.api_path}/products?page=1`
//         axios.get(url)
//         .then(response => {
//             this.products = response.data.products;
//             this.renderProductList();
//         })
//         .catch(error=>{
//             alert(error);
//         })
//     },
//     renderProductList(){
//         const productList = document.querySelector('#productList');
//         const productCount = document.querySelector('#productCount');
//         let str=''
//         this.products.forEach(item =>{
//             str+=`<tr>
//             <td>${item.category}</td>
//             <td width="120">
//               ${item.origin_price}
//             </td>
//             <td width="120">
//             ${item.price}
//             </td>
//             <td width="100">
//               <span class="${item.is_enabled === 1 ? 'text-primary' : ''}">${item.is_enabled === 1 ? '啟用' : '未啟用'}</span>
//             </td>
//             <td width="120">
//               <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn js-deleteBtn" data-action="remove" data-id="${item.id}"> 刪除 </button>
//             </td>
//           </tr>`;
//         })
//         productList.innerHTML = str;
//         productCount.innerHTML = this.products.length;

//         this.removeProductAllItem();
//     },
//     removeProductAllItem(){
//         const remove = document.querySelectorAll('.js-deleteBtn');
//         remove.forEach(btn => btn.addEventListener('click', (e)=>{
//             var dialog = confirm("你確定要刪除產品嗎?");
//             if (dialog === true) {
//                 const id = e.target.dataset.id;            
//                 const url = `${this.axois.url}/${this.axois.api_path}/cart/${id}`;
//                 axios.delete(url)
//                 .then(response => {
//                     const success = response.data.success;
//                     if(success){
//                         this.products.forEach((item,index)=>{
//                             if(item.id === id){
//                                 this.products.splice(index,1);
//                             }
//                         })
//                         this.renderProductList();
//                     }else{
//                         alert(success);
//                     }
//                 })
//                 .catch(error=>{
//                     alert(error);
//                 })
//             }
//         }))
//     },
//     init(){
//         this.getProductList();
//     }
// }

// componet.init();

// const component = {
//     productData : [
//         {
//             id : 1,
//             title : "產品A",
//             origin_price : 1000,
//             price : 900,
//             is_enabled : false
//         },
//         {
//             id : 2,
//             title : "產品B",
//             origin_price : 1000,
//             price : 900,
//             is_enabled : false
//         },
//         {
//             id : 3,
//             title : "產品C",
//             origin_price : 1000,
//             price : 900,
//             is_enabled : false
//         }
//     ],
//     renderProductList(){
//         const productList = document.querySelector('#productList');
//         const productCount = document.querySelector('#productCount');
//         let str = '';
//         this.productData.forEach((item) =>{
//             str += `
//             <tr>
//               <td>${item.title}</td>
//               <td width="120">
//                 ${item.origin_price}
//               </td>
//               <td width="120">
//                 ${item.price}
//               </td>
//               <td width="100">
//                 <div class="form-check form-switch">
//                   <input class="form-check-input js-enableBtn" type="checkbox" id="${item.id}" ${item.is_enabled? 'checked': ''} data-action="complete" data-id="${item.id}">
//                   <label class="form-check-label" for="is_enabled">${item.is_enabled? '啟用' : '未啟用'}</label>
//                 </div>
//               </td>
//               <td width="120">
//                 <button type="button" class="btn btn-sm btn-danger move js-removeBtn" data-action="remove" data-id="${item.id}"> 刪除 </button>
//               </td>
//             </tr>`;           
//         })
//         productList.innerHTML = str;
//         productCount.innerHTML = this.productData.length;
//         this.removeProductItem();
//         this.enableProductItem();
//     },
//     removeProductItem(){
//         const removeBtn = document.querySelectorAll('.js-removeBtn');
//         removeBtn.forEach(btn => btn.addEventListener('click',(e)=>{
//             const id = e.target.dataset.id;
//             this.productData.forEach((item, index) => {
//                 if(item.id == id){
//                     this.productData.splice(index,1);
//                 }
//             })
//             this.renderProductList();
//         }))
//     },
//     reomveProductAllItem(){        
//         const removeBtn = document.querySelector('#clearAll');
//         removeBtn.addEventListener('click',(e)=>{
//             this.productData = [];
//             this.renderProductList();
//         })
//     },
//     enableProductItem(){
//         const enableBtn = document.querySelectorAll('.js-enableBtn');
//         enableBtn.forEach(btn => btn.addEventListener('change',(e)=>{
//             const id = e.target.dataset.id;
//             const status = e.target.checked;
//             this.productData.forEach((item, index) => {
//                 if(item.id == id){
//                     this.productData[index].is_enabled = status;
//                 }
//             })
//             this.renderProductList();
//         }))
//     },
//     addProductList(){
//         const addProduct = document.querySelector('#addProduct');
//         addProduct.addEventListener('click',(e)=>{
//             const timeStamp = Math.floor(Date.now());
//             this.productData.push({
//                 id: timeStamp,
//                 title: document.querySelector('#title').value.trim(),
//                 origin_price: parseInt(document.querySelector('#origin_price').value) || 0,
//                 price: parseInt(document.querySelector('#price').value) || 0,
//                 is_enabled: false,
//               });
//             this.renderProductList();
//             this.resetProductContent();
//         });
//     },
//     resetProductContent(){        
//         document.querySelector('#title').value = '';
//         document.querySelector('#origin_price').value = '';
//         document.querySelector('#price').value = '';
//     },
//     init(){
//         this.renderProductList();
//         this.addProductList();
//         this.reomveProductAllItem();
//     }
// }

// component.init();
