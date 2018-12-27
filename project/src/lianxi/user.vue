<template>
    <div>
      <el-form style="width: 50%;margin: 0 auto">
        <el-form-item label="用户名">
          <el-input v-model="formData.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          formData: {
            user: '',
            password: ''
          }
        }
      },
      methods: {
        login() {
          this.$store.dispatch('Login', this.formData).then(res => {
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped>

</style>
