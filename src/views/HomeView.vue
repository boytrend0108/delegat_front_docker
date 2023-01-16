<template>

  <header class="header">
    <h1 class="title">Delegat — бесплатный помощник в мире ВЭД</h1>
  </header>
  <section class="content">
    <div class="selector">
      <h2 class="selector__title">Из какой страны вы планируете завозить товары?</h2>
      <div class="input-box">
        <my-input class="selector__input" placeholder="Haпример: Китай" />
        <my-button 
        class="input-box__btn"
        @click="SET_COUNTRY(COUNTRY)"
        >Найти</my-button>
      </div>
    </div>

    <div class="options">
      <option-box class="option-box">
        <div class="option__icon">
          <slot></slot>
        </div>
        <img src="@/assets/images/icons/magnifying-glass.svg" alt="icon" class="icon">
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
        <img src="@/assets/images/icons/user.svg" alt="icon" class="icon">
        <h3 class="option__title">Личный менеджер на поставку</h3>
        <p class="option__text">Подходит тем, кто не сталкивался с ВЭД и не знаете, например, как заплатить на фабрику / поставщику. Наши специалисты проведут вас от заказа товара у поставщика до принятия его на вашем складе</p>
        <white-button class="option_btn">Заказать</white-button>
      </option-box>
    </div>

  </section>
</template>

<script>
import OptionBox from '@/components/OptionBox.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    OptionBox
  },
  data() {
    return {
      message: 'Hello!!',
      counter: 0,
    }
  },

  computed:{
    ...mapGetters([
      'COUNTRY'
    ])
  },

  methods: {
    ...mapMutations([
      'SET_COUNTRY'
    ]),
  },

  mounted() {

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
</style>