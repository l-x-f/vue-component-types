<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AsyncComponents',
  components: {},
  data() {
    return { list: [] }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      setTimeout(() => {
        const data = [
          { name: '你好', time: '2019-01-01 10:10:55' },
          { name: '世界', time: '2012012-01 12:20:00' }
        ]
        this.list = data
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped></style>
