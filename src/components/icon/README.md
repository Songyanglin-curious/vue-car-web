# component：icon

## 注册：

在main.js中

```javascript
// 引入图标组件
import Icon from "./components/icon/icon.vue";
// 祖册图标组件
Vue.component('icon', Icon);
```

## 用例：

```javascript
<template>
  <icon name="icon-weixin" size="40" deg="5deg" @click="iconClickHandler" />
</template>

<script>
export default {
  methods: {
    iconClickHandler() {
      console.log("点击了图标");
    }
  }
};
</script>
```

## Attributes：

| 参数  | 说明         | 内型          | 可选值 | 默认值 |
| ----- | ------------ | ------------- | ------ | ------ |
| name  | 图标名称     | string        | -      | -      |
| size  | 图标大小     | string/number | -      | 20     |
| color | 图标颜色     | string        | -      | -      |
| deg   | 图标旋转角度 | string/number | -      | 0      |

**可接受事件**

