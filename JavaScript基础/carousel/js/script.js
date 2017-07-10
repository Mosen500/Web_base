function byId(id) {
	return typeof(id) === "string"? document.getElementById(id):id;
}

var index = 0,
	timer = null,
	pics = byId("banner").getElementsByTagName("div"),
	len = pics.length;
function slideImg() {
	var main = byId("main");
	//滑过清除定时器，离开继续
	main.onmouseover = function() {


	}
	main.onmouseout = function() {
		timer = setInterval(function(){
      		index++;
       		if(index >= len){
          	index = 0;
       	}
       changeImg(); 
		},2000);
	}
}


function changeImg() {
	pics[index].style.display = "block";
}
slideImg();