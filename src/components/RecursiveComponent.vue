<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.name">
        <span>{{ item.name }}</span>
        <recursive-component v-if="item.children" :list="item.children" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'RecursiveComponent',
  props: {
    list: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
