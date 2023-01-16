<template>
  <div class="container header-container">
    <header class="header">
      <MyLogo />
      <nav class="nav">
        <ul class="nav__ul">
          <li class="nav__li nav__li-after">Специалистам</li>

          <li class="nav__li">Войти</li>
        </ul>
      </nav>
    </header>
  </div>
  <div class="container">
    <aside class="side-bar">
      <ul class="side-bar__ul">
        <li 
          class="side-bar__li active"
          @click="activeBtn"
          >Поставка</li>
        <li 
          class="side-bar__li"
          @click="activeBtn"
        >Поддержка</li>
      </ul>
    </aside>
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
  name:'start-layout',

  methods:{
    activeBtn($event){
      const activeLi = document.querySelector(".active")
      activeLi.classList.remove('active')
      $event.target.classList.add('active')
    }
  }

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

.header{
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 3rem;
}

.nav{
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-between;

.nav__ul{
display: flex;
gap:1rem;
}

.nav__li{
font-weight: 500;
font-size: 14px;
line-height: 21px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #416782;
cursor: pointer;
}

.nav__li-after::after{
 content: url(@/assets/images/icons/shevron.svg);
 margin:0px 0px 0px 10px;
}

}



.side-bar{
  width: 28.5rem;
  height: 100vh;
  .side-bar__ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .side-bar__li {
      font-weight: 600;
      font-size: 17px;
      line-height: 26px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #244156;
      padding: 1.2rem 3rem;
      cursor: pointer;
      width: 100%;
      text-align: left;
      border-radius: 1rem;
    }
  .active{
    background-color: #F1F4FA;
    color: #339DFF;
  }
}
</style>