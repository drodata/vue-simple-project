<template>
  <div class="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppContent from './AppContent.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>


<style>
</style>
