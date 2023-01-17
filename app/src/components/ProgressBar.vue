<template>
  <div class="progress">
    <white-button 
    class="btn"
    @click="this.$router.push('/')"
    > <font-awesome-icon icon="fa-solid fa-chevron-left" />Назад</white-button>
     <div class="progress__bar">
       <h3 class="progress__title">{{step}}</h3>
       <div class="progress__border">
          <div class="progress__line"></div>
       </div>
     </div>
    <white-button class="btn" @click="GO_TO_NEXT_STEP(this.$route)" >Далее  
      <font-awesome-icon icon="fa-solid fa-chevron-right icon" />
    </white-button>
  </div>
</template>

<script>
import WhiteButton from './UI/WhiteButton.vue'
import { mapActions } from 'vuex';
  export default {
  components: { WhiteButton },
  data(){
    return{
      // step:'Заполнено на 25%',
    }
  },

  computed:{
    step(){
       if(this.$route.query.step === 'cities'){
        return 'Заполнено на 20%'
       } else if(this.$route.query.step === 'naming'){
        return 'Заполнено на 40%'
       } else if(this.$route.query.step === 'product'){
        return 'Заполнено на 60%'
       } 
       return ''
    }
  },

  methods:{
    ...mapActions([
      'GO_TO_NEXT_STEP'
    ])
  }
    
  }
</script>

<style lang="scss" scoped>

.progress{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #D9E1E7;
  padding-top: 4.2rem;
}
.progress__title {
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #416782;
}

.progress__bar{
  max-width: 34rem;
  flex-grow: 1;
}
.progress__border{
  height: 2px;
  background-color: #ECF0F3;
  margin-top: 1.3rem;
}
.progress__line{
  background-color: $main-color;
  width: 25%;
  height: 4px;
}
.btn{
  background-color: $bg-color;
  color:#416782;
}
 

.svg-inline--fa{
  margin:0 8px;
  font-size: 14px;
}

</style>