<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">基于人工智能的植物健康大数据分析平台</div>
          <div class="layout-nav">
            <MenuItem name="1" to="/home/homePage">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2" to="/home/zhishi">
              <Icon type="ios-keypad"></Icon>
              知识阅览
            </MenuItem>
            <MenuItem name="3" to="/home/zhineng">
              <Icon type="ios-analytics"></Icon>
              智能诊断
            </MenuItem>
            <MenuItem name="4" to="/home/yonghu">
              <Icon type="ios-paper"></Icon>
              系统管理
            </MenuItem>
          </div>
          <div class="user-logo">
            <Poptip
              confirm
              title="您确定退出码?"
              @on-ok="ok"
              @on-cancel="cancel">
              <Avatar class="user-a" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </Poptip>
            <span style="color: white">admin</span>
          </div>
        </Menu>
      </Header>
      <Card class="content" :style="{padding: '20px'}">
        <div style="min-height: 200px;">
          <router-view></router-view>
        </div>
      </Card>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    ok () {
      this.$Message.info('已退出')
      this.$router.push({
        path: '/login'
      })
    },
    cancel () {
      this.$Message.info('已取消')
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: auto;
  height: 30px;
  font-size: 16px;
  color: white;
  float: left;
  position: relative;
}
.user-logo {
  float: right;
  .user-a {
    margin-right: 5px;
  }
}
.layout-nav{
  width: auto;
  float: left;
  margin: 0 auto;
  margin: 0 50px;
}
.content{
  border: none;
  background-color: white;
}
</style>
