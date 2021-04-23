// 請代入自己的網址路徑
const api_path = "hunterchen";
const baseUrl = "https://hexschoollivejs.herokuapp.com"; 

const productWrap = document.querySelector('.productWrap');
const cartsList = document.querySelector('.cartsList');
const productSelect = document.querySelector('.productSelect');
const orderInfoBtn = document.querySelector('.orderInfo-btn');
const clearCartsAll = document.querySelector('.js-clearCartsAll');
const customerName = document.querySelector('#customerName');
const customerPhone = document.querySelector('#customerPhone');
const customerEmail = document.querySelector('#customerEmail');
const customerAddress = document.querySelector('#customerAddress');
const tradeWay = document.querySelector('#tradeWay');

let Products = [];
let Carts = [];

function init(){
  GetProductList();
  GetCartsList();
}

// 取得訂單列表
function GetProductList(){
  axios.get(`${baseUrl}/api/livejs/v1/customer/${api_path}/products`).
    then(function (response) {
      // console.log(response.data);
      Products = response.data.products;
      RenderProductList();
    }).catch(function(error){
      alert(error);
    });
    // console.log(orderInfoBtn);
}

function RenderProductList(){
  let str = '';
  Products.forEach(function(item,index){
    if(productSelect.value == "全部" || productSelect.value === item.category){
      str += `
      <li class="productCard">
          <h4 class="productType">新品</h4>
          <img src="${item.images}" alt="">
          <a href="#" id="addCardBtn" class='js-addCarts' data-id='${item.id}' >加入購物車</a>
          <h3>${item.title}</h3>
          <del class="originPrice">NT$${item.origin_price.toLocaleString()}</del>
          <p class="nowPrice">NT$${item.price.toLocaleString()}</p>
      </li>`;
    }
  });
  productWrap.innerHTML = str;
}

productSelect.addEventListener('change',function(e){
  e.preventDefault();
  RenderProductList();
})

productWrap.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.getAttribute('class') == null){
    return;    
  }
  if(!e.target.getAttribute('class').match('js-addCarts')){
    return;    
  }
  let id = e.target.getAttribute('data-id');
  // console.log(Carts);
 
  let isAddedCarts = false;
  Carts.forEach(function(item){
    if(item.product.id === id)
    {
      alert('該產品已加入購物車。');
      isAddedCarts = true;
    }
  });
  if(isAddedCarts){
    return;
  }

  axios.post(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`, 
  {
    "data": {
      "productId": id,
      "quantity": 1
    }
  })
  .then(function (response) {
    alert(`加入購物車成功。`);
    Carts = response.data.carts;
    renderCartsList();
  }).catch(function(error){
    alert(error);
  });
})

function GetCartsList(){
  axios.get(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`).
    then(function (response) {
      // console.log(response.data);
      Carts = response.data.carts;
      renderCartsList();
    }).catch(function(error){
      alert(error);
    });
}

function renderCartsList(){
  let str = '';
  let price = 0;
  let quantity = 0;
  Carts.forEach(function(item,index){
    let total = parseInt(item.product.price) * parseInt(item.quantity);
    quantity += parseInt(item.quantity);
    price += total;
    str += `<tr>
              <td>
                  <div class="cardItem-title">
                      <img src="${item.product.images}" alt="">
                      <p>${item.product.title}</p>
                  </div>
              </td>
              <td>NT$${item.product.price.toLocaleString()}</td>
              <td>
              <input type="number" class="js-cartsQuantity" name="cartsQuantity" maxlength="3" data-id='${item.id}' value='${item.quantity.toLocaleString()}'>
              <input type="button" class="js-cartsQuantityBtn" value='修改' data-id='${item.id}'></td>
              <td>NT$${total.toLocaleString()}</td>
              <td class="discardBtn">
                  <a href="#" class="material-icons js-clearCarts" data-id='${item.id}'>
                      clear
                  </a>
              </td>
          </tr>`;
  });
  str += `<tr>
              <td></td>
              <td></td>
              <td>${quantity.toLocaleString()}</td>
              <td>NT$${price.toLocaleString()}</td>
              <td></td>
          </tr>`;
  cartsList.innerHTML = str;
}

