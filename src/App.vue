<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
  // import { useQuery } from '@urql/vue';
  // import proxyHelper from './helpers/proxyHelper'
  import NavBar from './components/NavBar.vue'
  export default {
    data() {
      return {
        results: null,
        rawObj: null
      }
    },
    components: {
      NavBar
    },
    methods: {
      // onGetTraders() {
      //   console.log(proxyHelper(this.results.traders))
      // }
    },
    // created() {
    //   const res  = useQuery({
    //     query:`
    //     {
    //       traders {
    //         id
    //         name
    //         description
    //       }
    //     }
    //     `
    //   })
    //   this.results = res.data
    // }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
