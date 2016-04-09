var first_Num;//第一个数字容器
var second_Num;//第二个数字容器
var status; //运算的状态: 
/*0 未输入运算符时（需要输入第一个运算符）       （初始状态）
  1 输入第一个运算符后（需要输入第二个数字）     （一般状态1）
  2 第二个数字输入后（需要进行运算）             （一般状态2）
  3 等号运算后                                   （特殊）
  4 开根/倒数运算后                              （特殊）
  */
var operator;  //运算符
var c_record;  //运算历史
var sc_exp;    //科学符号
//初始化函数
function init(){
  first_Num="0";
  second_Num=0;
  status=0;
  operator="+";
  c_record="&nbsp;";
  sc_exp="";
  document.getElementById("calculator_screen_top").innerHTML=c_record;
  document.getElementById("calculator_screen_main").innerHTML=second_Num;
}
//功能函数
function assignin_Num(i){//赋值
  if(status==3||status==4){
    init();
  }
  if(status==1){
    second_Num = first_Num;
    first_Num="0";
    status=2;
  }
  if(typeof first_Num != "string" ){
    first_Num = first_Num.toString();
  }
  if(first_Num.indexOf(".")==-1 && i=="."){
    first_Num = first_Num+i;
  }else if(first_Num.indexOf(".")>-1 && i=="0"){
    first_Num = first_Num+i;
  }else {
    first_Num = parseFloat(first_Num+i);
  }
  document.getElementById("calculator_screen_main").innerHTML=first_Num;
}
function click_operator(i){//点击运算符
  if(typeof first_Num == "string"){
    first_Num = parseFloat(first_Num);
    document.getElementById("calculator_screen_main").innerHTML=first_Num;
  }
  if(status==0){
    c_record += first_Num + " " + i;
  }else if(status==1){
    c_record = c_record.substring(0, c_record.length-1);
    c_record += i;
  }else if(status==2){
    c_record += " " +  first_Num + " " + i;
    count(operator);
  }else if(status==3){
    c_record += " " + i;
  }else if(status==4){
    c_record+= " " + sc_exp;
    count(operator);
    c_record += " " + i;
  }
  operator=i;
  status=1;
  document.getElementById("calculator_screen_top").innerHTML=c_record;
}
function count(i){//计算
  if(i=="+"){
    second_Num = second_Num + first_Num;
  }else if(i=="-"){
    second_Num = second_Num - first_Num;
  }else if(i=="*"){
    second_Num = second_Num * first_Num;
  }else if(i=="/"){
    second_Num = second_Num / first_Num;
  }else if(i=="%"){//与windows计算器不同，此处%为取余
    second_Num = second_Num % first_Num;
  }
  second_Num = jqdx(second_Num);
  document.getElementById("calculator_screen_main").innerHTML=second_Num;
  first_Num = second_Num;
}
function  isEqualTo(){//等号运算
  if(status==0){
    return;
  }else if(status==1){
    second_Num = first_Num;
  }else if(status==3){//与windows的累加方式不同，待修复。
    c_record += " " + operator;
  }else if(status==4){
    status=3;
    count(operator);
    return;
  }
  status=3;
  c_record += " " + first_Num;
  document.getElementById("calculator_screen_top").innerHTML=c_record;
  count(operator);
}
function plus_minus(){//正负转换
  first_Num = first_Num*-1;
  document.getElementById("calculator_screen_main").innerHTML=first_Num;
}
function reciprocal(){//倒数运算
  if(typeof first_Num == "string"){
    first_Num = parseFloat(first_Num);
  }
  if(status==4){
    sc_exp="reciproc(" + sc_exp + ")";
  }else {
    sc_exp="reciproc(" + first_Num + ")";
  }
  document.getElementById("calculator_screen_top").innerHTML=c_record + " " + sc_exp;
  first_Num = jqdx(1/first_Num);
  document.getElementById("calculator_screen_main").innerHTML=first_Num;
  status=4;
  
}
function square_root(){//开根运算
  if(typeof first_Num == "string"){
    first_Num = parseFloat(first_Num);
  }
  if(status==4){
    sc_exp="sqrt(" + sc_exp + ")";
  }else {
    sc_exp="sqrt(" + first_Num + ")";
  }
  document.getElementById("calculator_screen_top").innerHTML=c_record + " " + sc_exp;
  first_Num = jqdx(Math.sqrt(first_Num));
  document.getElementById("calculator_screen_main").innerHTML=first_Num;
  status=4;
}
function jqdx(num){//截取小数点后x位
  var x=arguments[1]?arguments[1]:16;
  num = num*(Math.pow(10,x));
  num = Math.round(num);
  return num/(Math.pow(10,x));
}
//主函数
function main(){
  init();
}
//执行主函数
main();