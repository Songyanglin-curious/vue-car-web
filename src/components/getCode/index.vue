<template>
  <div class="get-code">
      <button type="button">获取验证码</button>
  </div>
</template>

<script>
export default {
    name:"getCode"
}
</script>

<style lang="scss" scoped>
    .get-code{
        position: absolute;
        top: 1px;
        right: 4px;
        button{
            display: inline-block;
            background-color: $main-color;
            color: #fff;
            border: none;
            outline: none;
            height: 32px;
            width: 100px;
            line-height: 32px;
            text-align: center;
            border-radius: 3px;
            cursor: pointer;
            &:active{
                opacity: 0.8;
            }
        }
    }
</style>