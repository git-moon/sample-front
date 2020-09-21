<template>
  <div>
    <v-row no-gutters>
      <v-col cols="3" sm="3" md="3">
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
      <v-col cols="3" sm="3" md="3">
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
      <v-col cols="6" sm="6" md="6"></v-col>
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
      async loginNormalUser() {
          console.log("login normal user...")
      },
      async loginAdminUser() {
          console.log("login normal user...")
      }
  },
}
</script>

<style lang="scss" scoped></style>
