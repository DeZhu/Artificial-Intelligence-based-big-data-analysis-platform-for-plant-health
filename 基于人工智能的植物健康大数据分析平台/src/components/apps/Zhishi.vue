<template>
  <div>
    <img src="../../assets/img/gongcheng.png" width=100%>
    <Menu mode="horizontal" theme="light" active-name="1">
      <div class="layout-nav">
        <MenuItem name="1" to="/home/zhishi/shuidao">
          <Icon type="ios-leaf-outline" />
          水稻
        </MenuItem>
        <MenuItem name="2" to="/home/zhishi/xiaomai">
          <Icon type="ios-leaf-outline" />
          小麦
        </MenuItem>
        <MenuItem name="3" to="/home/zhishi/yumi">
          <Icon type="ios-leaf-outline" />
          玉米
        </MenuItem>
        <MenuItem name="4" to="/home/zhishi/dadou">
          <Icon type="ios-leaf-outline" />
          大豆
        </MenuItem>
      </div>
    </Menu>
    <Card class="content" :style="{padding: '20px'}">
      <div style="min-height: 200px;">
        <router-view></router-view>
      </div>
    </Card>
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
  }
}
</script>

<style lang="less" scoped>
.layout-nav{
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.content{
  border: none;
  background-color: white;
}
</style>
