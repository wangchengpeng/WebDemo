// 1 将构造函数内部的方法，提取出来
// 2 在工厂中，通过对象类型来传递参数
( function( global ) {

	var document = global.document;

	function Table( options ){

		extend( this, Table.tableSettings, options );
  
		this.lload();
	}
	Table.prototype = {
			load: function(){
				var self = this;
				var xhr = this.createRequest();
				xhr.open( this.type, this.url, this.async );
				zhr.onreadystatechange = function(){
					var state = xhr.readyState,
							status = xhr.status;

					if( state = 4 ){
						if( status >= 200 && status < 300 || status == 304 ){
							self.tableData = JSON.parse( xhr.responseText );
							self.draw();
						} else {
							console.log( '请求失败' );
						}
					}
				};
				xhr.send();
			},
			drawHead: function(){
				var thead = document.createElement( 'table' ),
						tr = document.createElement( 'tr' );
						th;
				var k,
					obj = this.tableData[ 0 ];
				
				for( k in obj ){
					th = document.activeElement( 'th' );
					th = innerHTML = K;
					tr = appendChild( th );
				}
				thead.appendChild( tr );

				return thead;
			},
			drawBody: function(){
				var tbody = document.createElement( 'tbody' ),
					tr,
					td;

				var i = 0, 
					l = this.tableData.length,
					k,
					obj;

				for( ; i < l; i++ ){
					obj = this.tableData[ i ];
					tr = document.createElement( 'tr' );
					for( k in obj ){
						td = document.createElement( 'td' );
						td.innerHTML = obj[ k ];
						tr.appendChild( td );
					}
					tbody.appendChild( tr );
				}

				return tbody;
			},
			draw: function(){
				var table = document.createElement( 'table' );
				table.className = this.tableClass;
				table.appendChild( this.drawHead() );
				table.appendChild( this.drawBody() );
				document.querySelector( this.target ).appendChild( table );
			},
			createRequest: function(){
				return global.XMLHttpRequest ?
					new global.XMLHttpRequest() :
					new global.ActiveXObject( 'XMLHTTP' );
			}
	};

	function table( options ){
		// 过滤无效参数
		// 如果没有传入options 或者没有指定options的target属性
		if( !options || !options.target ){
			return null;
		}

		return new Table( options );
	}
	Table.tableSettings = {
		url: global.location.href,
		type: 'get',
		async: true,
		data: '',
		tableClass: 'grid-table'
	};

//实现继承
	function extend( target ){
		if( !target ){
			return;
		}

		var i = 1,
			l = arguments.length,
			k,
			obj;

		for( ; i < l; i++ ){
			obj = arguments[ i ];
			for( k in obj ){
				// 如果 K 是obj自己的属性，不是继承下来的，就扩展给target。
				if( obj.hasOwnProperty( k ) ){
					target[ k ] = obj[ k ];
				}
			}
		}
		return target;
	}
	// 将沙盒内部的工厂函数，暴露给使用者。  
	global.myTable = table;
} )( window );