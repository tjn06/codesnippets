<template>
  <div id="app">
      <headerComponent/>
  </div>
  
</template>

<script>
import headerComponent from './components/headerComponent';

export default {
  name: 'App',
    components: {
      headerComponent,
  },

  data: () => ({

  }),

  methods: {
  
  },

  computed: {

	},

}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
