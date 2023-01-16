<template>
  <div class="progress">
    <white-button>Назад</white-button>
     <div class="progress__bar">
       <h3 class="progress__title">Заполнено на 25%</h3>
       <div class="progress__border">
          <div class="progress__line"></div>
       </div>
     </div>
    <white-button>Далее</white-button>
  </div>
</template>

<script>
import WhiteButton from './UI/WhiteButton.vue'
  export default {
  components: { WhiteButton },
    
  }
</script>

<style lang="scss" scoped>

.progress{
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.progress__line{
  background-color: $main-color;
  width: 25%;
  height: 4px;
}

</style>