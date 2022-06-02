<template>
  <div>
    <h3 style="margin:0 0 10px 20px">图片预览效果：</h3>
    <div class="leftBox">
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false">
          <i slot="default" class="el-icon-plus" @click="add"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div style="position: absolute; top: 365px; left: 50px">注意：仅支持一次上传一张图片</div>
    <div class="shibie"><Button type="error" @click="detect">识别</Button></div>
    <div class="qingchu"><Button type="error" @click="clear">清除</Button></div>
    <h3 style="position: absolute; top: 38px; right: 255px">诊断结果：</h3>
    <div class="rightBox">
      <p style="padding:0 15px" v-if="detect_start">系统校验正常，请在左边上传作物图像后，点击病害识别按钮，开始识别病害。</p>
      <p style="padding:0 15px" v-if="detect_end">系统正在识别中，请稍等......</p>
      <img  v-if="delay_dis" width="100%" src="../../assets/img/yumi/DSC18_db5.jpg">
    </div>
    <p style="width: 300px; position: absolute; top: 339px; left: 36%; font-size: 15px; color: black; line-height: 20px;" v-if="delay_dis">建议：作物患有玉米枯叶病,可在知识阅览区域查看相关作物病害信息，请及时防治。</p>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      detect_start: true,
      detect_end: false,
      delay_dis: false,
      upload: false,
      timer: ''
    }
  },
  methods: {
    handlePictureCardPreview (file) {
      console.log(file.name)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    add () {
      this.upload = true
    },
    detect () {
      if (this.upload) {
        this.detect_start = false
        this.detect_end = true
        this.delay_dis = false
        // 结果展示延时2s
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.detect_end = false
          this.delay_dis = true
        }, 2000)
      } else {
        alert('请先上传作物图像，再点击病害识别按钮')
      }
    },
    clear () {
      this.detect_start = true
      this.detect_end = false
      this.delay_dis = false
      this.reload()
    }
  }
}
</script>

<style scoped>
.leftBox {
  float: left;
  height: 320px;
  width: 320px;
  padding: 80px 0;
  border-radius: 5%;
  border: 3px solid #99D3F5;
}
.rightBox {
  float: right;
  height: 320px;
  width: 320px;
  padding: 70px 0;
  border-radius: 5%;
  border: 3px solid #99D3F5;
}
.shibie {
  position: absolute;
  top: 100px;
  left: 47%;
  translateX: -50%;
}
.qingchu {
  position: absolute;
  top: 200px;
  left: 47%;
  translateX: -50%;
}
</style>