cartsList.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.getAttribute('class') == null){
    // console.log(e.target);
    return;    
  }
  if(!e.target.getAttribute('class').match('js-clearCarts')){
    // console.log(e.target);
    return;    
  }
  // console.log('js-clearCarts');
  let id = e.target.getAttribute('data-id');
  axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts/${id}`)
  .then(function (response) {
    alert(`刪除購物車成功。`);
    Carts = response.data.carts;
    renderCartsList();
  }).catch(function(error){
    alert(error);
  });
})

cartsList.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.getAttribute('class') == null){
    // console.log(e.target);
    return;    
  }
  if(!e.target.getAttribute('class').match('js-cartsQuantityBtn')){
    // console.log(e.target);
    return;    
  }
  // console.log('js-clearCarts');
  let id = e.target.getAttribute('data-id');
  let targetQuantity;
  const cartsQuantity = document.querySelectorAll(".js-cartsQuantity");
  cartsQuantity.forEach(function(item){
    // console.log(item);
    let idTarget = item.getAttribute('data-id');
    if(id === idTarget && item.value !== undefined){
      targetQuantity = parseInt(item.value);
    }
  });
  if(isNaN(targetQuantity)){
    alert('修改訂單數量請輸入數字。');
    return;    
  }
  if(targetQuantity == undefined){
    alert('修改訂單數量發生錯誤。');
    return;    
  }  
  if(targetQuantity <=0){
    alert('訂單數量需大於0。');
    return;    
  }
  axios.patch(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`,
  {
    "data": {
      "id": id,
      "quantity": targetQuantity
    }
  })
  .then(function (response) {
    alert(`修改訂閱單數量成功。`);
    Carts = response.data.carts;
    renderCartsList();
  }).catch(function(error){
    alert(error);
  });
})

clearCartsAll.addEventListener('click',function(e){
  e.preventDefault();  
  if(Carts.length == 0)
  {
    alert('購物車無產品，無法刪除。');
    return;    
  }
  axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`)
  .then(function (response) {
    alert(`刪除全部購物車成功。`);
    Carts = response.data.carts;
    renderCartsList();
  }).catch(function(error){
    alert(error);
  });
})

orderInfoBtn.addEventListener('click',function(e){
  e.preventDefault();
  var constraints = {
    email: {
      // Email is required
      presence: true,
      // and must be an email (duh)
      email: {
        message: "格式不正確"
      }
    },
    Phone: {
      // You need to pick a Phone too
      presence: true,
      // And it must be 8 characters long
      length: {
        minimum: 8,        
        message: "長度須超過8碼"
      }
    },
    Name: {
      // You need to pick a Name too
      presence: true,
      // And it must be 1 characters long
      length: {
        minimum: 1,        
        message: "不可空白"
      }
    },
    Address: {
      // You need to pick a Address too
      presence: true,
      // And it must be 1 characters long
      length: {
        minimum: 1,        
        message: "不可空白"
      }
    }
  };
  let error = validate({
                        Name: customerName.value.trim(),
                        Phone: customerPhone.value.trim(),
                        email: customerEmail.value.trim(),
                        Address: customerAddress.value.trim()
                        }, constraints) || {};
  if(error.Name !== undefined){
    alert(error.Name[0]);
    return;
  }
  if(error.Phone !== undefined){
    alert(error.Phone[0]);
    return;
  }
  if(error.email !== undefined){
    alert(error.email[0]);
    return;
  }
  if(error.Address !== undefined){
    alert(error.Address[0]);
    return;
  }

  if(Carts.length == 0)
  {
    alert('購物車無產品，無法完成訂單。');
    return;    
  }
  

  axios.post(`${baseUrl}/api/livejs/v1/customer/${api_path}/orders`, 
  {
    "data": {
      "user": {
        "name": customerName.value,
        "tel": customerPhone.value,
        "email": customerEmail.value,
        "address": customerAddress.value,
        "payment": tradeWay.value
      }
    }
  })
  .then(function (response) {
    alert(`訂單送出成功。`);
    GetCartsList();
    ClearOrderList();
  }).catch(function(error){
    alert(error);
  });
})

function ClearOrderList(){
  customerName.value = '';
  customerPhone.value = '';
  customerEmail.value = '';
  customerAddress.value = '';
  tradeWay.value = "ATM";
}

init();