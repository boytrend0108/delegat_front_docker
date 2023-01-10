<template>
  <ul class='error-messages'>
    <li class="li" v-if='validationErrors'>
      {{ validationErrors }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'McvValidationErrors',

  computed: {

    ...mapGetters([
      'validationErrors'
    ]),

    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
   .li{
      list-style-type: none;
      font-size: 1.5rem;
      color:red;
   }
</style>