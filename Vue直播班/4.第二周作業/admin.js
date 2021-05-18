
const componet = {
    "products": [
        {
            "category": "衣服3",
            "content": "這是內容",
            "description": "Sit down please 名設計師設計",
            "id": "-L9tH8jxVb2Ka_DYPwng",
            "imageUrl" : "主圖網址",
            "imagesUrl": [
              "圖片網址一",
              "圖片網址二",
              "圖片網址三",
              "圖片網址四",
              "圖片網址五"
            ],
            "is_enabled": 1,
            "num": 1,
            "origin_price": 100,
            "price": 600,
            "title": "[賣]動物園造型衣服3",
            "unit": "個"
        }
    ],
    "axois" : {
        url : 'https://vue3-course-api.hexschool.io/api',
        api_path : 'hunterchen'
    },
    getProductList(){
        const url = `${this.axois.url}/${this.axois.api_path}/products?page=1`
        axios.get(url)
        .then(response => {
            this.products = response.data.products;
            this.renderProductList();
        })
        .catch(error=>{
            alert(error);
        })
    },
    renderProductList(){
        const productList = document.querySelector('#productList');
        const productCount = document.querySelector('#productCount');
        let str=''
        this.products.forEach(item =>{
            str+=`<tr>
            <td>${item.category}</td>
            <td width="120">
              ${item.origin_price}
            </td>
            <td width="120">
            ${item.price}
            </td>
            <td width="100">
              <span class="${item.is_enabled === 1 ? 'text-primary' : ''}">${item.is_enabled === 1 ? '啟用' : '未啟用'}</span>
            </td>
            <td width="120">
              <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn js-deleteBtn" data-action="remove" data-id="${item.id}"> 刪除 </button>
            </td>
          </tr>`;
        })
        productList.innerHTML = str;
        productCount.innerHTML = this.products.length;

        this.removeProductAllItem();
    },
    removeProductAllItem(){
        const remove = document.querySelectorAll('.js-deleteBtn');
        remove.forEach(btn => btn.addEventListener('click', (e)=>{
            var dialog = confirm("你確定要刪除產品嗎?");
            if (dialog === true) {
                const id = e.target.dataset.id;            
                const url = `${this.axois.url}/${this.axois.api_path}/cart/${id}`;
                axios.delete(url)
                .then(response => {
                    const success = response.data.success;
                    if(success){
                        this.products.forEach((item,index)=>{
                            if(item.id === id){
                                this.products.splice(index,1);
                            }
                        })
                        this.renderProductList();
                    }else{
                        alert(success);
                    }
                })
                .catch(error=>{
                    alert(error);
                })
            }
        }))
    },
    init(){
        this.getProductList();
    }
}

componet.init();
