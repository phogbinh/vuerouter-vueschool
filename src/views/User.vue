<template>
  <div>
    <h1>user</h1>
    <button @click='logOut' class='btn'>Log out</button>
  </div>
</template>
<script>
import store from '@/store.js'

export default {
  'methods': {
    'logOut': function() {
      store['user'] = null
      this['$router'].push('/')
    }
  }
}
</script>
