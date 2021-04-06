const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
let data = [
];

const list = document.querySelector('.list');

function renderList(){
  list.innerHTML = '';
  data.forEach(function(item,index){
    let str = `
    <li>${item.content} <input type="button" class="delete" data-num="${index}" value="刪除"></li>
    `;
    list.innerHTML += str;
  })
}

save.addEventListener('click',function(e){
  if(txt.value == ''){
    alert('請輸入代辦事項');
    return;
  }
  let obj ={};
  obj.content = txt.value;
  data.push(obj);
  renderList();
});

list.addEventListener('click',function(e){
  if(e.target.getAttribute('class') != 'delete'){
    return;
  }
  let num = e.target.getAttribute('data-num');
  data.splice(num,1);
  renderList();
})

renderList();