<template>
  <div>
    <v-row class="mt-4" no-gutters>
      <v-col cols="12" sm="12" md="12">
        <v-btn
          height="41"
          color="#393939"
          class="white--text"
          center
          depressed
          @click="$router.push({path: '/board'})"
        >
          목록으로
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-4" no-gutters>
      <v-col cols="12" sm="12" md="12">
        <template v-if="!!board">
          <v-card>
            <v-card-title class="d-block">
              <h3 class="ma-0">{{board.title}}</h3>
              <p class="ma-0 mt-2 subtitle-2 text-right">
                <span>
                  생성일: {{board.createdTime | datetimeFormat}}
                </span>
              </p>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="white-space--pre">
              {{board.contents}}
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-row class="mt-4" no-gutters>
            <v-col cols="12" sm="12" md="12" class="text-right">
              <v-btn
                height="41"
                color="error"
                class="white--text mr-2"
                center
                depressed
                @click="removeBoard()"
              >
                삭제
              </v-btn>
              
              <v-btn
                height="41"
                color="#393939"
                class="white--text"
                center
                depressed
              >
                수정
              </v-btn>
            </v-col>
          </v-row>
        </template>

        <template v-else>
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import boardClient from '@/client/boardClient'

  export default {
    props: {
      boardIdx: {
        type: Number,
        default: null
      },
    },
    data() {
      return {
        board: null
      }
    },
    created () {
      this.getBoard()
    },
    methods: {
      async getBoard() {
        let {data} = await boardClient.get(`/${this.boardIdx}`)

        this.board = data
      },
      async removeBoard() {
        if (!confirm('게시글을 삭제하시겠습니까?')) {
          return
        }
        let {data} = await boardClient.delete(`/${this.boardIdx}`)

        if (data === null) {
          alert("에러가 발생했습니다 ㅠㅠ..")
        } else {
          alert("삭제되었습니다.")
          this.$router.push({path: '/board'})
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>