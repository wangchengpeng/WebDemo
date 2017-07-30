// 属性
// 小人大小 width height
// 动画帧   frame
// 总帧数   frames
// 图片的地址 imgSrc
// 图片对象 img
// 小人的位置 x， y
// 方向      direction
// 是否在运动 isWalking
// 定时器id	  timer
// canvas的绘图工具 cotenxt
// 步伐 step
function Baby( options ) {
	extend( this, settings, options );
	this.img = new Image();

	this.load();
}
// 默认属性值
var settings = {
	x: 0,
	y: 0,
	frame: 0,
	isWalking: false,
	timer: null,
	direction: 0,
	width: 40,
	height: 65,
	frames: 4,
	img: null,
	context: null,
	step: 2
};

function extend( target ) {
	if( !target ){
		return;
	}

	var i = 1,
		l = arguments.length,
		obj,
		k;

	for( ; i < l; i++ ){
		obj = arguments[ i ];
		for( k in obj ){
			if( obj.hasOwnProperty( k ) ){
				target[ k ] = obj[ k ];
			}
		}
	}

	return target;
}

// 方法
// 状态的更新 update
// 绘制小人	 draw
// 动画开始  start
// 动画停止  stop
// 事件绑定  bind
// 监听图片加载事件 load
Baby.prototype = {
	constructor: Baby,
	update: function() {
		var w = this.context.canvas.width,
			h = this.context.canvas.height;

		// 1 更新帧
		this.frame = ++this.frame % this.frames;
		// 2 更新位置
		switch( this.direction ){
			case 0: // 下
				this.y += this.step;
				// 下边界处理
				if( this.y >= h ){
					this.y = -this.height - 10;
				}
				break;
			case 1: // 左
				this.x -= this.step;
				// 左边界处理
				if( this.x <= -this.width ){
					this.x = w + 10;
				}
				break;
			case 2: // 右
				this.x += this.step;
				// 右边界处理
				if( this.x >= w ){
					this.x = -this.width - 10;
				}
				break;
			case 3: // 上
				this.y -= this.step;
				// 上边界处理
				if( this.y <= -this.height ){
					this.y = h + 10;
				}
				break;
		}
	},
	draw: function() {
		var ctx = this.context,
			canvasW = ctx.canvas.width,
			canvasH = ctx.canvas.height;
		// 1 清楚画布
		ctx.clearRect( 0, 0, canvasW, canvasH );
		// 2 绘制小人
		ctx.drawImage( this.img, 
		 	this.frame * this.width, this.direction * this.height, this.width, this.height,
		 	this.x, this.y, this.width, this.height );
	},
	start: function() {
		var me = this;
		if( !this.isWalking ){
			// 动画开始后，将isWalking属性赋值为true。
			this.isWalking = true;
			this.timer = setInterval( function() {
				me.update();
				me.draw();
			}, 20 );
		}
	},
	stop: function() {
		if( this.isWalking ){
			clearInterval( this.timer );
			// 动画停止了，isWalking属性应赋值为false并且timer属性赋值为 null
			this.isWalking = false;
			this.timer = null;
		}
	},
	bind: function() {
		var me = this;
		document.addEventListener( 'keydown', function( e ) {
			var keycode = e.keyCode;
			
			if( keycode == 32 ){ // 按下空格键
				if( me.isWalking ){
					me.stop();
				} else {
					me.start();
				}
			}

			// 如果动画停止了 就不要在改变方向（不要继续向下执行代码）
			if( !me.isWalking ){
				return;
			}
			
			switch( keycode ){
				case 38:
				case 87: // 上
					me.direction = 3;
					break;
				case 39:
				case 68: // 右
					me.direction = 2;
					break;
				case 40:
				case 83: // 下
					me.direction = 0;
					break;
				case 37:
				case 65: // 左
					me.direction = 1;
					break;
			}
		} );
	},
	load: function() {
		var me = this;
		this.img.src = this.imgSrc;
		this.img.onload = function() {
			me.bind();
			me.draw();
		};
	}
};