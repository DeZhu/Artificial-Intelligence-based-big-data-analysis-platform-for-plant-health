<template>
  <div class="login_container">
    <span>基于人工智能的植物健康大数据分析平台</span>
    <span id="span2">欢迎注册</span>
    <Card class="login_card" :bordered="false">
      <h3 style="text-align:center; margin: -8px 0 8px 0">注册</h3>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username">
          <Input class="login_input" type="text" v-model="formInline.username" placeholder="请输入用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="mobile">
          <Input class="login_input" type="text" v-model="formInline.mobile" placeholder="请输入手机号">
            <Icon type="md-tablet-portrait" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="email">
          <Input class="login_input" type="text" v-model="formInline.email" placeholder="请输入邮箱">
            <Icon type="ios-mail-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input class="login_input" type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <Button
        style="margin: 5px auto 8px"
        type="error"
        long
        @click="registerSubmit('formInline')"
        :loading="isload"
      >注册</Button>
      <div class="login_footer">
        <a id="a_id" href="/login">去登录</a>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
      if (regEmail.test(value)) {
        // 合法邮箱
        return cb()
      }
      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号码的规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        // 合法手机号码
        return cb()
      }
      cb(new Error('请输入合法的手机号码'))
    }
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
        mobile: '',
        email: '',
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
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ]
      },
      // 是否在请求登录
      isload: false
    }
  },
  methods: {
    // 登录请求
    registerSubmit(name) {
      this.isload = true
      if (this.formInline.username !== '' && this.formInline.mobile !== '' && this.formInline.email !== '' && this.formInline.password !== '') {
        this.isload = false
        this.$Notice.success({
          title: '通知',
          desc: '注册成功'
        })
        this.setCookie('account', this.formInline.username)
        this.setCookie('password', this.formInline.password)
        this.$router.push({
          path: '/login'
        })
      } else {
        this.$Notice.error({
          title: '通知',
          desc: '注册失败'
        })
        this.reload()
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
  height: 330px;
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
      color: red;
    }
    #a_id:hover {
      text-decoration: underline;
    }
  }
}
</style>
