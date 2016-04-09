//此库存放一些自制的小功能
//
//作者:于朝曦

//使用面向对象的编程方法
var cyTime = {
  "time": function(myfunc){//计算代码执行的时间
      var t0 = new Date().getTime();
      myfunc();
      return new Date().getTime()-t0;}
}
