<template>
  <div class="container">
    <div class="row justify-content-center mt-5 text-center">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username"
              placeholder="name@example.com" required autofocus v-model="signin.username">
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password"
              placeholder="Password" required v-model="signin.password">
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="userSignin">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted text-center">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userSignin () {
      if (this.signin.username.trim() === '' || this.signin.password.trim() === '') {
        alert('請輸入帳號密碼進行登入!')
        return
      }
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(url, this.signin)
        .then(response => {
          const success = response.data.success
          if (success) {
            const token = response.data.token
            this.$cookies.set('token', token)
            this.$toast.success('登入成功。')
            this.$router.push('/admin/products')
          } else {
            const message = response.data.message
            this.$toast.error(message)
          }
        })
        .catch(error => {
          this.$toast.error('系統發生錯誤，請稍後在試。' + error)
        })
    }
  }
}
</script>

<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.text-center{
    text-align: center;
}
</style>
