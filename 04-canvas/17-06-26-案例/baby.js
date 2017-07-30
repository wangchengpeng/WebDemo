

function Baby( options ) {
	extend( this, settings, options );
	this.img = new Image();

	this.load();
}


//默认属性值
var settings= {
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