<template>
  <div class="pa-4">
    <UserCreator></UserCreator>

    <v-row class="mt-4" no-gutters>
      <v-col cols="12" sm="12" md="12">
        <h3>게시글 목록</h3>
      </v-col>

      <v-col cols="12" sm="12" md="12">
        이곳에 게시글이 나타남
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-btn
          height="41"
          color="#393939"
          class="white--text"
          center
          depressed
        >
          게시글 생성
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import UserCreator from '@/components/UserCreator.vue'
  import boardClient from '@/client/boardClient'

  export default {
    components: {
      UserCreator
    },
    created () {
      this.getBoards()
    },
    methods: {
      async getBoards() {
        let data = await boardClient.get('/board')

        console.log(data)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>