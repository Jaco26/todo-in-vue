<template>
  <div id="app">
    <app-header :elements="elements" @showThis="showThis" />
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
      elements: [
        { title: 'Complete', name: 'appComplete' },
        { title: 'Incomplete', name: 'appIncomplete' },
      ]
    }
  },
  methods: {
    showThis (name) {
      this.selectedComponent = name;
      // this.elements.forEach(view => view.active = false);
      // this.elements[index].active = true;
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
