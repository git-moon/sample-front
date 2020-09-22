<template>
  <div>
    <v-row no-gutters>
      <v-col cols="2" sm="2" md="2">
        <v-btn
          :loading="btnLoading"
          :disabled="btnLoading"
          height="41"
          color="#393939"
          class="white--text"
          center
          depressed
          @click="loginNormalUser()"
        >
          일반유저로 로그인
        </v-btn>
      </v-col>
      <v-col cols="2" sm="2" md="2">
        <v-btn
          :loading="btnLoading"
          :disabled="btnLoading"
          height="41"
          color="#393939"
          class="white--text"
          center
          depressed
          @click="loginAdminUser()"
        >
          어드민유저로 로그인
        </v-btn>
      </v-col>
      <v-col cols="8" sm="8" md="8"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnLoading: false
    }
  },
  methods: {
      async loginAdminUser() {
          console.log("login normal user...")
          // store 사용
          alert("어드민유저로 로그인되었습니다.")
      },
      async loginNormalUser() {
          console.log("login normal user...")
          alert("일반유저로 로그인되었습니다.")
      }
  },
}
</script>

<style lang="scss" scoped></style>
