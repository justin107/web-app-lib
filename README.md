# web-app-lib

//animation-name: 指定一个 @keyframes 的名称，动画将要使用这个@keyframes定义。

//animation-duration: 整个动画需要的时长。

//animation-timing-function: 动画进行中的时速控制，比如 ease 或 linear.

//animation-delay: 动画延迟时间。

//animation-direction: 动画重复执行时运动的方向。

//animation-iteration-count: 动画循环执行的次数。

//animation-fill-mode: 设置动画执行完成后/开始执行前的状态，比如，你可以让动画执行完成后停留在最后一幕，或恢复到初始状态。

//animation-play-state: 暂停/启动动画。


//============================================================

//   flex：定义布局为盒模型

//   flex-v：盒模型垂直布局

//   flex-1：子元素占据剩余的空间

//   flex-align-center：子元素垂直居中

//   flex-pack-center：子元素水平居中

//   flex-pack-justify：子元素两端对齐

//   兼容性：ios 4+、android 2.3+、winphone8+

//============================================================


.flex{display:-webkit-box;display:-webkit-flex;display:flex;}

.flex-v{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}

.flex-1{-webkit-box-flex:1;-webkit-flex:1;flex:1;}

.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center;}

.flex-pack-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;}

.flex-pack-justify{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}
