<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>就认为这里是登录吧</div>
    <ul>
      <li v-for="item in list" @click="destroy(list, item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
let model
export default {
  name: 'Login',
  props: ['Loginlist'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  created () {
    model = this
    // model.Loginlist.forEach(item => {
    //   model.list.push(item)
    // })
    model.list = model.Loginlist
  },
  mounted () {
  },
  methods: {
    destroy (list, item) {
      list.splice(list.indexOf(item), list.indexOf(item)+1)
      // model.Loginlist = model.list
      // model.$emit('select-type')
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
