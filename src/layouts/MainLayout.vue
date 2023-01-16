<template>
  <header-comp />
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
import HeaderComp from "@/components/HeaderComp.vue"

export default {
  components: { HeaderComp },
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