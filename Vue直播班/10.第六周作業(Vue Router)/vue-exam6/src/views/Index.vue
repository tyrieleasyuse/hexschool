<template>
  <h1>首頁</h1>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_PATH)
  }
}
</script>
