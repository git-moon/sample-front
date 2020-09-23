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
        <v-card>
          <v-card-title class="d-block">
            <v-text-field 
              v-model="addForm.title"
              :rules="[rules.title]"
              placeholder="제목을 입력하세요"
            >
            </v-text-field>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="white-space--pre">
            <v-textarea
              v-model="addForm.contents"
              :rules="[rules.contents]"
              placeholder="내용을 입력하세요"
            >
            </v-textarea>
          </v-card-text>
        </v-card>

        <v-divider></v-divider>

        <v-row class="mt-4" no-gutters>
          <v-col cols="12" sm="12" md="12" class="text-center">
            <v-btn
              height="41"
              color="error"
              class="white--text mr-2"
              center
              depressed
              @click="$router.go(-1)"
            >
              뒤로
            </v-btn>
            
            <v-btn
              height="41"
              color="#393939"
              class="white--text"
              center
              depressed
              :disabled="addLoading || addForm.title.length < 5 || addForm.contents.length < 5"
              :loading="addLoading"
              @click="formSubmit()"
            >
              저장
            </v-btn>
          </v-col>
        </v-row>
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
        rules: {
            title: value => value.length > 4 || '제목을 입력하세요',
            contents: value => value.length > 4 || '내용을 입력하세요',
        },
        addForm: {
          idx: null,
          memberIdx: 1,
          title: '',
          subTitle: '',
          contents: ''
        },
        addLoading: false
      }
    },
    created () {
      console.log(this.boardIdx)
      this.getBoard()
    },
    methods: {
      async getBoard() {
        if (this.boardIdx === null) {
          return
        }
        let {data} = await boardClient.get(`/${this.boardIdx}`)

        this.addForm = data
      },
      async formSubmit() {
        if (!confirm('게시글을 저장합니다?')) {
          return
        }
        this.addLoading = true

        try {
          let {data} = await boardClient.post('/posting', JSON.stringify(this.addForm))

          if (data === null) {
            alert("에러가 발생했습니다 ㅠㅠ..")
          } else {
            alert("저장성공!")
            this.$router.push({name: 'boardDetails', params: { boardIdx: data.idx }})
          }
        } catch {
          alert("에러가 발생했습니다 ㅠㅠ..")
        } finally {
          this.addLoading = false
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>