<template>
  <mcv-validation-errors
            v-if='validationErrors'
            :validation-errors='validationErrors'
          />
  <form 
    class="form" 
    id="reg-form" 
    @submit.prevent='onSubmit'>
    <h2 class="form-title">Регистрация</h2>
    <div class="input-box">
      <label for="name" class="form-label">ФИО</label>
      <my-input type="text" id="name" v-model='username'/>
    </div>
    <div class="input-box">
      <label for="email" class="form-label">E-mail</label>
      <my-input type="email" id="email"  v-model='email' />
    </div>
    <div class="input-box">
      <label for="phone" class="form-label">Пароль</label>
      <my-input type="password" id="password"  v-model='password' />
      <p>gjgj_Ujk25</p>
    </div>
    <div class="input-box">
      <label for="phone" class="form-label">Повторите пароль</label>
      <my-input type="password" id="password_2"  v-model='password_2' />
    </div>
    <my-button type="submit" class="btn">Зарегистрироваться</my-button>
  </form>
  <router-link to="/login" class="form__question"> Уже есть аккaунт?</router-link>
  <form-offer></form-offer>
</template>

<script>
import FormOffer from '@/components/form/FormOffer.vue';
import McvValidationErrors from '@/components/ValidationErrors'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'form-reg',
  data() {
    return {
      username:'',
      email:'',
      password: '',
      password_2: '',
    }
  },
  components: {
    FormOffer, McvValidationErrors
  },
 

  computed:{
   ...mapGetters(['isSubmitting',"validationErrors" ])
  },

  methods: {
    ...mapActions([
     'register', 'login'
    ]),

    onSubmit() {
      let data = {
        full_name: this.username,
        email: this.email,
        password: this.password,
        password_2: this.password_2,
      }
      
      this.register(data)
        .then(user => {
        console.log('successfully register user', user)
        localStorage.setItem('token', "5555")
        this.$router.push({name: 'about'})
      })
    }
  },

}
</script>

<style lang="scss" scoped>
form{
  @include form;
}

.form-title{
  @include form-title;
}
.form-label {
  margin: 1rem 0;
  color: #809fb8;
  display: inline;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.input-box{
  @include input-box;
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
  .input{
  width: 100%;
  border: 2px solid #D9E1E7;
  border-radius: 10px;
  background-color: #fff;
  color: #06152b;
  display: block;
  font-family: Raleway,system-ui,-apple-system,sans-serif;
  font-size: 1.3rem;
  line-height: 1.5;
  padding: 0.7rem 1.25rem;
  outline: none;
}
</style>