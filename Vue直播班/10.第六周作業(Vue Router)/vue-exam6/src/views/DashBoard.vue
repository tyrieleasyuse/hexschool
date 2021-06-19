<template>
  <div id="nav">
    <router-link to="/admin/login">登入</router-link> |
    <router-link to="/admin/products">後台購物車列表</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
