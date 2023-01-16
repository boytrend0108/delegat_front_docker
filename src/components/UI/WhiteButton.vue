<template>
 
  <button class="btn">
    <slot></slot>
  </button>
 
</template>

<script>
  export default {
    name:'white-button'
  }
</script>

<style lang="scss" scoped>

.btn{
  color:$main-color ;
  background-color: $bg-color;
  border-radius: 1rem;
  border: 2px solid $main-color;
  width: 20rem;
  height: 5rem;
  cursor: pointer;
  padding: 1.2rem;
  font-size: 2rem;
  transition: 0.6s;
  display: flex;
    align-items: center;
    justify-content: center;
}

.btn:hover{
    background-color: $main-color;
    color: $bg-color;
  }

</style>