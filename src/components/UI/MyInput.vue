<template>

    <input class="input" v-model="value">
  
</template>

<script>
  export default {
    name:'my-input',
    data(){
      return{
        value:''
      }
    }
  }
</script>

<style lang="scss" scoped>
.input{
  width: 100%;
  height: 6.6rem;
  border: 2px solid #D9E1E7;
  border-radius: 1rem 0  0 1rem;
  background-color: #fff;
  color: #809FB8;
  display: block;
  font-family: Raleway,system-ui,-apple-system,sans-serif;
  font-size: 2rem;
  line-height: 2.3rem;
  font-weight: 600;
  padding: 0.7rem 1.25rem;
  outline: none;
}
::placeholder{
   color: #809FB8;
}

</style>