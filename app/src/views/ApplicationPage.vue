<template>
  <div>
    <h2 class="title"> {{ setTitle }} </h2>
    <section v-if="this.$route.query.step === 'cities' || this.$route.query.step === 'naming' ">
      <my-input class="selector__input" />
      <ul class="selector__ul" v-if="this.$route.query.step === 'cities'">
        <li class="selector__li" @click="select">Москва</li>
        <li class="selector__li" @click="select">Санкт-Петербург</li>
        <li class="selector__li" @click="select">Краснодар</li>
      </ul>
    </section>
    <description-comp v-if="this.$route.query.step === 'product'" />
    <progress-bar class="progress" />
  </div>

 
</template>

<script>
import { mapMutations } from 'vuex'
import ProgressBar from '../components/ProgressBar.vue'
import DescriptionComp from '@/components/DescriptionComp.vue'
export default {
  components: {
    ProgressBar, DescriptionComp
  },

  data() {
    return {
      title: {
        cities: 'В какой город РФ нужно доставить товары?',
        naming: 'Придумайте название заявки',
        product: 'Кратко опишите товары, которые планируете завозить',
      },
    
    }
  },

  computed: {
    setTitle() {
      if (this.$route.query.step === 'cities') {
        return this.title.cities
      } else if(this.$route.query.step === 'naming'){
        return this.title.naming
      }  else if(this.$route.query.step === 'product'){
        return this.title.product
      }
      return ''
    },
  },

  methods: {
    ...mapMutations([
      'SET_INPUT', 'SAVE_INPUT_VALUE'
    ]),

    select($event) {
      let value = $event.target.textContent
      this.SAVE_INPUT_VALUE(value)
      const data = {
        inputValue: value,
        inputPath: this.$route.query.step
      }
      this.SET_INPUT(data)
    },

  },

  mounted() {
     console.log(this.$route)
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

.progress{
  margin-top: 8.6rem;
}

</style>