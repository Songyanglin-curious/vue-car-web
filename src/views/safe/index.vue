<template>
  <div class="safe-wrap">
    <header>
      <Back news="安全设置"></Back>
    </header>
    <nav class="link-group">
      <router-link :to="{name: 'ChangePassword'}" tag="a">
        <p>修改登录密码</p>
      </router-link>
      <router-link :to="{name: 'SetFundPassword'}" tag="a">
        <p>设置资金密码</p>
      </router-link>
      <router-link to="" tag="a">
        <p>绑定手机号</p>
      </router-link>
      <router-link :to="{ name: 'Safe' }" tag="a">
        <p>绑定银行号</p>
      </router-link>

    </nav>
  </div>
</template>

<script>
export default {
  name: "Safe",

  methods: {},
};
</script>

<style lang="scss" scoped>
.safe-wrap{
  header{
    padding: 0 30px;
  }
}
</style>