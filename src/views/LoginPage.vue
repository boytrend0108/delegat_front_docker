<template>
  <div class='login'>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body px-lg-5 px-2 py-3 py-lg-5">
          <div class="d-flex justify-content-between form-inline" >
            <p class="auth-title text-black mb-3 mr-lg-5">Регистрация</p>
          </div>
          <form @submit.prevent='onSubmit' id="form-reg-client-1">
            <fieldset class='form-group'>
              <input
                type='text'
                class='form-control form-control-lg'
                placeholder='E-mail'
                v-model='email'
              />
            </fieldset>
            <fieldset class='form-group'>
              <input
                type='password'
                class='form-control form-control-lg'
                placeholder='Пароль'
                v-model='password'
              />
            </fieldset>
            <button type="submit" id="btn-reg-1-client" class="btn btn-primary btn-block py-2" >
              Войти
            </button>
           <div class="form-group row mb-0 pt-4">
              <div class="col-12">
             </div>
              <div class="col-12 text-center pt-1">
                <router-link class="btn btn-link" to="register">Eще нет аккаунта?</router-link>
              </div>
            </div>
            <div class="form-group row mb-0 pt-4 pb-4">
              <div class="col-12 d-flex justify-content-between">
                <p class="text-secondary">Нажимая кнопку «Зарегистрироваться», вы подтверждаете, что ознакомились с <a href="https://business.delegat.online/docs/service.pdf" class="text-primary" target="_blank">пользовательским соглашением</a> и даёте согласие на обработку персональных данных</p>
              </div>
            </div>
            <hr>
            <div class="form-group row mb-0 pt-4">
              <div class="col-12">
                <div class="d-flex justify-content-between">
                  <div class="text-center" style="flex: 1;" >
                    <img src="https://business.delegat.online/img/delegat_icons/handshake.png" style="width:45px;" >
                  </div>
                  <div style="flex: 3;" >
                    <p class="mb-0 text-reg" >Хотите сотрудничать с нами?</p>
                    <!-- <router-link :to="{name: 'DgPartnerRegister'}" class="sub-text-reg">Зарегистрироваться как партнёр</router-link> -->
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-page'
}
</script>

