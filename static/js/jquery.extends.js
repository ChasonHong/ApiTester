	$.extend({
		Alert:function(title,msg,delayCloseSec,width,height){
			if(typeof(width)=='undefined'){
				width="250px";
			}else{
				width=width+"px";
			}
			if(typeof(height)=='undefined'){
				height="100px";
			}else{
				height=height+"px";
			}
			var alertHtml='<div id="alert" class="alert alert-danger alert-dismissible fade in" role="alert"  id="alert" style="position:absolute;left:45%;top:40%;background:white;position:absolute;z-index:10000;">'
				+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'
			    +'<h4>'+title+'</h4>'
			    +'<p>'+msg+'</p>'
				+'</div>';
			$("body").append(alertHtml); 
			$("#alert").css('height',height);
			$("#alert").css('width',width);
			//延迟关闭
			setTimeout('$("#alert").alert("close");',delayCloseSec);
		}
	});
	
$('.header-menu li').click(function(){
	  $(this).siblings().removeClass('active');
	  $(this).addClass('active');

});