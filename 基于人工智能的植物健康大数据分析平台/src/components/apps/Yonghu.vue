<template>
  <div>
    <div style="margin-bottom: 10px">
      <label>编号:
      <Input style="width:180px; margin-right:8px" type="text" v-model="id"></Input>
      </label>
      <label>姓名:
      <Input style="width:180px; margin-right:8px" type="text" v-model="name"></Input>
      </label>
      <label>账号:
      <Input style="width:180px; margin-right:8px" type="text" v-model="account"></Input>
      </label>
      <label>密码:
      <Input style="width:180px; margin-right:8px" type="text" v-model="password"></Input>
      </label>
      <ButtonGroup size="small"><Button type="info"  @click="add">添加</Button></ButtonGroup>
    </div>
    <!-- 定义表格 -->
    <Table :columns="columns1" :data="list">
     <template slot-scope="{ row, index }" slot="action">
        <Button type="error" size="small" @click="del(row.id)">移除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      account: '',
      password: '',
      kind: '',
      result: '',
      columns1: [
        { title: '编号', key: 'id', maxWidth: 60 },
        { title: '姓名', key: 'name' },
        { title: '账号', key: 'account' },
        { title: '密码', key: 'passward' },
        { title: '作物种类', key: 'kind' },
        { title: '识别结果', key: 'result' },
        { title: '提交时间', key: 'ctime' },
        { title: '管理', slot: 'action' }
      ],
      list: [
        { id: 1, name: '彭万里', account: 'P1111', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 2, name: '高大山', account: 'P1112', passward: '******', kind: '水稻', result: '烂秧病', ctime: '2021-09-10' },
        { id: 3, name: '孙思', account: 'P1113', passward: '******', kind: '玉米', result: '锈病', ctime: '2021-09-10' },
        { id: 4, name: '马宏宇', account: 'P1114', passward: '******', kind: '小麦', result: '锈病', ctime: '2021-09-10' },
        { id: 5, name: '林莽', account: 'P1115', passward: '******', kind: '水稻', result: '赤枯病', ctime: '2021-09-10' },
        { id: 6, name: '林君雄', account: 'P1116', passward: '******', kind: '玉米', result: '纹枯病', ctime: '2021-09-10' },
        { id: 7, name: '范长江', account: 'P1117', passward: '******', kind: '水稻', result: '叶枯病', ctime: '2021-09-10' },
        { id: 8, name: '朱希亮', account: 'P1118', passward: '******', kind: '水稻', result: '叶枯病', ctime: '2021-09-10' },
        { id: 9, name: '何光宗', account: 'P1119', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 10, name: '朱希亮', account: 'P1120', passward: '******', kind: '小麦', result: '锈病', ctime: '2021-09-10' },
        { id: 11, name: '杨勇', account: 'P1121', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 12, name: '甘铁生', account: 'P1122', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 13, name: '张国柱', account: 'P1123', passward: '******', kind: '水稻', result: '叶枯病', ctime: '2021-09-10' },
        { id: 14, name: '孙正芸', account: 'P1124', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 15, name: '孙光永', account: 'P1125', passward: '******', kind: '小麦', result: '赤霉病', ctime: '2021-09-10' },
        { id: 16, name: '孙光永', account: 'P1126', passward: '******', kind: '玉米', result: '大斑病', ctime: '2021-09-10' },
        { id: 17, name: '张广才', account: 'P1127', passward: '******', kind: '小麦', result: '赤霉病', ctime: '2021-09-10' }
      ]
    }
  },
  mounted() {
  },
  methods: {
    time(date) {
      var year = date.getFullYear()
      // var month = (date.getMonth() + 1).toString.padStart(2, '0') //月份从0开始
      var month = date.getMonth() + 1
      var day = date.getDate()
      return `${year}-${month}-${day}`
    },
    add() {
      if (this.id !== '' & this.name !== '' & this.password !== '' & this.account !== '') {
        this.list.push({ id: this.id, name: this.name, account: this.account, passward: '******', ctime: this.time(new Date()) })
        this.id = this.name = this.password = this.account = ''
      } else {
        alert('请完整输入以下信息：编号，账号，密码')
      }
    },
    del(id) {
      console.log(id)
      var index = this.list.findIndex(item => {
        if (item.id === id) {
          return true
        }
      })
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
