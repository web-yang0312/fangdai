Page({
	data:{
		year:"5",
		itemList: ['商业贷款', '公积金贷款', '组合贷款'],
		kind:"0",
	    focus: false,
        inputValue: '123',
        m:"0.00",
        n:"0",
		lv:"0",
		ben:"0.00",
		zl:"0.00",
		itemList1: ['基准利率','7折利率','8折利率','8.3折利率','8.5折利率','8.8折利率'],
		lilv:["4.75",'3.32','3.80','4.28','4.99','5.23'],
		h:"0.00"
	},
	action:function(e){
		 wx.navigateTo({
            url:'/pages/show/show'
        })
	},
	action2:function(){
		var self=this;
		wx.showActionSheet({
		  itemList: ['商业贷款', '公积金贷款', '组合贷款'],
		  success: function(res) {
		    var n=res.tapIndex;
		     self.setData({
		     	kind:n
		     })
		  }
		})
	},
	action3:function(){
		var self=this;
		wx.showActionSheet({
		  itemList: ['5','10','15','20','25','30'],
		  success: function(res) {
		  	var n=res.tapIndex;
		     self.setData({
		     	year:n*5+5
		     })
		    }
		})
	},
	action4:function(){
		var self=this;
		wx.showActionSheet({
		  itemList: ['基准利率','7折利率','8折利率','8.3折利率','8.5折利率','8.8折利率'],
		  success: function(res) {
		  	var n=res.tapIndex;
		     self.setData({
				lv:n
		     })
		     console.log(n)
		    }
		})
	},
    bindKeyInput: function(e) {
    	var y=parseInt(this.data.year);
    	console.log(y);
    	var self=this;
			var val;
			if(e.detail.value===""){
              val=0;
			}else{
              val=parseInt(e.detail.value)*10000;
			};
	    var lilv=["4.75",'3.32','3.80','4.28','4.99','5.23'];
		var L=parseFloat(lilv[this.data.lv]);
    	var lv=L/12/100;
		var lv1=lv+1;
    	var yue=parseInt(y*12);
//		var m=((val*lv*(Math.pow(lv1,yue)))/((Math.pow(lv1,yue))-1)).toFixed(2);
		var m=(val/yue)+(val-0)*lv;
		var H=(val/yue*lv).toFixed(2);
		console.log(L)
	    self.setData({
	        m:m,
	        h:H,
	        zl:(((val/yue+val*lv)+val/yue*lv1)/2*yue-val).toFixed(2),
			ben:(((val/yue+val*lv)+val/yue*lv1)/2*yue).toFixed(2)
		  })
            console.log(yue);
			console.log(val);
			console.log(this.data.m);
	  }
})