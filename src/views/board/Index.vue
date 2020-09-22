<template>
  <div class="pa-4">
    <UserCreator></UserCreator>

    <v-divider class="mt-4"></v-divider>

    <router-view :key="$route.fullPath"></router-view>

  </div>
</template>

<script>
  import UserCreator from '@/components/UserCreator.vue'

  export default {
    components: {
      UserCreator
    },
    data() {
      return {
      }
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>

</style>