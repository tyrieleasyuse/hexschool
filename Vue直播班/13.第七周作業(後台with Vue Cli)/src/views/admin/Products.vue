<template>
  <div>
      <Loading :active="isLoading" :z-index="1060"></Loading>
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="addProductItemDialog">
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in products" :key="item.id">
            <tr
              class="bg-product-hightlight"
              :class="{ 'bg-product-grey': index % 2 === 0 }"
            >
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td class="text-end">{{ item.origin_price }}</td>
              <td class="text-end">{{ item.price }}</td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="editProductItemDialog(item)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteProductItemDialog(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <pagination :item="pagination" @emit-navigate="getProductList"></pagination>
      <ProductModal :product='tempProduct' ref='prodModal' @emit-update="getProductList"></ProductModal>
      <DelModal :item='tempProduct' ref='delModal' @emit-update="getProductList"></DelModal>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'
import ProductModal from '../../components/ProductModal.vue'
import DelModal from '../../components/DelModal.vue'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

export default {
  components: {
    pagination,
    ProductModal,
    DelModal,
    Loading
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imagesUrl: []
      },
      isLoading: false
    }
  },
  methods: {
    getProductList (page) {
      const targetPage =
        page === undefined ? this.pagination.current_page : page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=` + targetPage
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          const success = response.data.success
          if (success) {
            this.products = response.data.products
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
    deleteProductItemDialog (item) {
      item.is_product = true
      this.tempProduct = { ...item }
      this.$refs.delModal.openModal()
    },
    editProductItemDialog (item) {
      this.tempProduct = JSON.parse(JSON.stringify(item)) // 需深層拷貝，避免圖片物件刪除未送出，下次編輯時卻未帶出的Bug。
      this.$refs.prodModal.openModal()
    },
    addProductItemDialog () {
      this.tempProduct = {
        category: '',
        content: '',
        description: '',
        imageUrl: '',
        imagesUrl: [],
        is_enabled: 1,
        num: 1,
        origin_price: 0,
        price: 0,
        title: '',
        unit: '個'
      }
      this.$refs.prodModal.openModal()
    }
  },
  mounted () {
    this.$http.defaults.headers.common.Authorization = this.$cookies.get('token')
    this.getProductList(1)
  }
}
</script>
