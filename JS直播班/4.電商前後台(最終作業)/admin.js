// 請代入自己的網址路徑
const api_path = "hunterchen";
const token = "hT61xcJ5Q8Zidu6bfBdabyqFLU63";
const baseUrl = "https://hexschoollivejs.herokuapp.com"; 

const orderList = document.querySelector('.orderList');
const discardAllBtn = document.querySelector('.discardAllBtn');

let Orders = [];

// 取得訂單列表
function GetOrderList(){
  axios.get(`${baseUrl}/api/livejs/v1/admin/${api_path}/orders`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      // console.log(response.data);
      Orders = response.data.orders;
      RenderOrderList();
      RednerC3();
    }).catch(function(error){
      alert(error);
    });
}

//畫圓餅圖
function RednerC3(){
  // console.log(Orders);
  let weight = {};
  Orders.forEach(function(itemOrder,indexOrder){
    itemOrder.products.forEach(function(item,index){
       if(weight[item.category] == undefined){
        weight[item.category] = parseInt(item.price) * parseInt(item.quantity);
       }else{
        weight[item.category] += parseInt(item.price) * parseInt(item.quantity)
       }        
    });
  });
  let dataC3 = [];

  Object.keys(weight).forEach(function(item,index){
     let col = [];
     col.push(item);
     col.push(weight[item]);
     dataC3.push(col);
  });

  
// C3.js
let chart = c3.generate({
  bindto: '#chart', // HTML 元素綁定
  data: {
      type: "pie",
      columns: dataC3
      ,
      colors:{
          "床架":"#DACBFF",
          "收納":"#9D7FEA",
          "窗簾": "#5434A7"
      }
  },
});
}

//顯示訂單列表
function RenderOrderList(){
  let str = ''
  // console.log(Orders);
  Orders.forEach(function(item,index){
    var ticks = item.createdAt *1000;
    var d = new Date(ticks).getFullYear() + "-" + (new Date(ticks).getMonth() + 1 ) + "-" + new Date(ticks).getDate()
    str += `
    <tr>
        <td>${item.id}</td>
        <td>
          <p>${item.user.name}</p>
          <p>${item.user.tel}</p>
        </td>
        <td>${item.user.address}</td>
        <td>${item.user.email}</td>
        <td>`;
    item.products.forEach(function(itemproduct){
    str += `
          <p>${itemproduct.title}</p>
          `;
    })
    str += `
        </td>
        <td>${d}</td>
        <td class="orderStatus">
          <a href="#" class='js-paid' data-id='${item.id}'>${item.paid ? '已處理' : '未處理'}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" data-id='${item.id}' value="刪除">
        </td>
    </tr>`;
  });
  orderList.innerHTML=str;
}

//刪除全部訂單
discardAllBtn.addEventListener('click',function(e){
  if(Orders.length === 0){
    alert("無訂單資料可刪除。")
    return;
  }
  axios.delete(`${baseUrl}/api/livejs/v1/admin/${api_path}/orders`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      alert('已刪除全部訂單。');
      Orders = response.data.orders;
      RenderOrderList();
      RednerC3();
    }).catch(function(error){
      alert(error);
    });
})

//刪除一筆訂單
orderList.addEventListener('click',function(e){
  if(e.target.getAttribute('class') != 'delSingleOrder-Btn'){
    return;
  }
  let id =e.target.getAttribute('data-id');
  axios.delete(`${baseUrl}/api/livejs/v1/admin/${api_path}/orders/${id}`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      alert('已刪除訂單:' + id);
      Orders = response.data.orders;
      RenderOrderList();
      RednerC3();
    }).catch(function(error){
      alert(error);
    });
})
//更新處理狀態
orderList.addEventListener('click',function(e){
  if(e.target.getAttribute('class') != 'js-paid'){
    return;
  }
  if(e.target.textContent === "已處理"){
    alert("目前為已處理狀態，不可再變更。")
    return;
  }
  let id =e.target.getAttribute('data-id');
  axios.put(`${baseUrl}/api/livejs/v1/admin/${api_path}/orders`,
  {
    "data": {
      "id": id,
      "paid": true
    }
  },
  {
    headers: {
      'Authorization': token,
    }
  }).
    then(function (response) {
      alert('已設定為已處理狀態:' + id);
      Orders = response.data.orders;
      RenderOrderList();
      RednerC3();
    }).catch(function(error){
      alert(error);
    });
})


GetOrderList();