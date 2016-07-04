$(function() {	
	//定义列表数据结构
	var data = [
	    {
	        name: '用户学情分析接口',
			id:"111",
	        children: [
	            { name: '／anal/data',id:"1111"},
	            { name: 'child2',id:"1112" },
	        ]
	    }
	];
	var  bParent=false ;
	var  selectNodeID=0 ;
	//加载文档树
    $('#tree').tree({data: data,autoOpen: 0});
		$('#tree').bind(
		    'tree.click',
		    function(event) {
		        var node = event.node;
				selectNodeID=node.id;
				//判断是否点击了父节点
			 	if(typeof(node.children)!='undefined'){
					if(node.children!=""){
						bParent=true;
					}
				}
				console.log(event.node);
				//处理点击后的事件
			 	//alert(selectNodeID);
			
	    }
	);
	
	 //附加菜单
     $.contextMenu({
         selector: '.context-menu-one', 
	 	 trigger: 'left',
         callback: function(key, options) {
         	   // var m = "clicked: " + key;
          	  //   window.console && console.log(m) || alert(m); 
				var node=$('#tree').tree('getSelectedNode');
				alert(node.id);
				$.Alert('警告','请选择节点lalallalalalallal',500);
         },
         items: {
		 "create": {name: "创建新节点", icon: "edit"},
             "edit": {name: "编辑节点", icon: "edit"},
             "cut": {name: "剪切节点", icon: "cut"},
             "copy": {name: "复制节点", icon: "copy"},
             "paste": {name: "粘贴节点", icon: "paste"},
             "delete": {name: "删除节点", icon: "delete"},
             "sep1": "---------",
             "quit": {name: "退出", icon: function(){
                 return 'context-menu-icon context-menu-icon-quit';
             }}
         }
     });
   
});