<template>
    <my-dialog>
      <my-button>Войти</my-button>
    </my-dialog>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import MyDialog from './components/UI/MyDialog.vue'
   export default {
    components: {
    MainLayout, MyDialog
  },

    computed:{
      layout(){
        return(this.$route.meta.layout || 'main-layout')
      }
    }
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
