<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import OtherComponent from './other'
export default {
  name: 'FunctionComponent',
  functional: true,
  components: {
    OtherComponent
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render(h, { props }) {
    const { title } = props
    return (
      <div>
        <p> 我是函数式组件</p>
        <p>props {title}</p>
        <OtherComponent otherInfo={title} title='我是函数式组件的其他组件' />
      </div>
    )
  }
}
</script>
