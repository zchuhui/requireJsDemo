/**
 * index页面的js模块
 * time:2016/12/19
 * name:zch
 */

//定义引用文件的位置，这里都是本地的
require.config({
	paths:{
		jquery:'jquery',
		jqueryUI:'jqueryUI'    //用于支持拖动功能 
	}
})


//引用同目录下的jquery、Home文件
require(['jquery','window'],function($,w){
	
	$(function(){

		var win = new w.Windows();

		//引用定制的窗口
		$("#btnAlert").click(function(event) {

			var html = '<div>这是一个 requireJs 的 demo：<p>定制一个通用弹窗组件！</p></div>';

			win.alert({ 
				title:'标题',
				content:html, 
				width:400,
				height:200,
				y:200,
				hasBtn:true, 
				btnTxt:'我懂了', 
				handleBtn:function(){
					alert("停，这里还可以定制事件喔");
				},
				skinUiClass:'',                   //皮肤，定制好的有：window-skin-black / window-skin-blue
				dragHandle:'.window-alert-title'  //可拖动窗口的位置，指定头部
			}); 

			//alert(new w.Windows().text);  
		});



	})
	
});