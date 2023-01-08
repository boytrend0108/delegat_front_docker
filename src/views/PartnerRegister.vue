<template>
  <div class='partnerRegister'>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body px-lg-5 px-2 py-3 py-lg-4">
          <router-link class="text-primary form-inline" :to="{name: 'DgRegister'}"><i class="mdi mdi-chevron-left mr-1 f-20"></i>Назад</router-link>
          &nbsp;
          <form @submit.prevent='onSubmit' id="form-reg-client-1">
            <fieldset class='form-group'>
              <label class="col-12 col-form-label form-label mb-0">Специальность</label>
              <select id="reg-spec" class="form-control" name="spec" required autofocus>
                <option value="logist">Логист</option>
                <option value="broker">Брокер</option>
                <option value="etc">Другое</option>
              </select>
            </fieldset>
            <fieldset class='form-group'>
              <label class="col-12 col-form-label form-label mb-0">ИНН</label>
              <input
                type='text'
                class='form-control form-control-lg'
                placeholder='ИНН'
                v-model='inn'
              />
            </fieldset>

          </form>
            <div class="form-group row mt-4">
              <div class="input-group ml-2 ml-lg-3 mb-0">
                <input type="checkbox" class="checkbox mt-1" id="provider-reg-1-checkbox"  >
                <label class="form-label ml-2 mb-1">Я принимаю условия договора <a href="https://business.delegat.online/docs/oferta.pdf" target="_blank">оферты</a></label>
              </div>
            </div>

            <div class="form-group row mb-0 py-4">
              <div class="col-12 d-flex justify-content-between">
                <button type="submit" id="btn-reg-1-provider" class="btn btn-primary btn-block py-2">
                  Далее
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PartnerRegister'
}
</script>