<template >
  <form 
    class="form" 
    id="login-form"
    @submit.prevent='onSubmit'
    >
    <h2 class="form-title">Вход</h2>

    <div class="input-box">
      <label for="email" class="form-label">E-mail</label>
      <my-input 
        type="email" 
        id="email" 
        @input="validations"
        :class="{ invalid:!IS_VALID }"
        v-model.trim='email'
        />
        <p>ggg@ff.jj</p>
    </div>

    <div class="input-box">
      <label for="password" class="form-label">Пароль</label>
      <my-input 
       type="password"
        class="input"
        id="password_1" 
        v-model.trim='password'
        @input="validations"
        :class="{ invalid:!IS_VALID }"  />
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
          <p>abcABC123$</p>
    </div>

    <my-button 
    type="submit" 
    class="btn"
    :class="{ BtnEnable:!isBtnEnable }"
    >Войти</my-button>
  </form>
  <div class="question-box">
    <router-link to="/register" class="form__question"> Eще нет аккaунта?</router-link>
    <router-link to="/register" class="form__question"> Забыли пароль?</router-link>
    <form-offer></form-offer>
  </div>
</template>

<script>
import FormOffer from './FormOffer.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

  export default {
    components:{
      FormOffer
    },
  data() {
    return {
      // isValid: true,
      isBtnEnable: true,
      showPass1: true,
      showPass2: true,
      email: '',
      password: '',
      email_reg: /.+@.+\..+/i,
      password_reg: /(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*].{8,}/g,
    }
  },

  computed:{
    ...mapGetters([
      'IS_VALID','EMAIL','PASSWORD'
    ]), 
  },

  methods: {
    ...mapActions(
     ['LOGIN','GET_EMAIL']
    ),
    ...mapMutations([
      'SWITCH_IS_VALID','SET_FORM_DATA'
     ]),

    sendFormData(email, password) {
      const formData = {
        email: email,
        password: password
      }
      this.SET_FORM_DATA(formData)
    },

    clearForm(){
      this.email = ''
      this.password = ""
    },

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
    
    validations() {
      this.sendFormData(this.email, this.password);
      const btn = document.querySelector('.btn')
      btn.setAttribute('disabled', 'disabled')
      if (
        this.email_reg.test(this.email) &&
        this.password_reg.test(this.password)
      ) {
        this.SWITCH_IS_VALID(true);
        this.isBtnEnable = true
        btn.removeAttribute('disabled')
      } else {
        this.SWITCH_IS_VALID(false);
        this.isBtnEnable = false
      }
    },
    
    onSubmit() {
      this.validations();
      let data = {
        email: this.email,
        password: this.password,
      }
      this.LOGIN(data)
        .then(user => {
        console.log('successfully sing in', user)
        this.$router.push('/')
      })
    }
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