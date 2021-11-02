<template>
  <div class="padding-l-r-30">
    <header>
      <Back news="修改登录密码"></Back>
    </header>
    <div class="car-form">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="原始密码"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="新密码"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="确认密码"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="验证码">
         
        </el-input>
        <GetCode></GetCode>
      </el-form-item>
      <el-form-item>
        <el-button class="confirm-button" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
// 引入获取验证码组件；
import GetCode from "@c/getCode/index.vue";
export default {
  name: "Password",
  components:{"GetCode":GetCode},
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>