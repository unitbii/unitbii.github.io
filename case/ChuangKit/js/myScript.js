'use strict';
//自调用时，以及窗口大小调整时触发：适应屏幕高度
(window.onresize=function(){
  document.getElementById("indexDiv").style.height=window.innerHeight+"px";
})();
//当page1Right页面被加载时触发
window.onload=page1AnimationInit();
window.onload=function (){
  page1Animation();
  setTimeout(function(){
    window.onwheel=scrollFunc;
    for(var i=2;i<=6;i++){
      document.getElementById("page"+i).style.display="block";
    }
    page2AnimationInit();
    page3AnimationInit();
    page4AnimationInit();
    page5AnimationInit();
    page6AnimationInit();
  },1200);
};
//页面还原————————————————————————————————————————————————————————————————————————
function page1AnimationInit(){
  var labels=document.getElementById("page1Right").childNodes;
  document.getElementById("page1Right").style.width="12%";
  for(var i=0;i<labels.length;i++){
    if(labels[i].nodeName=="DIV" || labels[i].nodeName=="A"){
      labels[i].style.opacity="0";
    }
  }
};
function page2AnimationInit(){
  document.getElementById("page2text").style.opacity="0";
  document.getElementById("page2img1").style.opacity="0";
  document.getElementById("page2img2").style.opacity="0";
  document.getElementById("page2text").style.left="-60%";
  document.getElementById("page2text").style.top="0";
  document.getElementById("page2img1").style.top="90%"
  document.getElementById("page2img2").style.top="-7%";
  document.getElementById("page2img2").style.transform="rotate(90deg)";
};
function page3AnimationInit(){
  document.getElementById("page3text1").style.opacity="0";
  document.getElementById("page3text2").style.opacity="0";
  document.getElementById("page3img1").style.opacity="1";
  document.getElementById("page3img2").style.opacity="1";
  document.getElementById("page3img3").style.opacity="1";
  document.getElementById("page3img4").style.opacity="1";
  document.getElementById("page3img5").style.opacity="1";
  document.getElementById("page3img6").style.opacity="1";
  document.getElementById("page3text1").style.left="-20%";
  document.getElementById("page3text2").style.left="-20%";
  document.getElementById("page3text1").style.top="4%";
  document.getElementById("page3text2").style.top="15%";
  document.getElementById("page3img1").style.top="200%";
  document.getElementById("page3img2").style.top="200%";
  document.getElementById("page3img3").style.top="200%";
  document.getElementById("page3img4").style.top="36%";
  document.getElementById("page3img4").style.transform="rotateX(90deg)";
  document.getElementById("page3img5").style.top="200%";
  document.getElementById("page3img6").style.top="200%";
};
function page4AnimationInit(){
  document.getElementById("page4text1").style.opacity="0";
  document.getElementById("page4text2").style.opacity="0";
  document.getElementById("page4img1").style.opacity="1";
  document.getElementById("page4img2").style.opacity="1";
  document.getElementById("page4img5").style.opacity="1";
  document.getElementById("page4img6").style.opacity="1";
  document.getElementById("page4img7").style.opacity="1";
  document.getElementById("page4img8").style.opacity="1";
  document.getElementById("page4img9").style.opacity="1";
  document.getElementById("page4img10").style.opacity="1";
  document.getElementById("page4text1").style.left="0";
  document.getElementById("page4text2").style.left="-30%";
  document.getElementById("page4text1").style.top="70%";
  document.getElementById("page4text2").style.top="81%";
  document.getElementById("page4img1").style.top="200%";
  document.getElementById("page4img2").style.top="62%";
  document.getElementById("page4img2").style.transform="rotateX(90deg)";
  document.getElementById("page4img5").style.top="200%";
  document.getElementById("page4img6").style.top="200%";
  document.getElementById("page4img7").style.top="200%";
  document.getElementById("page4img8").style.top="200%";
  document.getElementById("page4img9").style.top="200%";
  document.getElementById("page4img10").style.top="200%";
};
function page5AnimationInit(){
  document.getElementById("page5img5").style.transform="rotate(90deg)";
  document.getElementById("page5img1").style.opacity="1";
  document.getElementById("page5img2").style.top="42%";
  document.getElementById("page5img2").style.left="58.7%";
};
function page6AnimationInit(){
  document.getElementById("page6").style.opacity="0";
  document.getElementById("page6").style.top="-500%";
  document.getElementById("page6img1").style.opacity="0";
  document.getElementById("page6img2").style.opacity="0";
  document.getElementById("page6img3").style.opacity="0";
  document.getElementById("page6img4").style.opacity="0";
  document.getElementById("page6img5").style.opacity="0";
  document.getElementById("page6img6").style.opacity="0";
  document.getElementById("page6img7").style.opacity="0";
  document.getElementById("page6img1").style.transform="rotate(-90deg)";
  document.getElementById("page6img2").style.transform="rotate(-90deg)";
  document.getElementById("page6img3").style.transform="rotate(90deg)";
  document.getElementById("page6img4").style.transform="rotate(90deg)";
  
};
//页面动画————————————————————————————————————————————————————————————————————————
function page1Animation(){
  var page1Right=document.getElementById("page1Right");
  var labels=document.getElementById("page1Right").childNodes;
  setTimeout(function(){page1Right.style.width="42%";},0);
  setTimeout(function(){labels[7].style.opacity="1";},300);
  setTimeout(function(){labels[1].style.opacity="1";},500);
  setTimeout(function(){labels[3].style.opacity="1";},650);
  setTimeout(function(){labels[5].style.opacity="1";},800);
};
function page2Animation(){
  document.getElementById("page2text").style.left="0";
  document.getElementById("page2text").style.opacity="1";
  setTimeout(function(){
    document.getElementById("page2img1").style.top="35%";
    document.getElementById("page2img1").style.opacity="1";
  },350);
  setTimeout(function(){
    document.getElementById("page2img2").style.transform="rotate(0)";
    document.getElementById("page2img2").style.opacity="1";
  },600);
};
function page3Animation(){
  document.getElementById("page3text1").style.opacity="1";
  document.getElementById("page3text2").style.opacity="1";
  document.getElementById("page3text1").style.left="49%";
  document.getElementById("page3text2").style.left="25%";
  setTimeout(function(){
    document.getElementById("page3img5").style.top="32%";
  },100);
  setTimeout(function(){
    document.getElementById("page3img4").style.transform="rotateX(0deg)";
  },150);
  setTimeout(function(){
    document.getElementById("page3img1").style.top="63%";
    document.getElementById("page3img2").style.top="35%";
  },300);
  setTimeout(function(){
    document.getElementById("page3img3").style.top="23%";
  },400);
  setTimeout(function(){
    document.getElementById("page3img6").style.top="-5%";
  },500);
};
function page4Animation(){
  document.getElementById("page4text1").style.opacity="1";
  document.getElementById("page4text2").style.opacity="1";
  document.getElementById("page4text1").style.left="50%";
  document.getElementById("page4text2").style.left="9%";
  document.getElementById("page4img1").style.top="56%";
  document.getElementById("page4img2").style.transform="rotateX(0deg)";
  document.getElementById("page4img5").style.top="88%";
  document.getElementById("page4img6").style.top="24%";
  document.getElementById("page4img7").style.top="31%";
  document.getElementById("page4img8").style.top="9%";
  document.getElementById("page4img9").style.top="10.5%";
  document.getElementById("page4img10").style.top="1%";
};
function page5Animation(){
  document.getElementById("page5img5").style.transform="rotate(0)";
  document.getElementById("page5img1").style.opacity=".4";
  document.getElementById("page5img2").style.top="27%";
  document.getElementById("page5img2").style.left="54%";
};
function page6Animation(){
  document.getElementById("page6img1").style.opacity="1";
  document.getElementById("page6img2").style.opacity="1";
  document.getElementById("page6img3").style.opacity="1";
  document.getElementById("page6img4").style.opacity="1";
  document.getElementById("page6img1").style.transform="rotate(0)";
  document.getElementById("page6img2").style.transform="rotate(0)";
  document.getElementById("page6img3").style.transform="rotate(0)";
  document.getElementById("page6img4").style.transform="rotate(0)";
  setTimeout(function(){
  document.getElementById("page6img5").style.opacity="1";
  document.getElementById("page6img7").style.opacity="1";
  },400);
  setTimeout(function(){
  document.getElementById("page6img6").style.opacity="1";
  },900);
};
//结束动画————————————————————————————————————————————————————————————————————————
function page2AnimationOver(){
  document.getElementById("page2text").style.top="-20%";
  document.getElementById("page2img1").style.top="-40%";
  document.getElementById("page2img2").style.top="-20%";
  document.getElementById("page2text").style.opacity="0";
  document.getElementById("page2img1").style.opacity="0";
  document.getElementById("page2img2").style.opacity="0";
};
function page3AnimationOver(){
  document.getElementById("page3text1").style.opacity="0";
  document.getElementById("page3text2").style.opacity="0";
  document.getElementById("page3img1").style.opacity="0";
  document.getElementById("page3img2").style.opacity="0";
  document.getElementById("page3img3").style.opacity="0";
  document.getElementById("page3img4").style.opacity="0";
  document.getElementById("page3img5").style.opacity="0";
  document.getElementById("page3img6").style.opacity="0";
  document.getElementById("page3text1").style.top="-20%";
  document.getElementById("page3text2").style.top="-20%";
  document.getElementById("page3img1").style.top="0%";
  document.getElementById("page3img2").style.top="-10%";
  document.getElementById("page3img3").style.top="-10%";
  document.getElementById("page3img4").style.top="-20%";
  document.getElementById("page3img5").style.top="-20%";
  document.getElementById("page3img6").style.top="-30%";
};
function page4AnimationOver(){
  document.getElementById("page4text1").style.opacity="0";
  document.getElementById("page4text2").style.opacity="0";
  document.getElementById("page4text1").style.opacity="0";
  document.getElementById("page4img1").style.opacity="0";
  document.getElementById("page4img2").style.opacity="0";
  document.getElementById("page4img5").style.opacity="0";
  document.getElementById("page4img6").style.opacity="0";
  document.getElementById("page4img7").style.opacity="0";
  document.getElementById("page4img8").style.opacity="0";
  document.getElementById("page4img9").style.opacity="0";
  document.getElementById("page4img10").style.opacity="0";
  document.getElementById("page4text1").style.top="30%";
  document.getElementById("page4text2").style.top="40%";
  document.getElementById("page4img1").style.top="20%";
  document.getElementById("page4img2").style.top="50%";
  document.getElementById("page4img5").style.top="60%";
  document.getElementById("page4img6").style.top="-10%";
  document.getElementById("page4img7").style.top="-10%";
  document.getElementById("page4img8").style.top="-20%";
  document.getElementById("page4img9").style.top="-20%";
  document.getElementById("page4img10").style.top="-30%";
};
function page5AnimationOver(){};
function page6AnimationOver(){};
//鼠标滚轴触发事件————————————————————————————————————————————————————————————————
var pageKey=1;
function scrollFunc(e){
  if(e.wheelDelta){//IE/Opera/Chrome
    if(e.wheelDelta==120 && pageKey>1){
      pageUp(pageKey);
      setTimeout(function(){
        document.getElementById("pageChose"+pageKey).style.background="#888";
        pageKey -= 1;
        document.getElementById("pageChose"+pageKey).style.background="#fff";
      },600);
    }else if(e.wheelDelta==-120 && pageKey<6){
      pageDown(pageKey);
      setTimeout(function(){
        document.getElementById("pageChose"+pageKey).style.background="#888";
        pageKey += 1;
        document.getElementById("pageChose"+pageKey).style.background="#fff";
      },600);
    }
    window.onwheel=function(){};
    setTimeout(function(){window.onwheel=scrollFunc;},1500);
  }else if(e.detail){//Firefox
  }
};

