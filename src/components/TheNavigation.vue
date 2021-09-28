<template>
  <nav id='nav'>
    <ul class='nav-links'>
      <p class='logo'>The Vue School Travel App</p>
      <li class='links'>
        <router-link to='/'>Home</router-link>
      </li>
      <li v-for='destination in destinations'
      :key='destination["name"]'
      class='links'>
        <router-link :to='{"name": "DestinationDetails", "params": {"id": destination["id"]}}'>{{ destination['name'] }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store.js'

export default {
  'data': function() {
    return {
      'destinations': store['destinations']
    } 
  }
}
</script>

<style scoped>
#nav {
  display: flex;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#nav a.vue-school-active-class {
  color: purple;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
