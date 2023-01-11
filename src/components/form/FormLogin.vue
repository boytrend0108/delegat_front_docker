<template>
  <form class="form" id="login-form">
    <h2 class="form-title">Вход</h2>

    <div class="input-box">
      <label for="email" class="form-label">E-mail</label>
      <my-input type="email" id="email" />
    </div>

    <div class="input-box">
      <label for="password" class="form-label">Пароль</label>
      <my-input type="password" id="password_1"  />
      <font-awesome-icon
        v-if="showPass1"
        icon="fa-solid fa-eye" 
        class="icon"
        @click="showPassword('1')"
        />
        <font-awesome-icon 
          icon="fa-solid fa-eye-slash" 
          class="icon"  
          @click="showPassword('1')"
          v-if="!showPass1" />
    </div>

    <my-button type="submit" class="btn">Submit</my-button>
  </form>
  <div class="question-box">
    <router-link to="/register" class="form__question"> Eще нет аккaунта?</router-link>
    <router-link to="/register" class="form__question"> Забыли пароль?</router-link>
    <form-offer></form-offer>
  </div>
</template>

<script>
import FormOffer from '@/components/form/FormOffer.vue';


  export default {
    components:{
      FormOffer
    },
    data(){
      return{
        showPass1: true,
      }   
    },
    methods:{
      showPassword(id) {  
      const firstPassword = document.getElementById('password_1')
      if (id === "1") {
        if (firstPassword.attributes.type.textContent === 'password') {
            firstPassword.attributes.type.textContent = 'text'
            this.showPass1 = !this.showPass1
            return
        } 
        if (firstPassword.attributes.type.textContent === "text") {
            firstPassword.attributes.type.textContent = 'password';
            this.showPass1 = !this.showPass1
        }
      } 
    },
    },
    
  }
</script>

<style lang="scss" scoped>

.form{
  @include form;
}

.form-title{
  @include form-title;
}
.input-box{
  @include input-box;
  position: relative;
}
.form-label {
  margin: 1rem 0;
  color: #809fb8;
  display: inline;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.btn{
 @include btn;
}

.form__question{
 @include form__question;
}
.form__question:hover{
    text-decoration: underline;
  }
  .question-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon{
  position:absolute;
  top: 4.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color:$main-color;
  cursor: pointer;
}

.invalid{
  border: 1px solid red;
}
.BtnEnable{
  opacity: 0.5;
  cursor:not-allowed
}
</style>