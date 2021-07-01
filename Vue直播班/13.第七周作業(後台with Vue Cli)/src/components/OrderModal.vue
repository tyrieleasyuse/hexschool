<template>

  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
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
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table v-if="tempOrder.user" class="table">
                <tbody >
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td> {{tempOrder.user.name}} </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td> {{tempOrder.user.email}} </td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td> {{tempOrder.user.tel}} </td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td> {{tempOrder.user.address}} </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td> {{tempOrder.id}} </td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td> {{getDate(tempOrder.create_at)}}<br>{{getTime(tempOrder.create_at)}} </td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                         {{getDate(tempOrder.paid_date)}}<br>{{getTime(tempOrder.paid_date)}}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong class="text-success" v-if="tempOrder.is_paid">已付款</strong>
                      <span class="text-muted" v-else>尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                       {{tempOrder.total}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.product_id">
                    <th>
                       {{item.product.title}}
                    </th>
                    <td> {{item.qty}}  /  {{item.product.unit}} </td>
                    <td class="text-end">
                       {{item.final_total}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault" v-model="tempOrder.is_paid"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
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
            class="btn btn-primary" @click="editOrderItem(tempOrder)"
          >
            修改付款狀態
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
    order: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      tempOrder: {},
      orderModal: ''
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    openModal () {
      console.log(this.tempOrder)
      this.orderModal.show()
    },
    closeModal () {
      this.orderModal.hide()
    },
    getDate (ticksOfItem) {
      const ticks = ticksOfItem * 1000
      const d = new Date(ticks).getFullYear() + '-' + (new Date(ticks).getMonth() + 1) + '-' + new Date(ticks).getDate()
      return d
    },
    getTime (ticksOfItem) {
      const ticks = ticksOfItem * 1000
      const t = new Date(ticks).getHours() + ':' + new Date(ticks).getMinutes() + ':' + new Date(ticks).getSeconds()
      return t
    },
    editOrderItem (item) {
      const id = this.tempOrder.id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      const requestData = {
        data: this.tempOrder
      }
      this.$http
        .put(url, requestData)
        .then((response) => {
          const success = response.data.success
          if (success) {
            this.$emit('emit-update')
            this.$toast.success('訂單已更新。')
            this.orderModal.hide()
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
  mounted () {
    const myOrderModal = document.querySelector('#orderModal')
    this.orderModal = new Modal(myOrderModal)
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
