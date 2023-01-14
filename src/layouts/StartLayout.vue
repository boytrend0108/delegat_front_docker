<template>

    <div class="container header-container">
    <header class="header">
      <MyLogo />
      <nav class="nav">
        <ul class="nav__ul">
          <li class="nav__li">Специалистам</li>
          <li class="nav__li">Войти</li>
        </ul>
      </nav>
    </header>
  </div>

   
  <div class="container">
    <main class="main-box">
      <router-view />
    </main>
    <footer class="footer">Footer</footer>
  </div>

</template>

<script>
import MyLogo from '@/components/UI/MyLogo.vue';

  export default {
    components: { MyLogo },
    name:'start-layout'
}
</script>

<style lang="scss" scoped>

.display{
 
}

.container{
   padding: 0 2rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 1270px; // 1230 + 20 + 20
}

.header-container{
  
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.nav{
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}

.nav__ul{
  display: flex;
  gap:1rem;

}

.nav__li{

}



</style>