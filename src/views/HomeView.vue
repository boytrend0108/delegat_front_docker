<template>
  
    <header class="header">
      <h1>Delegat — бесплатный помощник в мире ВЭД</h1>
    </header>
    <section class="content">
        <div class="selector">
          <h2>Из какой страны вы планируете завозить товары?</h2>
          <button>Найти</button>
          <ul class="selector__ul">
            <li class="selector__li">Китай</li>
            <li class="selector__li">Германия</li>
            <li class="selector__li">Казахстан</li>
          </ul>
        </div>
        <div class="options">
         <option-box></option-box>
         <option-box></option-box>
         
        </div>
   
  </section>
</template>

<script>
import OptionBox from '@/components/Option-box.vue';


export default {
  name: 'HomeView',
  components: {
   OptionBox
  }
}
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  gap: 3rem;
}
</style>