<template>
  <section class="container">
    <h1>生まれてから今日まで... {{ dateInterval }} 日</h1>
    <fieldset>
      <label for="date">生年月日</label>
      <input id="date" type="date" @input="setDate" />
    </fieldset>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dateInterval'])
  },

  methods: {
    ...mapActions(['setDate'])
  }
}
</script>
