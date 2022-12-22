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
@font-face {font-family: Bender; src: url('./assets/fonts/Bender/Jovanny\ Lemonad\ -\ Bender.otf')}
@font-face {font-family: BenderBold; src: url('./assets/fonts/Bender/Jovanny\ Lemonad\ -\ Bender-Bold.otf')}
#app {
  font-family: Bender, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