//下滚事件————————————————————————————————————————————————————————————————————————
function pageDown(n){
  if (n==1) {
    document.getElementById("page2").style.transition="top .6s";
    document.getElementById("page2").style.top="-100%";
    setTimeout(function(){
      page2Animation();
      page1AnimationInit();
    },400);
  }else if (n==2) {
    page2AnimationOver();
    setTimeout(function(){
      document.getElementById("page3").style.top="-200%";
      page3Animation();
      page2AnimationInit();
    },600);
  }else if (n==3) {
    page3AnimationOver();
    setTimeout(function(){
      document.getElementById("page3").style.top="0";
      document.getElementById("page4").style.top="-300%";
      page4Animation();
      page3AnimationInit();
    },600);
  }else if (n==4) {
    page4AnimationOver();
    setTimeout(function(){
      document.getElementById("page2").style.top="-200%";
      document.getElementById("page5").style.top="-400%";
    },100);
    setTimeout(function(){
      document.getElementById("page4").style.top="0";
      page5Animation();
      page4AnimationInit();
    },500);
  }else if (n==5) {
    page5AnimationOver();
    document.getElementById("page6").style.opacity="1";
    setTimeout(function(){
      document.getElementById("page5").style.top="-500%";
    },100);
    setTimeout(function(){
      page6Animation();
      page5AnimationInit();
    },1000);  
  }
};
//上滚事件————————————————————————————————————————————————————————————————————————
function pageUp(n){
  if (n==2) {
    page2AnimationOver();
    setTimeout(function(){
      document.getElementById("page2").style.transition="top .8s";
      document.getElementById("page2").style.top="0";
      page1Animation();
      page2AnimationInit();
    },600);
  }else if (n==3) {
    page3AnimationOver();
    setTimeout(function(){
      document.getElementById("page3").style.top="0";
      page2Animation();
      page3AnimationInit();
    },600);
  }else if (n==4) {
    page4AnimationOver();
    setTimeout(function(){
      document.getElementById("page3").style.top="-200%";
      document.getElementById("page4").style.top="0";
      page3Animation();
      page4AnimationInit();
    },600);
  }else if (n==5) {
    page5AnimationOver();
    setTimeout(function(){
      document.getElementById("page2").style.top="-100%";
      document.getElementById("page5").style.top="-300%";
    },100);
    setTimeout(function(){
      document.getElementById("page4").style.top="-300%";
      page4Animation();
      page5AnimationInit();
    },600);
  }else if (n==6) {
    page6AnimationOver();
    setTimeout(function(){
      document.getElementById("page5").style.top="-400%";
      document.getElementById("page6").style.top="-400%";
    },50);
    setTimeout(function(){
      page5Animation();
      page6AnimationInit();
    },600);
  }
};
