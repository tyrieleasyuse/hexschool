<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <span v-if="item.is_product">
          <strong class="text-danger">{{ item.title }}</strong>
          商品(刪除後將無法恢復)。
          </span>
          <span v-if="item.is_order">
          該訂單(刪除後將無法恢復)。
          </span>
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
            class="btn btn-danger"
            @click="deleteProductItem"
          >
            確認刪除
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
  // 帶入物件需類別驗證為type : Object，預設值為空物件
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      delProductModal: ''
    }
  },
  methods: {
    deleteProductItem () {
      if (this.item.is_product) {
        const id = this.item.id
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
        this.$http
          .delete(url)
          .then((response) => {
            const success = response.data.success
            if (success) {
              this.$emit('emit-update')
              this.delProductModal.hide()
            } else {
              const message = response.data.message
              alert(message)
            }
          })
          .catch((error) => {
            alert(error)
          })
      } else if (this.item.is_order) {
        const id = this.item.id
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
        this.$http
          .delete(url)
          .then((response) => {
            const success = response.data.success
            if (success) {
              this.$emit('emit-update')
              this.delProductModal.hide()
            } else {
              const message = response.data.message
              alert(message)
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    },
    openModal () {
      this.delProductModal.show()
    },
    closeModal () {
      this.delProductModal.hide()
    }
  },
  mounted () {
    const myDelProductModal = document.querySelector('#delProductModal')
    this.delProductModal = new Modal(myDelProductModal)
  }
}
</script>
