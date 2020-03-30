<template>
  <v-app>
    <v-app-bar fixed app color="primary" dark>
      <v-btn text active-class="no-active" to="/"
        >Nuxt.js + Vuetify サンプル</v-btn
      >
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
