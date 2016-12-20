# requireJsDemo
> 用 requireJs 定制一个 alert弹窗。
效果：

![image](http://a4.qpic.cn/psb?/V14Dum7e1iKTz2/aIBvYmIsIN8WqJF8nmrfFunlsWGRHVmE2HP3b2s0L1M!/c/dB8BAAAAAAAA&ek=1&kp=1&pt=0&bo=OgJBAQAAAAAFB1w!&tm=1482210000&sce=60-2-2&rf=0-0)

![](http://a1.qpic.cn/psb?/V14Dum7e1iKTz2/J6Z*wuVUXt4oA6lg.k1JvsJLEYHV1aY8xnmVFxmL*xo!/c/dCABAAAAAAAA&ek=1&kp=1&pt=0&bo=*AEUAQAAAAAFB8w!&tm=1482210000&sce=60-2-2&rf=0-0)

**目录：**
```
RequireJsDemo
--images
--css
  --window.css
--js
  --index.js 
  --jquery.js
  --jqueryUI.js
  --require.js
  --window.js
--pages
  --index.html
--README.md
```

**使用配置**
```
var win = new w.Windows();

		//引用定制的窗口
		$("#btnAlert").click(function(event) {

			var html = '<div>这是一个 requireJs 的 demo：<p>定制一个通用弹窗组件！</p></div>';

			win.alert({ 
				title:'标题',                       //标题
				content:html,                       //内容
				width:400,                          //宽度
				height:200,                         //高度
				hasBtn:true,                        //是否有按钮
				btnTxt:'我懂了',                    //按钮文案
				handleBtn:function(){               //按钮事件
					alert("停，这里还可以定制事件喔");
				},
				skinUiClass:'window-skin-blue',     //皮肤，定制好的有：window-skin-black / window-skin-blue
				dragHandle:'.window-alert-title'    //可拖动窗口的位置，指定头部
			}); 

			//alert(new w.Windows().text);  
		});
    
```
