/**
 * 定制alert提示组件
 * time:2016/12/19
 * name:zch
 */

define(["jquery","jqueryUI"],function($,$UI){

	//windows方法
	function Windows(){

		 //定制默认参数
		 this.cfg = {
		 	title:"",         //弹框标题
		 	content:"",       //弹框内容
		 	width:500,        //弹框宽度，默认500
		 	height:300,       //弹框高度，默认300
		 	hasBtn:false,     //1.是否有按钮，默认为无
		 	btnTxt:"",        //2.按钮文案
		 	handleBtn:null,   //3.按钮事件
		 	skinUiClass:null, //皮肤
		 	isDraggable:true, //1.是否支持拖动
		 	dragHandle:null,  //2.可拖动区域
		 }
	}

	//方法中添加方法或属性
	Windows.prototype = {

		//Alert弹框
		alert:function(cfg){

			//合并属性
			var CFG = $.extend(this.cfg, cfg); 

			//弹框内容
			var windowAlert = $(
				"<div class='window-alert'>"
					+"<div class='window-alert-title'>"+CFG.title+"<span class='window-alert-close' title='关闭'></span></div>"
					+"<div class='window-alert-content'>"+CFG.content+"</div>"
				+"</div>");
			//弹框模态背景
			var windowAlertShade = $("<div class='window-alert-shade'></div>");


			//再body中插入弹框模态背景
			windowAlertShade.appendTo('body');
			//再body中插入弹框并设定弹框主题
			windowAlert.appendTo('body').addClass(CFG.skinUiClass) ;;
			

			//判断是否有关闭按钮
			if (CFG.hasBtn) {
				var btn = $("<div><a class='window-alert-btn' href='javascript:;'>"+CFG.btnTxt+"</a></div>");
				//弹框中添加按钮
				btn.appendTo(windowAlert); 

				btn.click(function() {
					CFG.handleBtn && CFG.handleBtn();    //判断是否存在handleCloseBtn，存在则执行

					windowAlert.remove(); 
					windowAlertShade.remove();  
				});
			}

			//添加显示特效
			$(".window-alert-shade").fadeIn(200);
			$(".window-alert").fadeIn(500); 

			//是否支持拖动
			if (CFG.isDraggable) {
				//是否有拖动区域
				if (CFG.dragHandle) {
					windowAlert.draggable({handle:CFG.dragHandle});  
				}
				else{
					windowAlert.draggable();
				}
				
			}

			//关闭按钮
			$("body").on('click', '.window-alert-title .window-alert-close', function(event) {
				windowAlert.remove();  
				windowAlertShade.remove();  
			});

			
			//把属性添加css
			windowAlert.css({  
				'min-width': CFG.width + 'px',
				'min-height': CFG.height + 'px',
				'left':(CFG.x || window.innerWidth - CFG.width)/2 + 'px',  //如果有添加x坐标则使用坐标，否则通过后面计算
				'top':(CFG.y || window.innerHeight - CFG.height)/2 + 'px'
			});
 		
			
		},

		// confirm:function(){confirm("I am confirm")},

		// prompt:function(){prompt("I am prompt")},

		// text:"我是信息",  //属性

	}

	return {
		Windows:Windows
	}

});