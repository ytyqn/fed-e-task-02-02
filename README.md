# fed-e-task-02-02

### 一.  简答题

1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

- 工作模式的区分，不同的工作模式使用不同的devtool，开发模式不需要压缩插件等一些类似的处理
- 入口文件配置entry，考虑多入口
- 出口文件配置ouput，考虑hash命名
- Js，css，图片文件资源等相关文件的loader处理
- 配置插件，dist文件夹删除插件，公共脚本插件，html生成插件，js和css代码和图片文件资源压缩插件，代码混淆插件等等
- Tree Shaking移除 JavaScript 上下文中的未引用代码
- 开启devServer，使用HRM热更新
- 考虑代码分割，模块合并，其他优化

2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

- Loader 和 Plugin的不同：
  - Loader主要用于对js，css，图片文件进行编译压缩等处理，主要是用于加载资源文件，作用在一个个文件上
  - Plugin主要是在webpack的生命周期中处理一些事，用于webpack功能上的扩展，作用于webpack上
- Loader 和 Plugin 的思路描述：

### 二. 编程题

- 代码：
- 视频：