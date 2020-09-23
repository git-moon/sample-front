<template>
  <div>
    <v-row class="mt-4" no-gutters>
      <v-col cols="12" sm="12" md="12">
        <h3>게시글 목록</h3>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-data-table
          no-data-text="게시글이 없습니다."
          :headers="headers"
          :loading="getDataLoading"
          :items="boardList"
          :footer-props="{'items-per-page-options': [20, 50, 100, -1]}"
          :server-items-length="paging.totalCount" 
          @update:options="changeOption"
        >
          <template v-slot:item="{ item }">
            <tr class="cursor--pointer" @click="$router.push({ name: 'boardDetails', params: { boardIdx: item.idx }})">
              <td class="text-center">
                {{item.idx}}
              </td>
              <td class="text-center">
                {{item.title}}
              </td>
              <td class="text-center">
                {{item.createdTime | datetimeFormat}}
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12">
        <v-btn
          height="41"
          color="#393939"
          class="white--text"
          center
          depressed
          @click="$router.push({ name: 'boardPosting'})"
        >
          게시글 생성
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import boardClient from '@/client/boardClient'

  export default {
    data() {
      return {
        getDataLoading: false,
        headers: [
            { text: '번호', value: 'idx', align: 'center' },
            { text: '제목', value: 'title', align: 'center', sortable: false },
            { text: '작성일', value: 'createdTime', align: 'center' }
        ],
        search: {
          page: 1,
          size: 20,
          keyword: null
        },
        paging: {
            page: 1,
            size: 20,
            totalCount: 0
        },
        boardList: []
      }
    },
    created () {
    },
    methods: {
      changeOption(option) {
        this.search.size = option.itemsPerPage === -1 ? this.paging.totalCount : option.itemsPerPage
        this.search.page = option.page
        this.getBoards()
      },
      async getBoards() {
        let { data } = await boardClient.get(`?page=${this.search.page}&size=${this.search.size}`)

        this.boardList = data.data
        this.paging = data.paging
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>