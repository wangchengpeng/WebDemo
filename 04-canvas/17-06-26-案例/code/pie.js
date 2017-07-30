// 在实现pie绘制时，所需要的所有数据，就是对象的属性
function Pie( options ) {
	this.target = options.target;
	this.colors = options.colors || 'crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta'.split( ',' );
	this.data = options.data;
	var canvas = document.createElement( 'canvas' );
	canvas.width = 600;
	canvas.height = 400;
	this.x = 300; // 圆心点x坐标值
	this.y = 200; // 圆心点y坐标值
	this.r = 140; // 饼图的半径
	this.start = -90; // 绘制饼图的起始角度
	this.context = canvas.getContext( '2d' );

	// 创建完Pie对象后，立即调用init方法。绘制饼图
	this.init();
}

Pie.prototype = {
	constructor: Pie,
	sector: function( x, y, r, start, end, color ) {
		var ctx = this.context;
		ctx.beginPath();
		ctx.moveTo( x, y );
		ctx.arc( x, y, r, start * Math.PI / 180, end * Math.PI / 180 );
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	},
	computedAngle: function() {
		var total = this.data.total,
			list = this.data.list;

		list.forEach( function( v ) {
			v.angle = 360 * v.value / total;
		} );
	},
	drawSectors: function() {
		var ctx = this.context,
			list = this.data.list;
		var me = this;

		var start = me.start,
			end;
		list.forEach( function( v, i ) {
			end = start + v.angle;
			me.sector( me.x, me.y, me.r, start, end, me.colors[ i ] );
			start = end;
		} );
	},
	drawTip: function() {
		var ctx = this.context,
			list = this.data.list;
		var a, start = this.start;
		var tipLength = this.r + 20,
			tipExt = 10,
			align = 'left';

		var me = this;
		ctx.save();
		ctx.translate( this.x, this.y );
		list.forEach( function( v, i ) {
			a = v.angle / 2 + start;
			a *= Math.PI / 180; 
			var x = Math.cos( a ) * tipLength,
				y = Math.sin( a ) * tipLength;

			if( x < 0 ){
				tipExt = -10;
				align = 'right';
			}
			ctx.beginPath();
			ctx.moveTo( 0, 0 );
			ctx.lineTo( x, y );
			ctx.lineTo( x + tipExt, y );
			ctx.strokeStyle = me.colors[ i ];
			ctx.stroke();

			ctx.fillStyle = me.colors[ i ];
			ctx.textAlign = align;
			ctx.textBaseline = 'bottom';
			ctx.fillText( ' name: ' + v.name + ' ', x + tipExt, y  );
			ctx.textBaseline = 'top';
			ctx.fillText( ' value: ' + v.value + ' ', x + tipExt, y  );

			start += v.angle;
		} );
		ctx.restore();
	},
	init: function() {
		this.computedAngle(); // 必须先计算角度
		this.drawSectors();
		this.drawTip();
		document.querySelector( this.target ).appendChild( this.context.canvas );
	}
};
