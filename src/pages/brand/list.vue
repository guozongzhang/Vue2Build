<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我想告诉你这是一个列表</h2>
    <ul>
      <li v-for="item in list" @click="taskMeName(item)">这里面的名字是{{item.name}};这里面的id是{{item.id}}</li>
    </ul>
    <button @click="addLi()">添加一个li</button>

    <LoginTemp :Loginlist="list" @select-type="onSelectType"></LoginTemp>
  </div>
</template>

<script>
let model
import Login from '@/components/login/login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这里面是一个商品列表',
      list: []
    }
  },
  created () {
    model = this
    model.list = [
      {
        name: 'xx',
        id: 1
      },
      {
        name: 'mm',
        id: 2
      }
    ]
  },
  mounted () {
  },


  components: {
    LoginTemp: Login
  },
  methods: {
    // 算作是注释吧
    // item obj 单个li对象;
    taskMeName (item) {
      alert(item.name)
    },
    addLi () {
      model.list.push(model.list[0])
    },
    onSelectType () {
      console.log('xxxxx', )
    }
  },
  watch: {
    list: function (val) {
      console.log('xxxxxxxxxxx', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
