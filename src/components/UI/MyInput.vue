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
        v-for="country in filteredCountry" 
        :key="country.id" 
        class="input__li">{{ country }}</li>
    </ul>
    <ul class="selector__ul">
        <li class="selector__li"  @click="select">Китай</li>
        <li class="selector__li"  @click="select">Германия</li>
        <li class="selector__li"  @click="select">Казахстан</li>
      </ul>
</div>
   
  
</template>

<script>
import countriesList from "@/api/countries"
  export default {
    name:'my-input',
    data(){
      return{
        value:'',
        showList: true,
        countries: countriesList ,
        filteredCountry:[]    
      }
    },
    methods:{
      showListFn(){
        // this.showList = !this.showList
      },

      filterCountryFn(){
        this.filteredCountry = this.countries.filter(el => 
           el.toLowerCase().includes(this.value.toLowerCase()))
      },
      select($event){
        this.value = $event.target.textContent
      }
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
      width: calc(96% + $input-box__btn_width );
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

.selector__ul{
  display: flex;
  gap: 1rem;
  margin-top: 2.8rem;
}
.selector__li {
  width: 11.2rem;
  height: 4.2rem;
  background: #F1F4FA;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #416782;
  cursor: pointer;
}



</style>