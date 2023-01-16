<template>
  <HeaderComp />
  <div class="container">
    <main class="main-box">
      <router-view />
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

  export default {
    components: { HeaderComp },
    name:'start-layout'
}
</script>

<style lang="scss" scoped>


.container{
   padding: 0 2rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 1270px; // 1230 + 20 + 20
}
</style>