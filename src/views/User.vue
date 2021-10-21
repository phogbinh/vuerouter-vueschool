<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link :to='{ "name": "invoices" }'>Invoices</router-link>
    </p>
    <button @click='logOut' class='btn'>Log out</button>
  </div>
</template>
<script>
import store from '@/store.js'

export default {
  'data': function() {
    return {
      'user': store['user']
    }
  },
  'methods': {
    'logOut': function() {
      store['user'] = null
      this['$router'].push('/')
    }
  }
}
</script>
