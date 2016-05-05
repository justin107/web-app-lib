(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

;(function($, win){

	var defaultOpt = {
		value	: 0,	//当前结束值
		upTime	: 2000,
    time    : 5,
		onStart	: function(){},	//开始回调
		onStop	: function(){}	//结束回调
	};
	
	var counter = {
		opt			: {},
		$obj		: null,
    i       : 0,
    time    : 5,
		startTime	: 0,
		value		: 0,	//当前结束值
		incr		: 0,	//计数器
		handler		: 0,	
		counterInit	: function(o){
			counter.opt = $.extend(defaultOpt, o);
			this.counterReset();
		},
		
		counterReset	: function(){
			var p = counter;
			p.$obj = this;
			
			p.value = p.opt.value;
      p.time = p.opt.time;
      p.i    = 0;
			p.startTime = 0;
			p.incr = p.opt.value;
			p.handler = 0;
			
			p.$obj.html(p.value);
			
			if(p.handler == undefined || p.handler == null || p.handler != 0){
				cancelAnimationFrame(p.handler);
			}
		},
		
		counterAnimate	: function(timestamp){
			var p = counter;
			
			var now = new Date().getTime();

      p.i += 1;
      if(p.i % p.time != 0){
        p.handler = requestAnimationFrame(p.counterAnimate);
        return;
      }


			if(p.startTime == 0){
				p.startTime = now;
				p.opt.onStart();
			}
			
			if(p.incr >= p.value){
				cancelAnimationFrame(p.handler);
				p.$obj.html(p.value);
				p.opt.onStop();
				return;
			}
			
			if(now - p.startTime >= p.opt.upTime){
				var diff = p.value - p.incr;
				var length = diff.toString().length;
				var diff_length = length - 2;
				var seed = 1;
				if(diff_length > 0){
					seed = Math.pow(10, diff_length - 1);
            		seed += parseInt(Math.random()*(seed-1));
				}
				p.incr += seed;
			}else{
				p.incr += 1;
			}
			
			p.$obj.html(p.incr);
			p.handler = requestAnimationFrame(p.counterAnimate);
		},
		
		counterSetValue	: function(value){
			var p = counter;
			if(value > p.value){
				p.value = value;
				if(p.handler == undefined || p.handler == null || p.handler != 0){
					cancelAnimationFrame(p.handler);
				}
				p.counterAnimate();
			}
			return true;
		}
	};
	
	$.fn.extend(counter);

})(jQuery, window);
