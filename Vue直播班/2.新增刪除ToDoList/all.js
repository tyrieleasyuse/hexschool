
const component = {
  data : [
    {'content':'代辦事項1'},
    {'content':'代辦事項2'},
    {'content':'代辦事項3'}
  ],
  saveData(text){
    if(text == ''){
      alert('請輸入代辦事項');
      return;
    }
    let obj ={};
    obj.content = text;
    this.data.push(obj);
    this.renderList();
  },
  removeData(index){
    this.data.splice(index,1);
    this.renderList();
  },
  renderList(){
    const list = document.querySelector('.component .list');
    list.innerHTML = '';
    this.data.forEach((item,index) => {
      let str = `
      <li>${item.content} <input type="button" class="delete" data-num="${index}" value="刪除"></li>
      `;
      list.innerHTML += str;
    })

    const deleteBtn = document.querySelectorAll('.component .list .delete');
    
    deleteBtn.forEach(item => item.addEventListener('click',(e)=>{
      console.log(e.target.getAttribute('data-num'));
      this.removeData(e.target.getAttribute('data-num'));
    }));
    
  },
  init(){
    this.renderList();
    

    const txt = document.querySelector('.txt');
    const save = document.querySelector('.save');
    save.addEventListener('click',(e) => {
      console.log(save);
      this.saveData(txt.value);
    });
  }
}

component.init();