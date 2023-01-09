<template>
  <div class="dialog" v-if="showDialog">
    <section class="dialog__content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
   name:'my-dialog',
   props:{
      showDialog:{
        type:Boolean,
        default: true
      }
   }
}
</script>

<style lang="scss" scoped>

.dialog{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  display: flex;
}

.dialog__content{
  margin: auto;
  background-color: #fff;
  border-radius: 1.2rem;
  min-height: 5rem;
  min-width: 10rem;
}

</style>