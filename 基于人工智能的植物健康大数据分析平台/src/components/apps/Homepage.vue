<template>
  <div>
    <img src="../../assets/img/5c_.png" width=100%>
    <div class="s-title ">
      <h1 style="font-size: 25px">基于人工智能的植物健康大数据分析平台</h1>
      <p style="text-indent: 2em; text-align:justify">
        智能化病虫害识别系统通过在生产现场部署摄像头设备，借助个人电脑、 智能手机，实现对农业生产现场环境的病害监测，
        农作物信息收集于一体的农作物病虫害识别系统。该系统的使用可减少人工成本，实现精准调控，有效规避生产风险。系统
        基于网页端开发，实现了用户的登录创建、删除、权限分配、图像识别、信息记录等功能。
      </p>
    </div>
    <div style="margin: 10px auto;">
      <div style="width: 600px; height: 50px; float: left; margin-left: 10px; color: rgb(57, 57, 241);">
        <h2 align="center" style="font-size: 22px; font-weight: 100; line-height: 50px;">功能介绍</h2>
      </div>
      <div style="width: 300px; height: 50px; float: left; margin-left: 20px; color: rgb(57, 57, 241);">
        <h2 align="center" style="font-size: 22px; font-weight: 100; line-height: 50px;">应用场景</h2>
      </div>
      <div style="width: 600px; height: auto; float: left; margin: 10px 0 0 0">
        <div style="width: 290px; height: auto; float: left; margin-left: 10px;">
          <h3 align="center" style="font-size: 20px; font-weight: 100; line-height: 5px;">农作物生长分期</h3>
          <div style="line-height: 20px; margin-top: 12px">
            <span>利用人工智能图像分类技术，根据农作物外观生理特征，智能判断农作物所处生长期，生长周期可自定义。精准监控农作物生长周期，精准培植，提高生产效率。</span>
          </div>
        </div>
        <div style="width: 290px; height: auto; float: left; margin-left: 10px;">
          <h3 align="center" style="font-size: 20px; font-weight: 100; line-height: 5px;">农作物病虫害识别</h3>
          <div style="line-height: 20px; margin-top: 12px">
            <span>利用人工智能对象智能提取技术，学习大量的农作物病虫害图片、视频，从而实现通过拍照或视频监控，就可以及时发现病虫害情况，做到迅速、有针对性的预防和治疗。</span>
          </div>
        </div>
      </div>
      <div style="width: 300px; height: auto; float: left; margin: 10px 0 0 30px;">
        <h3 align="center" style="font-size: 20px; font-weight: 100; line-height: 5px;">农民植保助手App</h3>
        <div style="line-height: 20px; margin-top: 12px">
          <span>通过该系统，农民可以在App中，随时随地拍照了解农作物的生长期和健康状况，并得到作物保护专家的指导意见.帮助农民实现精准生产，高效管理。</span>
        </div>
      </div>
    </div>
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
.s-title{
  width: 465px;
  height: 150px;
  position: absolute;
  top: 65px;
  right: 20px;
  opacity: 0.99;
}
</style>
