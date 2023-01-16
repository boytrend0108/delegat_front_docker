<template>
  <div>
    <h2 class="title">{{ setTitle }}</h2>
    <my-input class="selector__input" />
    <ul class="selector__ul">
        <li class="selector__li"  @click="select">Москва</li>
        <li class="selector__li"  @click="select">Санкт-Петербург</li>
        <li class="selector__li"  @click="select">Краснодар</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
  data() {
    return {
      title: {
        cities: 'В какой город РФ нужно доставить товары?',
      }
    }
  },

    computed:{
      setTitle(){
       if(this.$route.query.step === 'cities'){
         return this.title.cities
       } 
       return ''
    },
    },

    methods:{
      ...mapMutations([
      'SET_INPUT'
    ]),

    select($event){
        this.value = $event.target.textContent
        const data = {
          inputValue: this.value,
          inputPath: this.path
        } 
        this.SET_INPUT(data)
      },

    },

    mounted(){
      console.log(this.$route.query.step)
    }
  }
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #244156;
}

.selector__input{
  margin-top: 4.5rem;
}
.selector__ul{
  display: flex;
  gap: 1rem;
  margin-top: 2.8rem;
}
.selector__li {
  @include selector__li
}

</style>