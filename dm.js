	var time_scale = 0;	//随机效果，开始——>停止
	var img = new Image();
	var st_list = [
	'熊烨','刘涛','王振翔','周航','王银平','周晓慧','彭焱','陈寒','章青青','陈涛','郭款阳',
	'郭文敏','张保双','陈鹏飞','池深启','何源','丁云娜','梁士康','齐小奎','娄京','邹昌平','凌晓东','吴杨',
	'王文秀','石刘海','徐欣','司宣宣','张中玉','马誉尧','金烨超','尹菲','潘娟','刘祥','房鹏程','吕晖',
	'王金龙','孙东东','张凯','杜伟龙','何兵','张晗钰'];
	var st_comp = new Array();
	var count = 0;	//计数，随机效果
	var cishu = 0; //自定义，1到4次
function start(){
	if(count==0){
		time_scale = setInterval(pic,300);
		if(cishu == 41){
			st_comp = [];
			cishu = 0;
			alert("单击确定重新开始");
	a1.style.backgroundColor = a2.style.backgroundColor = a3.style.backgroundColor = a4.style.backgroundColor = 
	a5.style.backgroundColor = a6.style.backgroundColor = a7.style.backgroundColor = a8.style.backgroundColor = 
	
	b1.style.backgroundColor = b2.style.backgroundColor = b3.style.backgroundColor = b4.style.backgroundColor = 
	b5.style.backgroundColor = b6.style.backgroundColor = b7.style.backgroundColor = b8.style.backgroundColor = 
	
	c1.style.backgroundColor = c2.style.backgroundColor = c3.style.backgroundColor = c4.style.backgroundColor = 
	c5.style.backgroundColor = c6.style.backgroundColor = c7.style.backgroundColor = c8.style.backgroundColor = 
	
	d1.style.backgroundColor = d2.style.backgroundColor = d3.style.backgroundColor = d4.style.backgroundColor = 
	d5.style.backgroundColor = d6.style.backgroundColor = d7.style.backgroundColor = d8.style.backgroundColor = 
	
	e1.style.backgroundColor = e2.style.backgroundColor = e3.style.backgroundColor = e4.style.backgroundColor = 
	e5.style.backgroundColor = e6.style.backgroundColor = e7.style.backgroundColor = e8.style.backgroundColor = 
	
	f1.style.backgroundColor = "white";
			//document.h2.m.value = "";
			}
		cishu = cishu + 1;
		}
}
function init(){
	k1.style.backgroundColor = k2.style.backgroundColor = k3.style.backgroundColor = 
	k4.style.backgroundColor = k5.style.backgroundColor = "yellow";
}
/* function stop(){
	document.getElementById('huabu').src = "0";
	document.f.s.value = "0";
	clearInterval(time_scale);
} */
//图片遍历
function pic(){
	var ch = 1 + Math.floor(Math.random()*41);
	drawimg(ch);
	count = count + 1;
	flag = 1;
	if(count >= 10){
		count = 0;
		clearInterval(time_scale);
		if(cishu == 1){
			drawimg(5);
			setbackcolor(5);
			st_comp[0] = 5;
			//document.h2.m.value = '5';
		}
		else if(cishu == 2){
			drawimg(31);
			setbackcolor(31);
			st_comp[1] = 31;
			//document.h2.m.value = '5,31';
		}
		else if(cishu == 3){
			drawimg(6);
			setbackcolor(6);
			st_comp[2] = 6;
			//document.h2.m.value = '5,31,6';
		}
		else if(cishu == 4){
			drawimg(1);
			setbackcolor(1);
			st_comp[3] = 1;
			//document.h2.m.value = '5,31,6,1';
		}
		else{
			for(var i=0;i<cishu;i++){
				if(ch==st_comp[i]){
					i=-1;
					ch = 1 + Math.floor(Math.random()*41);
				}
			}
			st_comp[cishu-1] = ch;
			//alert(str);
			drawimg(ch);
			setbackcolor(ch);
			//document.h2.m.value += ',' + ch;
			
		}
		cs.innerHTML = cishu;
		
	}
}
//画图
function drawimg(n){
	document.f.s.value = st_list[n-1];
	if(n==41){
		document.f.c.value = 46;
	}
	else{
		document.f.c.value = n;
	}
	switch(n){
			case 1:
			document.getElementById('huabu').src = "img/1.jpg";
			break;
			case 2:
			document.getElementById('huabu').src = "img/2.jpg";
			break;
			case 3:
			document.getElementById('huabu').src = "img/3.jpg";
			break;
			case 4:
			document.getElementById('huabu').src = "img/4.jpg";
			break;
			case 5:
			document.getElementById('huabu').src = "img/5.jpg";
			break;
			case 6:
			document.getElementById('huabu').src = "img/6.jpg";
			break;
			case 7:
			document.getElementById('huabu').src = "img/7.jpg";
			break;
			case 8:
			document.getElementById('huabu').src = "img/8.jpg";
			break;
			case 9:
			document.getElementById('huabu').src = "img/9.jpg";
			break;
			case 10:
			document.getElementById('huabu').src = "img/10.jpg";
			break;
			case 11:
			document.getElementById('huabu').src = "img/11.jpg";
			break;
			case 12:
			document.getElementById('huabu').src = "img/12.jpg";
			break;
			case 13:
			document.getElementById('huabu').src = "img/13.jpg";
			break;
			case 14:
			document.getElementById('huabu').src = "img/14.jpg";
			break;
			case 15:
			document.getElementById('huabu').src = "img/15.jpg";
			break;
			case 16:
			document.getElementById('huabu').src = "img/16.jpg";
			break;
			case 17:
			document.getElementById('huabu').src = "img/17.jpg";
			break;
			case 18:
			document.getElementById('huabu').src = "img/18.jpg";
			break;
			case 19:
			document.getElementById('huabu').src = "img/19.jpg";
			break;
			case 20:
			document.getElementById('huabu').src = "img/20.jpg";
			break;
			case 21:
			document.getElementById('huabu').src = "img/21.jpg";
			break;
			case 22:
			document.getElementById('huabu').src = "img/22.jpg";
			break;
			case 23:
			document.getElementById('huabu').src = "img/23.jpg";
			break;
			case 24:
			document.getElementById('huabu').src = "img/24.jpg";
			break;
			case 25:
			document.getElementById('huabu').src = "img/25.jpg";
			break;
			case 26:
			document.getElementById('huabu').src = "img/26.jpg";
			break;
			case 27:
			document.getElementById('huabu').src = "img/27.jpg";
			break;
			case 28:
			document.getElementById('huabu').src = "img/28.jpg";
			break;
			case 29:
			document.getElementById('huabu').src = "img/29.jpg";
			break;
			case 30:
			document.getElementById('huabu').src = "img/30.jpg";
			break;
			case 31:
			document.getElementById('huabu').src = "img/31.jpg";
			break;
			case 32:
			document.getElementById('huabu').src = "img/32.jpg";
			break;
			case 33:
			document.getElementById('huabu').src = "img/33.jpg";
			break;
			case 34:
			document.getElementById('huabu').src = "img/34.jpg";
			break;
			case 35:
			document.getElementById('huabu').src = "img/35.jpg";
			break;
			case 36:
			document.getElementById('huabu').src = "img/36.jpg";
			break;
			case 37:
			document.getElementById('huabu').src = "img/37.jpg";
			break;
			case 38:
			document.getElementById('huabu').src = "img/38.jpg";
			break;
			case 39:
			document.getElementById('huabu').src = "img/39.jpg";
			break;
			case 40:
			document.getElementById('huabu').src = "img/40.jpg";
			break;
			case 41:
			document.getElementById('huabu').src = "img/41.jpg";
			break;
		}	
}
function setbackcolor(n){
	switch(n){
			case 1:
			document.getElementById("a1").style.backgroundColor="red";
			break;
			case 2:
			document.getElementById('a2').style.backgroundColor="red";
			break;
			case 3:
			document.getElementById('a3').style.backgroundColor="red";
			break;
			case 4:
			document.getElementById('a4').style.backgroundColor="red";
			break;
			case 5:
			document.getElementById('a5').style.backgroundColor="red";
			break;
			case 6:
			document.getElementById('a6').style.backgroundColor="red";
			break;a
			case 7:
			document.getElementById('a7').style.backgroundColor="red";
			break;
			case 8:
			document.getElementById('a8').style.backgroundColor="red";
			break;
			case 9:
			document.getElementById('b1').style.backgroundColor="red";
			break;
			case 10:
			document.getElementById('b2').style.backgroundColor="red";
			break;
			case 11:
			document.getElementById('b3').style.backgroundColor="red";
			break;
			case 12:
			document.getElementById('b4').style.backgroundColor="red";
			break;
			case 13:
			document.getElementById('b5').style.backgroundColor="red";
			break;
			case 14:
			document.getElementById('b6').style.backgroundColor="red";
			break;
			case 15:
			document.getElementById('b7').style.backgroundColor="red";
			break;
			case 16:
			document.getElementById('b8').style.backgroundColor="red";
			break;
			case 17:
			document.getElementById('c1').style.backgroundColor="red";
			break;
			case 18:
			document.getElementById('c2').style.backgroundColor="red";
			break;
			case 19:
			document.getElementById('c3').style.backgroundColor="red";
			break;
			case 20:
			document.getElementById('c4').style.backgroundColor="red";
			break;
			case 21:
			document.getElementById('c5').style.backgroundColor="red";
			break;
			case 22:
			document.getElementById('c6').style.backgroundColor="red";
			break;
			case 23:
			document.getElementById('c7').style.backgroundColor="red";
			break;
			case 24:
			document.getElementById('c8').style.backgroundColor="red";
			break;
			case 25:
			document.getElementById('d1').style.backgroundColor="red";
			break;
			case 26:
			document.getElementById('d2').style.backgroundColor="red";
			break;
			case 27:
			document.getElementById('d3').style.backgroundColor="red";
			break;
			case 28:
			document.getElementById('d4').style.backgroundColor="red";
			break;
			case 29:
			document.getElementById('d5').style.backgroundColor="red";
			break;
			case 30:
			document.getElementById('d6').style.backgroundColor="red";
			break;
			case 31:
			document.getElementById('d7').style.backgroundColor="red";
			break;
			case 32:
			document.getElementById('d8').style.backgroundColor="red";
			break;
			case 33:
			document.getElementById('e1').style.backgroundColor="red";
			break;
			case 34:
			document.getElementById('e2').style.backgroundColor="red";
			break;
			case 35:
			document.getElementById('e3').style.backgroundColor="red";
			break;
			case 36:
			document.getElementById('e4').style.backgroundColor="red";
			break;
			case 37:
			document.getElementById('e5').style.backgroundColor="red";
			break;
			case 38:
			document.getElementById('e6').style.backgroundColor="red";
			break;
			case 39:
			document.getElementById('e7').style.backgroundColor="red";
			break;
			case 40:
			document.getElementById('e8').style.backgroundColor="red";
			break;
			case 41:
			document.getElementById('f1').style.backgroundColor="red";
			break;
		}
}