<template>
  <div id="app">
    <h3>局部组件</h3>
    <local-component msg="我是局部组件" />
    <hr />

    <h3>全局组件</h3>
    <global-components />
    <hr />

    <h3>异步组件</h3>
    <async-component />
    <hr />

    <h3>动态组件</h3>
    <button @click="toggle('1')">点击切换组件1</button>
    <button class="btn" @click="toggle('2')">点击切换组件2</button>
    <component :is="currentTabComponent"></component>
    <hr />

    <h3>函数式组件（无状态组件）</h3>
    <function-component title="函数式组件" />
    <hr />

    <h3>递归组件</h3>
    <recursive-component :list="list" />
    <hr />
  </div>
</template>

<script>
import LocalComponent from './components/LocalComponent'
import DynamicComponent1 from './components/DynamicComponent/1'
import DynamicComponent2 from './components/DynamicComponent/2'
import FunctionComponent from './components/FunctionComponent/index'
import RecursiveComponent from './components/RecursiveComponent'

export default {
  name: 'app',
  components: {
    LocalComponent,
    AsyncComponent: () => import('./components/AsyncComponent'),
    DynamicComponent1,
    DynamicComponent2,
    FunctionComponent,
    RecursiveComponent
  },
  data() {
    return {
      currentTabComponent: 'DynamicComponent1',
      list: [
        {
          name: '1',
          children: [
            {
              name: '1-1'
            },
            {
              name: '1-2',
              children: [
                {
                  name: '1-2-1'
                },
                {
                  name: '1-2-2'
                }
              ]
            }
          ]
        },
        {
          name: '2',
          children: [
            {
              name: '2-1',
              children: [
                {
                  name: '2-1-1'
                },
                {
                  name: '2-1-2',
                  children: [
                    {
                      name: '2-1-2-1'
                    },
                    {
                      name: '2-1-2-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggle(type) {
      this.currentTabComponent = 'DynamicComponent' + type
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 100px;
  color: #2c3e50;
}
.btn {
  margin: 20px;
}
ul,
li {
  user-select: none;
}
</style>
