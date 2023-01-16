<template>
     <div class="container header-container">
      <header class="header">
        <MyLogo @click="this.$router.push('/')" />
        <nav class="nav">
          <ul class="nav__ul">
            <li class="nav__li nav__li-after">Специалистам</li>
    
            <li class="nav__li">Войти</li>
          </ul>
        </nav>
      </header>
    </div>
</template>

<script>
import MyLogo from './UI/MyLogo.vue';
  export default {
    components:{
      MyLogo
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
 margin:0px 0px 0px 6px;
}

}


</style>