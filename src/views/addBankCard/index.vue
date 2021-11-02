<template>
  <div class="padding-l-r-30">
    <header>
      <Back news="添加银行卡"></Back>
    </header>
    <div class="car-form">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="用户名"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="请选择开户银行"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="预留手机号"></el-input>
      </el-form-item>
            <el-form-item>
        <el-input v-model="form.name" size="40px" placeholder="手机验证码">
         
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