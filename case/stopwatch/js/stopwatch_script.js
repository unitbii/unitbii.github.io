var time_array;//时间容器
var status; //运算的状态: 
/*0 时钟状态;
  1 准备计时;
  2 正在计时;
  1.5 准备取消计时;
  */
var timer;//保存setInterval对象
var start_time;//记录开始时刻
var mm,ss,ms;//分、秒、毫秒

//初始化函数
function init(){
  time_array = [];
  status=0;
  start_time=0;
  mm=ss=ms="00";
  for(var i=1;i<=3;i++){
    document.getElementById("time_"+i).innerHTML = "00:00:00";
    document.getElementById("time_"+i).style.color = "#aaa";
  }
  document.getElementById("No").innerHTML = "No.0";
  document.getElementById("No").style.color = "#b31";
}
//功能函数
function status_clock(){//状态：时钟
  document.getElementById("top_status").innerHTML = "时钟";
  document.getElementById("top_status").style.color = "#8cc";
  document.getElementById("top_status").style.border = "1px solid #8cc";
}
function time(){//显示时钟
  var now = new Date();
  var hh = liangweishu(now.getHours());
  var mm = liangweishu(now.getMinutes());
  var ss = liangweishu(now.getSeconds());
  document.getElementById("stopwatch_screen_main").innerHTML = hh+":"+mm+":"+ss;
}
function showTime(){//执行显示时钟
  setTimeout("time()",0);
  timer = setInterval("time()", 1000);
}
function clearTime(){//清空时钟
  document.getElementById("stopwatch_screen_main").innerHTML = "00:00:00";
  clearInterval(timer);
}
function liangweishu(i){//十位数补0
  if(i<10){
    i = "0"+i;
  }
  return i;
}
function star_button(){//开始按钮
  if(status==0){
    init();
    clearTime();
    document.getElementById("top_status").innerHTML = "秒表";
    document.getElementById("top_status").style.color = "#c8e";
    document.getElementById("top_status").style.border = "1px solid #c8e";
    document.getElementById("No").style.display = "inline-block";
    status = 1;
  }else if(status==1){
    start_time = new Date().getTime();
    timer = setInterval("stopwatch()", 10);
    document.getElementById("No").innerHTML = "No.1";
    document.getElementById("No").style.color = "#f22";
    status = 2;
  }else if(status==2){
    var time = document.getElementById("stopwatch_screen_main").innerHTML;
    time_array.push(time);
    document.getElementById("No").innerHTML = "No."+(time_array.length+1);
    if(time_array.length<=3){
      document.getElementById("time_"+time_array.length).innerHTML = time_array[time_array.length-1];
      document.getElementById("time_"+time_array.length).style.color = "#f1f166";
    }
  }else if(status==1.5){
    init();
    clearTime();
    status = 1;
  }
}
function reset_button(){//重置按钮
  if(status==1){
    status_clock();
    document.getElementById("No").style.display = "none";
    showTime();
    status = 0;
  }else if(status==2){
    star_button();
    clearInterval(timer);
    status = 1.5;
  }else if(status==1.5){
    init();
    clearTime();
    status = 1;
  }
}
function stopwatch(){//秒表
  var time = new Date().getTime() - start_time;
  if(time<1000){
    ms = liangweishu(parseInt(time/10));
  }else if(1000<time<60000){
    ss = liangweishu(parseInt(time/1000));
    ms = liangweishu(parseInt(time%1000/10));
   }
  document.getElementById("stopwatch_screen_main").innerHTML = mm+":"+ss+":"+ms;
}



//主函数
function main(){
  init();
  showTime();
}
//执行主函数
main();