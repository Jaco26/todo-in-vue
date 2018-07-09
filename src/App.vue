<template>
  <div id="app">
    <app-header @showThis="showThis" />
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Complete from '@/components/Complete'
import Incomplete from '@/components/Incomplete'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appComplete: Complete,
    appIncomplete: Incomplete,
  },
  data () {
    return {
      selectedComponent: 'appIncomplete',
    }
  },
  methods: {
    showThis (name) {
      this.selectedComponent = name;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
