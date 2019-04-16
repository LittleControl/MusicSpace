var banner=document.getElementById('banner');
console.log(banner);
var imgList=banner.children;
console.log(imgList);
var count=0;
var timer0=setInterval(function(){
	if(count==3){
		for(var i=0;i<3;i++){
			// console.log(imgList[i].style.display);
			// console.log("==================")
			imgList[i].style.display="";
			// console.log(imgList[i].style.display);
		}
		count=0;
	}else{
		console.log(getStyle(imgList[i],"display"));
		imgList[count].style.display="none";
	}
	count++;
	console.log(count);
},1000);
function getStyle(obj,style){
	var obj=getComputedStyle(obj);
	return obj[style];
}