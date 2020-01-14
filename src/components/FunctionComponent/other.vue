<template functional>
  <div>
    {{ props.title }}
    <p>
      otherInfo
      {{ props.otherInfo }}
    </p>
  </div>
</template>
<script>
export default {
  functional: true,
  props: {
    title: {
      default: '',
      type: String
    },
    otherInfo: {
      default: '',
      type: String
    }
  }
}
</script>
