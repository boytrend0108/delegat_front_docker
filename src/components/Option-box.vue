<template>
  <div class="option-box">
    <div class="option__icon">
      <slot></slot>
    </div>
    <img src="" alt="icon" class="icon">
    <h3 class="option__title">
      <slot></slot>
    </h3>
    <button class="option__btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name:'option-box'
     
  }
</script>

<style lang="scss" scoped>
 .option-box{
  width: 60rem;
  height: 40rem;
  border: 2px solid #D9E1E7;
 }
</style>