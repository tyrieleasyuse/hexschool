const component = {
    productData : [
        {
            id : 1,
            title : "產品A",
            origin_price : 1000,
            price : 900,
            is_enabled : false
        },
        {
            id : 2,
            title : "產品B",
            origin_price : 1000,
            price : 900,
            is_enabled : false
        },
        {
            id : 3,
            title : "產品C",
            origin_price : 1000,
            price : 900,
            is_enabled : false
        }
    ],
    renderProductList(){
        const productList = document.querySelector('#productList');
        const productCount = document.querySelector('#productCount');
        let str = '';
        this.productData.forEach((item) =>{
            str += `
            <tr>
              <td>${item.title}</td>
              <td width="120">
                ${item.origin_price}
              </td>
              <td width="120">
                ${item.price}
              </td>
              <td width="100">
                <div class="form-check form-switch">
                  <input class="form-check-input js-enableBtn" type="checkbox" id="is_enabled" ${item.is_enabled? 'checked': ''} data-action="complete" data-id="${item.id}">
                  <label class="form-check-label" for="is_enabled">${item.is_enabled? '啟用' : '未啟用'}</label>
                </div>
              </td>
              <td width="120">
                <button type="button" class="btn btn-sm btn-danger move js-removeBtn" data-action="remove" data-id="${item.id}"> 刪除 </button>
              </td>
            </tr>`;           
        })
        productList.innerHTML = str;
        productCount.innerHTML = this.productData.length;
        this.removeProductItem();
        this.enableProductItem();
    },
    removeProductItem(){
        const removeBtn = document.querySelectorAll('.js-removeBtn');
        removeBtn.forEach(btn => btn.addEventListener('click',(e)=>{
            const id = e.target.dataset.id;
            this.productData.forEach((item, index) => {
                if(item.id == id){
                    this.productData.splice(index,1);
                }
            })
            this.renderProductList();
        }))
    },
    reomveProductAllItem(){        
        const removeBtn = document.querySelector('#clearAll');
        removeBtn.addEventListener('click',(e)=>{
            this.productData = [];
            this.renderProductList();
        })
    },
    enableProductItem(){
        const enableBtn = document.querySelectorAll('.js-enableBtn');
        enableBtn.forEach(btn => btn.addEventListener('change',(e)=>{
            const id = e.target.dataset.id;
            const status = e.target.checked;
            this.productData.forEach((item, index) => {
                if(item.id == id){
                    this.productData[index].is_enabled = status;
                }
            })
            this.renderProductList();
        }))
    },
    addProductList(){
        const addProduct = document.querySelector('#addProduct');
        addProduct.addEventListener('click',(e)=>{
            const timeStamp = Math.floor(Date.now());
            this.productData.push({
                id: timeStamp,
                title: document.querySelector('#title').value.trim(),
                origin_price: parseInt(document.querySelector('#origin_price').value) || 0,
                price: parseInt(document.querySelector('#price').value) || 0,
                is_enabled: false,
              });
            this.renderProductList();
            this.resetProductContent();
        });
    },
    resetProductContent(){        
        document.querySelector('#title').value = '';
        document.querySelector('#origin_price').value = '';
        document.querySelector('#price').value = '';
    },
    init(){
        this.renderProductList();
        this.addProductList();
        this.reomveProductAllItem();
    }
}

component.init();
