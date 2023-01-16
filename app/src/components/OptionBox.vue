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
  height: 47.2rem;
  border: 2px solid #D9E1E7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6.6rem 6rem  6rem 6rem;
  
  
 }
</style>