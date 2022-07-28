<template>
  <div id="app">
    <!-- <router-view/> -->
    <Login />
    <!-- <Project /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/views/auth/Login.vue'
// import Project from '@/views/projects/Project.vue'
@Component({
    name: 'App',
    components: {
      Login
      // Project
    }
})
export default class extends Vue {
    
}
</script>

<style lang="scss">
</style>
