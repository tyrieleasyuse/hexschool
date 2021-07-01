<template>
  <div class="container">
    <ul class="nav nav-pills" id="mypill" role="pilllist">
      <li class="nav-item" role="presentation">
        <router-link class="nav-link" :class="{active:productsPill}" id="products-pill" @click="pillActive('products')"  data-bs-target="#profile" type="button" role="pill" aria-controls="profile" aria-selected="false" to="/admin/products">產品頁面</router-link>
      </li>
      <li class="nav-item" role="presentation">
      <router-link class="nav-link" :class="{active:ordersPill}" id="orders-pill" @click="pillActive('orders')"  data-bs-target="#messages" type="button" role="pill" aria-controls="messages" aria-selected="false" to="/admin/orders">訂單頁面</router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link class="nav-link" :class="{active:couponsPill}" id="coupons-pill" @click="pillActive('coupons')"  data-bs-target="#settings" type="button" role="pill" aria-controls="settings" aria-selected="false" to="/admin/coupons">優惠券頁面</router-link>
      </li>
      <li class="nav-item" role="presentation">
        <router-link class="nav-link" :class="{active:logoutPill}" id="coupons-pill" @click="pillActive('logout')"  data-bs-target="#settings" type="button" role="pill" aria-controls="settings" aria-selected="false" to="/">登出</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productsPill: true,
      ordersPill: false,
      couponsPill: false,
      logoutPill: false
    }
  },
  methods: {
    pillActive (activePage) {
      if (activePage === 'products') {
        this.productsPill = true
        this.ordersPill = false
        this.couponsPill = false
        this.logoutPill = false
      } else if (activePage === 'orders') {
        this.productsPill = false
        this.ordersPill = true
        this.couponsPill = false
        this.logoutPill = false
      } else if (activePage === 'coupons') {
        this.productsPill = false
        this.ordersPill = false
        this.couponsPill = true
        this.logoutPill = false
      } else if (activePage === 'logout') {
        this.productsPill = false
        this.ordersPill = false
        this.couponsPill = false
        this.logoutPill = true
        this.$cookies.set('token', '')
        this.$toast.success('您已登出。')
      }
    }
  }
}
</script>

<style>
.nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background-color: black;
    color: white;
}
.nav-link {
    color: grey;
}
.nav-link:hover, .nav-link:focus {
    color: black;
}
</style>
