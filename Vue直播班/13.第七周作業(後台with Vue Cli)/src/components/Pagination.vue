<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !item.has_pre }"
        @click.prevent="navigatePage(item.current_page - 1)"
      >
        <a class="page-link" href="#">上一頁</a>
      </li>
      <template v-for="index in item.total_pages" :key="index">
        <li
          class="page-item"
          :class="{ active: index === item.current_page }"
          @click.prevent="navigatePage(index)"
        >
          <a class="page-link" href="#">{{ index }}</a>
        </li>
      </template>
      <li
        class="page-item"
        :class="{ disabled: !item.has_next }"
        @click.prevent="navigatePage(item.current_page + 1)"
      >
        <a class="page-link" href="#">下一頁</a>
      </li>
    </ul>
  </nav>
</template>

<script>
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
  methods: {
    navigatePage (index) {
      this.$emit('emit-navigate', index)
    }
  }
}
</script>
