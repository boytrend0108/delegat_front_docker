<template>

<div class="input-box">
  <input 
    class="input" 
    v-model="value" 
    @focus="showListFn" 
    @blur="showListFn"
    @input="filterCountryFn"
    >
    <ul v-if="showList" class="input__ul">
      <li 
        @click="select"
        v-for="country in filtered" 
        :key="country.id" 
        class="input__li">{{ country }}
      </li>
    </ul>

</div>
   
  
</template>

<script>
import inputData from "@/api/inputData"
import { mapMutations } from "vuex"

  export default {
    name:'my-input',
    data(){
      return{
        path: this.$route.path,
        value:'',
        showList: false,
        countries: inputData.countries ,
        cities: inputData.cities,
        filtered:[]    
      }
    },
    methods:{
      ...mapMutations([
        'SET_INPUT', "SAVE_INPUT_VALUE"
      ]),

      showListFn(){
        setTimeout(()=>{
          this.showList = !this.showList
        }, 200)    
      },

      filterCountryFn(){
        this.SAVE_INPUT_VALUE(this.value)
        if(this.$route.path === '/'){
          this.filtered = this.countries.filter(el => 
           el.toLowerCase().includes(this.value.toLowerCase()))
        } else if(this.$route.query.step === 'cities'){
          this.filtered = this.cities.filter(el => 
           el.toLowerCase().includes(this.value.toLowerCase()))
        }
       
           console.log(this.path)
      },
      select($event){
        this.value = $event.target.textContent
        const data = {
          inputValue: this.value,
          inputPath: this.path
        } 
        this.SET_INPUT(data)
      },
    }
  }
</script>

<style lang="scss" scoped>
.input-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .input {
    width: 100%;
    height: 6.6rem;
    border: 2px solid #D9E1E7;
    border-radius: 1rem 0 0 1rem;
    background-color: #fff;
    color: #809FB8;
    display: block;
    font-family: Raleway, system-ui, -apple-system, sans-serif;
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 600;
    padding: 0.7rem 1.25rem;
    outline: none;
  }

    .input__ul {
      transition: 1s;
      max-height: 200px;
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 5px 20px rgba(6, 21, 43, 0.15);
      border-radius: 10px;
      overflow-y:scroll;
    }

     .input__li {
       text-align: left;
       font-weight: 600;
       font-size: 17px;
       line-height: 26px;
       font-feature-settings: 'pnum' on, 'lnum' on;
       color: #244156;
       cursor: pointer;
       text-transform: capitalize;
       padding: 1.2rem 3rem;
       height: 5rem;
     }

     .input__li:hover{
        background-color: #F1F4FA;
       }
     }

::placeholder{
   color: #809FB8;
}

::-webkit-scrollbar{
  width: 1rem;
  background-color: #F1F4FA;
}

::-webkit-scrollbar-thumb{
  background:#416782;
  border-radius: 5px;
}




</style>