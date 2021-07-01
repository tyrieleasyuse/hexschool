<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close bg-product-hightlight bg-product-grey"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">輸入主圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入主圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div>
                <template
                  v-for="(item, index) in tempProduct.imagesUrl"
                  :key="index"
                >
                  <div class="mb-1">
                    <div class="form-group">
                      <label for="imageUrl">輸入圖片{{ index + 1 }}網址</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imagesUrl[index]"
                      />
                    </div>
                    <img
                      class="img-fluid"
                      :src="tempProduct.imagesUrl[index]"
                      alt=""
                    />
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="deleteImageItem(index)"
                    >
                      刪除圖片
                    </button>
                  </div>
                </template>
              </div>
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempImage"
                  />
                </div>
                <img class="img-fluid" :src="tempImage" alt="" />
              </div>
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="addImageItem"
              >
                新增圖片
              </button>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model.number="tempProduct.num"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="editProductItem"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  // props為參考範例原始碼
  // 帶入物件需類別驗證為type : Object，預設值為imagesUrl: []
  props: {
    product: {
      type: Object,
      default () {
        return {
          imagesUrl: []
        }
      }
    }
  },
  data () {
    return {
      tempImage: '',
      tempProduct: {
        imagesUrl: []
      },
      productModal: ''
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  methods: {
    editProductItem () {
      if (this.tempProduct.id === undefined) {
        this.tempImage = ''
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
        const requestData = {
          data: this.tempProduct
        }
        this.$http
          .post(url, requestData)
          .then((response) => {
            const success = response.data.success
            if (success) {
              this.$emit('emit-update')
              this.productModal.hide()
            } else {
              const message = response.data.message
              this.$toast.error(message)
            }
          })
          .catch((error) => {
            this.$toast.error(error)
          })
      } else {
        const id = this.tempProduct.id
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
        const requestData = {
          data: this.tempProduct
        }
        this.$http
          .put(url, requestData)
          .then((response) => {
            const success = response.data.success
            if (success) {
              this.$emit('emit-update')
              this.productModal.hide()
            } else {
              const message = response.data.message
              this.$toast.error(message)
            }
          })
          .catch((error) => {
            this.$toast.error(error)
          })
      }
    },
    deleteImageItem (index) {
      this.tempProduct.imagesUrl.splice(index, 1)
    },
    addImageItem () {
      if (this.tempProduct.imagesUrl === undefined) {
        this.tempProduct.imagesUrl = []
      }
      this.tempProduct.imagesUrl.push(this.tempImage)
    },
    openModal () {
      this.productModal.show()
    },
    closeModal () {
      this.productModal.hide()
    }
  },
  mounted () {
    const myProductModal = document.querySelector('#productModal')
    this.productModal = new Modal(myProductModal)
  }
}
</script>

<style>
.bg-product-hightlight:hover {
    background-color: blanchedalmond;
}

.bg-product-grey {
    background-color: #edf2fa;
}
</style>
