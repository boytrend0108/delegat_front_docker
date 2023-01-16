<template>

  <header class="header">
    <h1 class="title">Delegat — бесплатный помощник в мире ВЭД</h1>
  </header>
  <section class="content">
    <div class="selector">
      <h2 class="selector__title">Из какой страны вы планируете завозить товары?</h2>
      <div class="input-box">
        <my-input class="selector__input" />
        <my-button 
          class="input-box__btn"
          @click="goToNext"
        >Найти</my-button>
      </div>
      <ul class="selector__ul">
        <li class="selector__li"  @click="select">Китай</li>
        <li class="selector__li"  @click="select">Германия</li>
        <li class="selector__li"  @click="select">Казахстан</li>
    </ul>
    </div>

    <div class="options">
      <option-box class="option-box">
        <div class="option__icon">
          <slot></slot>
        </div>
        <img src="../assets/images/icons/magnifying-glass.svg" alt="icon" class="icon">
        <h3 class="option__title"> Поиск фабрики / товара за границей</h3>
        <p class="option__text">
          Подходит тем, кто не сталкивался с ВЭД и не знаете, например, как заплатить на фабрику / поставщику. Наши специалисты проведут вас от заказа товара у поставщика до принятия его на вашем складе
        </p>
        <white-button class="option_btn">Заказать</white-button>
      </option-box>

        <option-box>
        <div class="option__icon">
          <slot></slot>
        </div>
        <img src="../assets/images/icons/user.svg" alt="icon" class="icon">
        <h3 class="option__title">Личный менеджер на поставку</h3>
        <p class="option__text">Подходит тем, кто не сталкивался с ВЭД и не знаете, например, как заплатить на фабрику / поставщику. Наши специалисты проведут вас от заказа товара у поставщика до принятия его на вашем складе</p>
        <white-button class="option_btn">Заказать</white-button>
      </option-box>
    </div>

  </section>
</template>

<script>
import OptionBox from '../components/OptionBox.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    OptionBox
  },
  data() {
    return {
      inputParam:{
        inputValue: null,
        inputPath: this.$route.path
      },
     
    }
  },


  computed:{
    ...mapGetters([
      'COUNTRY', 'CITY', 'INPUT'
    ]),
  },

  methods: {
    ...mapMutations([
      'SET_INPUT',  'SAVE_INPUT_VALUE'
    ]),
    
    goToNext(){    
      if (this.$route.path === '/') {
        this.inputParam.inputValue = this.COUNTRY
        this.SET_INPUT(this.inputParam)
        this.$router.push('/application?step=cities')
      } else if (this.$route.path === '/cities') {
        this.inputParam.inputValue = this.CITY
        this.SET_INPUT(this.inputParam)
        this.$router.push('/application?item')
      }
    },

    select($event){
        let value = $event.target.textContent
        this.SAVE_INPUT_VALUE(value)
        const data = {
          inputValue: value,
          inputPath: this.$route.path
        } 
        this.SET_INPUT(data)
      },
  },

  mounted(){
    if(this.$route.path === '/'){
      this.inputParam.inputValue = this.COUNTRY
    } else if(this.$route.path === '/cities'){
      this.inputParam.inputValue = this.CITY
    }
  }
}
</script>

<style lang="scss" scoped>

.content{
  margin-bottom: 12.2rem;
}
.title {
  font-weight: 600;
  font-size: 64px;
  line-height: 75px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #244156;
}

.icon{
  width: 4.8rem;
  height: 4.8rem;
}
.selector{
  margin-bottom: 10rem;
}
.selector__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #244156;
  margin-bottom:3rem;
}
.selector__ul{
  display: flex;
  gap: 1rem;
}
.selector__li {
  @include selector__li
}

.options {
  display: flex;
  gap: 3rem;
}

.option__text {
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #416782;
  width: 48rem;
  text-align: left;
}

.option__title{
font-weight: 600;
font-size: 24px;
line-height: 36px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #244156;
margin: 5rem 0 2rem 0 ;
}

.option_btn{
  margin-top:6rem;
}
.input-box{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2rem;
}
.input-box__btn{
  width: $input-box__btn_width !important;
  height: 6.6rem;
  border-radius: 0 1rem 1rem 0 !important;
}

.selector__ul{
  display: flex;
  gap: 1rem;
  margin-top: 2.8rem;
}
.selector__li {
  width: 11.2rem;
  height: 4.2rem;
  background: #F1F4FA;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #416782;
  cursor: pointer;
}

</style>