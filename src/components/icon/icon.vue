<template>
  <!-- 有两个注意点：一是iconfont这个类名必须添加，二是通过$listeners将父作用域中的事件监听器导入进来，这样就可以正常相应点击事件 -->
    <i
    class="iconfont"
    :class="name"
    :style="{fontSize:`${size}px`,color,transform:`rotate(${deg}deg)`,display:'inline-block'}"
    v-on="$listeners"
    ></i>
</template>

<script>
export default {
    name: "Icon",
   props: {
    // 图标名称
    name: {
      type: String,
      default: ""
    },
    // 图标颜色
    color: {
      type: String,
      default: ""
    },
    // 图标大小
    size: {
      type: [String, Number],
      // type: Number,
      default: 20
    },
    // 图标旋转角度
    deg: {
      type: [String, Number],
      default: 0
    }
  }

}
</script>

<style scoped>
/* // 这里加～是因为当你在一个资源路径最前面加了～时，webpack会把这个路径对应的文件视为一个module（模块）去解析
// 这样@对应的alias，也就是项目的src目录才会被正确识别，这步解析是webpack做的，和网上很多文章说的css-loader没有一毛钱关系
// 还有一种写法是@import url()，两种写法都可以，没有对错之分 */
@import "~@/assets/iconfont/iconfont.css";

.iconfont {
  cursor: pointer;
}

</style>