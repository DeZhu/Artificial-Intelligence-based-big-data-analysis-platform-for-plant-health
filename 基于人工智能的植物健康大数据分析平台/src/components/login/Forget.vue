<template>
  <div class="login_container">
    <span>基于人工智能的植物健康大数据分析平台</span>
    <Card class="login_card" :bordered="false">
      <h3 style="text-align:center; margin: -8px 0 8px 0">修改密码</h3>
      <span id="span2">当前手机号177*****890</span>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="code">
          <Input class="login_input" search enter-button="获取验证码" v-model="formInline.code" placeholder="请输入验证码">
            <Icon type="md-tablet-portrait" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="login_input" prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="login_input" prop="confirmPassword">
          <Input type="password" v-model="formInline.confirmPassword" placeholder="请再次确认密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <Button
        style="margin: 5px auto 8px"
        type="error"
        long
        @click="editSubmit('formInline')"
        :loading="isload"
      >确定修改</Button>
      <div class="login_footer">
        <a id="a_id" href="/login">去登录</a>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    // 验证密码的正则表达
    var checkPassword = (rule, value, cb) => {
      const regPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/
      if (regPassword.test(value)) {
        // 合法密码
        return cb()
      }
      cb(new Error('密码必须包含字母和数字'))
    }
    return {
      // 登录数据
      formInline: {
        code: '',
        password: '',
        confirmPassword: ''
      },
      ruleInline: {
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { type: 'string', len: 6, message: '长度必须在 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次确认密码', trigger: 'blur' },
          { type: 'string', min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ]
      },
      // 是否在请求修改密码
      isload: false
    }
  },
  methods: {
    // 修改密码请求
    editSubmit(name) {
      if (this.formInline.password === this.formInline.confirmPassword) {
        this.isload = true
        this.$refs[name].validate(valid => {
          if (valid) {
            this.isload = false
            this.$Notice.success({
              title: '通知',
              desc: '修改成功'
            })
            console.log('login', this.formInline.username, this.formInline.password, this.formInline.code)
            this.setCookie('password', this.formInline.confirmPassword)
          } else {
            this.$Notice.error({
              title: '通知',
              desc: '修改失败'
            })
          }
        })
      } else {
        this.$Message.info('两次密码输入不一致')
      }
    },
    setCookie(name, value) {
      var Days = 30
      var exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-image: url('../assets/img/background.png');
  background-size: cover;
  opacity: 0.95;
  span {
    float:left;
    color: rgb(230, 224, 224);
    font-size:36px;
    margin: 25px 0 0 50px;
  }
}
.login_card {
  width: 350px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgb(230, 224, 224);
  opacity: 0.9;
  #span2 {
    color: Gray;
    font-size:10px;
    margin: 0;
  }
  .login_input {
    text-align: center;
    width: 320px;
  }
  .login_code {
    text-align: center;
    width: 320px;
    display: flex;
    justify-content: space-between;
    img {
      width: 120px;
      height: auto;
      margin-top: -16px;
      cursor: pointer;
    }
  }
  .login_footer {
    display: flex;
    justify-content: flex-end;
    #a_id {
      margin-left: 10px;
      color: red;
    }
    #a_id:hover {
      text-decoration: underline;
    }
  }
}
</style>
