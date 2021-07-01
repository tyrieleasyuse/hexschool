<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="deleteAllOrder()">
        清空訂單
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in orders" :key="item.id" class="bg-product-hightlight">
          <tr class="bg-product-hightlight" :class="{ 'bg-product-grey': index % 2 === 0 }">
            <td>{{getDate(item.create_at)}}<br>{{getTime(item.create_at)}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul class="list-unstyled">
                <template v-for="productSet in item.products" :key="productSet.product_id">
                  <li>
                    {{productSet.product.title}} 數量：{{productSet.qty}}
                    {{productSet.product.unit}}
                  </li>
                </template>
              </ul>
            </td>
            <td class="text-right">{{item.total}}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" @change="paidUpdateStatus(item)" v-model="item.is_paid">
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="editOrderItemDialog(item)">檢視</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteOrderItemDialog(item)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
      <OrderModal :order='tempOrder' ref='ordModal' @emit-update="getOrderList"></OrderModal>
      <pagination :item="pagination" @emit-navigate="getOrderList"></pagination>
      <DelModal :item='tempOrder' ref='delModal' @emit-update="getOrderList"></DelModal>
  </div>
</template>

<script>
import OrderModal from '../../components/OrderModal.vue'
import pagination from '../../components/Pagination.vue'
import DelModal from '../../components/DelModal.vue'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

export default {
  components: {
    OrderModal,
    pagination,
    DelModal,
    Loading
  },
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  methods: {
    getOrderList (page) {
      const targetPage =
        page === undefined ? this.pagination.current_page : page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=` + targetPage
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          const success = response.data.success
          if (success) {
            this.orders = response.data.orders
            this.pagination = response.data.pagination
            this.isLoading = false
          } else {
            const message = response.data.message
            this.$toast.error(message)
            this.$router.push('/')
            this.isLoading = false
          }
        })
        .catch((error) => {
          this.$toast.error(error)
          this.isLoading = false
        })
    },
    deleteOrderItemDialog (item) {
      item.is_order = true
      this.tempOrder = JSON.parse(JSON.stringify(item))
      this.$refs.delModal.openModal()
    },
    deleteAllOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http
        .delete(url)
        .then((response) => {
          const success = response.data.success
          if (success) {
            this.getOrderList()
            this.$toast.error('已清空所有訂單。')
          } else {
            const message = response.data.message
            this.$toast.error(message)
          }
        })
        .catch((error) => {
          this.$toast.error(error)
        })
    },
    paidUpdateStatus (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/` + item.id
      const requestData = {
        data: {
          is_paid: item.is_paid
        }
      }
      this.isLoading = true
      this.$http
        .put(url, requestData)
        .then((response) => {
          const success = response.data.success
          if (success) {
            this.$toast.error('已更新訂單狀態。')
            this.isLoading = false
          } else {
            const message = response.data.message
            this.$toast.error(message)
            this.isLoading = false
          }
        })
        .catch((error) => {
          this.$toast.error(error)
          this.isLoading = false
        })
    },
    editOrderItemDialog (item) {
      this.tempOrder = JSON.parse(JSON.stringify(item)) // 需深層拷貝，避免圖片物件刪除未送出，下次編輯時卻未帶出的Bug。
      this.$refs.ordModal.openModal()
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
    }
  },
  mounted () {
    this.getOrderList(1)
  }
}
</script>
