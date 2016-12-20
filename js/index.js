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

			var html = '<div><h4>这是我想写的东西</h4>'
						+'<p>爱情是怎么来的。爱情是怎么来的。爱情是怎么来的。爱情是怎么来的。爱情是怎么来的。。。。。</p></div>'

			win.alert({ 
				title:'my love title',
				content:html, 
				width:400,
				height:200,
				y:200,
				hasBtn:true, 
				btnTxt:'OK', 
				handleBtn:function(){
					alert("确定事件，随便定制喔");
				},
				skinUiClass:'window-skin-black',          //皮肤
				dragHandle:'.window-alert-title'          //可拖动窗口的位置
			}); 

			//alert(new w.Windows().text);  
		});



	})
	
});