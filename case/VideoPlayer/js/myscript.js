		window.onload = function(){
			var oV = document.getElementById("video");//获取视频对象
			var aInput = document.getElementById("VP_console").children;//获取各个按钮
			var timeLine = document.getElementById('timeLine');//进度条
			var icurrentTime = document.getElementById('currentTime');//当前进度
			var timePoint = document.getElementById('timePoint');//进度点
			var voiceLine = document.getElementById('voiceLine');//音量槽
			var icurrentVoice = document.getElementById('currentVoice');//当前音量
			var voicePoint = document.getElementById('voicePoint');//音量点
			var disX = 0;
			var disX2 = 0;
			var ivolume = 1;
			var timer = null;//时间线程
			aInput[0].onclick = function(){//播放&暂停
				if(oV.paused){
					oV.play();
					this.src = "img/paused.png";
					nowTime();
					timer = setInterval(nowTime,250);
				}else{
					oV.pause();	
					this.src = "img/play.png";
					clearInterval(timer);
				}
			};
			aInput[2].innerHTML = "/ " + changeTime(oV.duration);//
			aInput[4].onclick = function(){//静音
				if( oV.muted ){
					oV.volume = ivolume;
					this.src = "img/muted01.png";
					voicePoint.style.left = (oV.volume*voiceLine.offsetWidth-voicePoint.offsetWidth/2) + 'px';
					icurrentVoice.style.width = oV.volume*voiceLine.offsetWidth + "px";
					oV.muted = false;
				}else{
					ivolume = oV.volume;
					oV.volume = 0;
					this.src = "img/muted02.png";
					voicePoint.style.left = -1*voicePoint.offsetWidth/2 + "px";
					icurrentVoice.style.width = "0px";
					oV.muted = true;
				}
			};
			aInput[6].onclick = function(){//全屏
				
				oV.webkitRequestFullScreen();
			};
			function nowTime(){//显示时间
				aInput[1].innerHTML = changeTime(oV.currentTime);
				var scale = oV.currentTime/oV.duration;
				timePoint.style.left = (scale*timeLine.offsetWidth - timePoint.offsetWidth/2) + 'px';
				icurrentTime.style.width = scale*timeLine.offsetWidth + "px";
			}
			function changeTime(iNum){//返回“hh:mm:ss”时间格式
				iNum = parseInt( iNum );
				// var iH = toZero(Math.floor(iNum/3600));
				var iM = toZero(Math.floor(iNum/60));
				var iS = toZero(Math.floor(iNum%60));
				return iM + ':' + iS;
			}
			function toZero(num){//补零
				if(num<=9){
					return '0' + num;
				}else{
					return '' + num;
				}
			}
			timePoint.onmousedown = function(ev){//控制时间轴
				var ev = ev || window.event;
				disX = ev.clientX - (timePoint.offsetLeft+timePoint.offsetWidth/2);
				document.onmousemove = function(ev){
					var ev = ev || window.event;
					var L = ev.clientX - disX;
					if(L< 0){
						L = 0;
					}else if(L>timeLine.offsetWidth){
						L = timeLine.offsetWidth;
					}
					timePoint.style.left = (L-timePoint.offsetWidth/2) + 'px';
					icurrentTime.style.width = L + "px";
					var scale = L/timeLine.offsetWidth;
					oV.currentTime = scale * oV.duration;
					nowTime();
				};
				document.onmouseup = function(){
					document.onmousemove = null;
				};
				return false;
			};
			voicePoint.onmousedown = function(ev){//控制音量
				var ev = ev || window.event;
				disX2 = ev.clientX - (voicePoint.offsetLeft+voicePoint.offsetWidth/2);
				document.onmousemove = function(ev){
					var ev = ev || window.event;
					var L = ev.clientX - disX2;
					if(L<0){
						L = 0;
					}else if(L>voiceLine.offsetWidth){
						L = voiceLine.offsetWidth;
					}
					if(L==0){
						ivolume = 0.5;
						aInput[4].src = "img/muted02.png";
						oV.muted = true;
					}else {
						aInput[4].src = "img/muted01.png";
						oV.muted = false;
					}
					voicePoint.style.left = (L-voicePoint.offsetWidth/2) + 'px';
					icurrentVoice.style.width = L + "px";
					var scale = L/voiceLine.offsetWidth;
					oV.volume = scale;
				};
				document.onmouseup = function(){
					document.onmousemove = null;
				};
				return false;
			};
		};
