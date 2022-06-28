$(".head_xuanxiang").on("click",function(){
    $(this).hasClass("on")? $(this).removeClass("on"):$(this).addClass("on");
})
$(".head_xuanxiang1").on("click",function(){
	if($(this).hasClass("on")){
		$(this).removeClass("on");
		$(".head_xuanxiang").removeClass("on");
	}else{
		$(this).addClass("on");
		$(".head_xuanxiang").addClass("on");
	}
})
