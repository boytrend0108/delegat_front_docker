<template>
  <article class="option-box">
   <slot></slot>
  </article>
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