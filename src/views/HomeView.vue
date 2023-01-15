<template>

  <header class="header">
    <h1 class="title">Delegat — бесплатный помощник в мире ВЭД</h1>
  </header>
  <section class="content">
    <div class="selector">
      <h2 class="selector__title">Из какой страны вы планируете завозить товары?</h2>
      <div class="input-box">
        <my-input class="selector__input" placeholder="Haпример: Китай"></my-input>
      <my-button class="input-box__btn">Найти</my-button>
      </div>
      <ul class="selector__ul">
        <li class="selector__li">Китай</li>
        <li class="selector__li">Германия</li>
        <li class="selector__li">Казахстан</li>
      </ul>
    </div>

    <div class="options">
      <option-box>
        <div class="option__icon">
          <slot></slot>
        </div>
        <img src="@/assets/images/icons/magnifying-glass.svg" alt="icon" class="icon">
        <h3 class="option__title"> Поиск фабрики / товара за границей</h3>
        <p class="option__text">
          Подходит тем, кто не сталкивался с ВЭД и не знаете, например, как заплатить на фабрику / поставщику. Наши специалисты проведут вас от заказа товара у поставщика до принятия его на вашем складе
        </p>
        <white-button>Заказать</white-button>
      </option-box>

        <option-box>
        <div class="option__icon">
          <slot></slot>
        </div>
        <img src="@/assets/images/icons/user.svg" alt="icon" class="icon">
        <h3 class="option__title">Личный менеджер на поставку</h3>
        <p class="option__text">Подходит тем, кто не сталкивался с ВЭД и не знаете, например, как заплатить на фабрику / поставщику. Наши специалисты проведут вас от заказа товара у поставщика до принятия его на вашем складе</p>
        <white-button>Заказать</white-button>
      </option-box>
    </div>

  </section>
</template>

<script>
import OptionBox from '@/components/Option-box.vue';
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
  methods: {
    test(event) {
      console.log(event)
      // console.log($event)
    }

  },
  mounted() {
    console.log(this.$data)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  font-size: 64px;
  line-height: 75px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #244156;
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
}

.options {
  display: flex;
  gap: 3rem;
}
.input-box{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.input-box__btn{
  width: 24rem !important;
  height: 6.6rem;
  border-radius: 0 1rem 1rem 0 !important;
}
</style>