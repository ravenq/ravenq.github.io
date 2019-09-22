# 为 elment-ui 的 tree 加上双击事件

原文: <https://ravenq.github.io/blog.md/el-tree-dblclick.html>

目前 element-ui 的 tree 控件不支持双击事件，在后台管理系统时经常需要双击事件。

如果在 element-ui 源码上直接添加双击事件是很简单的，我已经在 github 上提交了 issue: [#17448](https://github.com/ElemeFE/element/issues/17488) 和 [PR](https://github.com/ElemeFE/element/pull/17499)。

但是等待官方更新都很慢，项目急着需要，而且官方不一定采纳你的 PR。

那么只有两个解决方案，一种比较土，直接 clone 一个官方版本，直接改，自己编译，自己使用，这样有一个很明显的缺点，很难跟进官方的版本。

因此这里主要介绍另外一种方法：非侵入式的封装。

首先引入 elment-ui  的  tree 

```js
import Tree from 'element-ui'
Tree.name = 'extend-base-el-tree' // 改名
Vue.use(Tree) // 注册
```

这里我对原生 element-ui 的 tree 进行了改名，为了是在使用在分装的树组件读可以直接使用  ```<el-tree>``。如果以后官方采纳了 PR 直接删除再分装的代码就好了，不需要修改应用代码。

然后，创建一个自己的 ```el-tree.vue``` 文件

```vue
<template>
  <extend-base-el-tree v-bind="$attrs" @node-click="hdlClick" />
</template>

<script>
import debounce from 'lodash.debounce'
export default {
  inheritAttrs: false,
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    hdlClick() {
      const args = arguments
      // 发送单击事件
      this.$emit('nod-click', ...args)
      // 发送双击事件
      this.clickCount++
      const fnEmitDblClick = debounce(() => {
        if (this.clickCount > 1) {
          this.$emit('node-dblclick', ...args)
        }
        this.clickCount = 0
      }, 500)
      fnEmitDblClick()
    }
  }
}
</script>
```

在封装的组件需要引入原生组件的所有属性，因此使用 Vue 的 ```v-bind="$attrs"``` 方法，绑定所有属性。

在组件里监听单击事件，使用 lodash 的 debounce 方法，判定在 500 毫秒内点击数大于 1 则发送双击事件。

还有一个细节，发送事件的时候会有很多参数，我们不必一个个的定义在发送，可以使用 js 的 arguments 特性，在用一个结构赋值 ```...args``` 转发所有参数即可。

最后，因为 Vue 的事件是使用 ```$emit``` 方法发送的，因此 ```$attrs``` 只能绑定属性，事件需要在封装的组件中监听在转发，就像单击事件一样。

这只是一个临时解决方案，你可根据使用到的事件进行转发，也可以一次性把原生 Tree 的事件都转发出去。

最后的最后，只需要全局注册我们自己的封装过的树组件就可以了

```js
import ElTree from './your/path/to/your/el-tree.vue'
Vue.component('el-tree', ElTree)
```

在你的代码中可以直接使用 ```<el-tree>``` 并且支持双击事件了。

```vue
<template>
  <el-tree @node-dblclick="hdlDblclick" />
</template>

<script>
export default {
  methods: {
    hdlDblclick() {
      console.log('tree node dblclick event.')
    }
  }
}
</script>
```
![ravenq](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/ravenq-qr-gray.png)
