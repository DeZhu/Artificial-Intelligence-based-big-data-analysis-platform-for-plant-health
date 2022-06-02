<template>
  <div class="login_container">
    <span>基于人工智能的植物健康大数据分析平台</span>
    <span id="span2">欢迎登录</span>
    <Card class="login_card" :bordered="false">
      <h3 style="text-align:center; margin: -8px 0 8px 0">登录</h3>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username">
          <Input class="login_input" type="text" v-model="formInline.username" placeholder="请输入用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="login_input" prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <Checkbox v-model="rememberPassword" @on-change="doRememberPassword"> 记住我</Checkbox>
      <Button
        style="margin: 5px auto 8px"
        type="error"
        long
        @click="loginSubmit('formInline')"
        :loading="isload"
      >登录</Button>
      <div class="login_footer">
        <a id="a_id" href="/register">注册</a>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
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
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { type: 'string', min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
          { validator: checkPassword, trigger: 'blur' }
        ]
      },
      // 是否记住密码
      rememberPassword: false,
      // 是否在请求登录
      isload: false
    }
  },
  mounted() {
    this.rememberPassword = Boolean(this.getCookie('rememberPassword'))
    this.formInline.username = this.getCookie('account')
    this.formInline.password = this.getCookie('password')
  },
  methods: {
    // 登录请求
    loginSubmit(name) {
      this.isload = true
      this.setCookie('account', this.formInline.username)
      if (this.formInline.username === 'admin' && this.formInline.password === 'ahu123') {
        this.$router.push({
          path: '/home'
        })
        this.isload = false
        this.$Notice.success({
          title: '通知',
          desc: '登录成功'
        })
        if (this.rememberPassword) {
          this.setCookie('password', this.formInline.password)
        }
      } else {
        this.delCookie('password')
        this.$Notice.success({
          title: '通知',
          desc: '登录失败'
        })
        this.reload()
      }
    },
    // 是否记住密码
    doRememberPassword() {
      if (!this.rememberPassword) {
        this.delCookie('password')
        this.delCookie('rememberPassword')
      } else {
        this.setCookie('rememberPassword', this.rememberPassword)
      }
    },
    setCookie(name, value) {
      var Days = 30
      var exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
    },
    getCookie(name) {
      var arr
      var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      // console.log(arr, reg)
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2])
      } else {
        return null
      }
    },
    delCookie(name) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = this.getCookie(name)
      if (cval != null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-image: url('../../assets/img/farm.jpg');
  background-size: cover;
  opacity: 0.95;
  span {
    float:left;
    color: rgb(230, 224, 224);
    font-size:36px;
    margin: 25px 0 0 50px;
  }
  #span2 {
    float:left;
    color: rgb(235, 72, 72);
    font-size:24px;
    margin: 30px 0 0 20px;
  }
}
.login_card {
  width: 350px;
  height: 240px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: rgb(230, 224, 224);
  opacity: 0.9;
  .login_input {
    text-align: center;
    width: 320px;
  }
  .login_footer {
    display: flex;
    justify-content: flex-end;
    #a_id {
      margin-left: 10px;
      color: Gray;
    }
    #a_id:hover {
      color: red;
      text-decoration: underline;
    }
  }
}
</style>
