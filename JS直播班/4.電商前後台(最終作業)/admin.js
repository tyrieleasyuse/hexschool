// 請代入自己的網址路徑
const api_path = "hunterchen";
const token = "hT61xcJ5Q8Zidu6bfBdabyqFLU63";

const OrderList = document.querySelector('.OrderList');
const discardAllBtn = document.querySelector('.discardAllBtn');

let Orders = [];

// 取得訂單列表
function getOrderList(){
  axios.get(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/${api_path}/orders`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      console.log(response.data);
      Orders = response.data.orders;
      renderOrderList();
      rednerC3();
    });
}

//畫圓餅圖
function rednerC3(){
  let weight = {};
  Orders.forEach(function(itemOrder,indexOrder){
    itemOrder.products.forEach(function(item,index){
       if(weight[item.category] == undefined){
        weight[item.category] = 1;
       }else{
        weight[item.category] += 1;
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
function renderOrderList(){
  let str = ''
  Orders.forEach(function(item,index){
    // var ticks = item.createdAt + new Date(1970, 1, 1).getTime();
    // var d = new Date(ticks).getFullYear() + "-" + new Date(ticks).getMonth() + "-" + new Date(ticks).getDate()
    var d = item.createdAt;
    str += `
    <tr>
        <td>${item.id}</td>
        <td>
          <p>${item.user.name}</p>
          <p>${item.user.tel}</p>
        </td>
        <td>${item.user.address}</td>
        <td>${item.user.email}</td>
        <td>
          <p>${item.products[0].title}</p>
        </td>
        <td>${d}</td>
        <td class="orderStatus">
          <a href="#">${item.paid == false ? '已處理' : '未處理'}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" data-id='${item.id}' value="刪除">
        </td>
    </tr>`;
  });
  OrderList.innerHTML=str;
}

//刪除全部訂單
discardAllBtn.addEventListener('click',function(e){
  axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/${api_path}/orders`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      alert('已刪除全部訂單。');
      getOrderList();
    });
})

//刪除一筆訂單
OrderList.addEventListener('click',function(e){
  if(e.target.getAttribute('class') != 'delSingleOrder-Btn'){
    return;
  }
  let id =e.target.getAttribute('data-id');
  axios.delete(`https://hexschoollivejs.herokuapp.com/api/livejs/v1/admin/${api_path}/orders/${id}`,
  {
    headers: {
      'Authorization': token,

    }
  }).
    then(function (response) {
      alert('已刪除訂單:' + id);
      getOrderList();
    });
})


getOrderList();