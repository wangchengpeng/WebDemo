// 1 将构造函数内部的方法 提取出来 添加都原型上实现继承
// 2 在工厂中 通过对象类型 来传递参数。
( function( global ) {
	// 在实际开发时，尽量多的使用局部变量
	var document = global.document;
	
	function Table( options ) {
		// 要将options对象的所有成员添加给 Table对象（this）
		// 先继承默认对象的成员，再继承 用户传入的对象成员。
		// 这样 用户配置低的属性值 会 覆盖掉默认的属性值
		extend( this, Table.tableSettings , options );

		// 创建完Table对象后，自动调用load方法，加载数据 绘制表格。
		this.load();
	}
	Table.prototype = {
		load: function() {
			var self = this;
			var xhr = this.createRequest();
			xhr.open( this.type, this.url, this.async );	
			xhr.onreadystatechange = function() {
				var state = xhr.readyState,
					status = xhr.status;

				if( state == 4 ){
					if( status >= 200 && status < 300 || status == 304 ){
						self.tableData = JSON.parse( xhr.responseText );
						self.draw();
					} else {
						console.log( '请求失败.' );
					}
				}
			};
			xhr.send();
		},
		drawHead: function() {
			var thead = document.createElement( 'thead' ),
				tr = document.createElement( 'tr' ),
				th;

			var k,
				obj = this.tableData[ 0 ];

			for( k in obj ){
				th = document.createElement( 'th' );
				th.innerHTML = k;
				tr.appendChild( th );
			}
			thead.appendChild( tr );

			return thead;
		},
		drawBody: function() {
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
		draw: function() {
			var table = document.createElement( 'table' );
			table.className = this.tableClass;
			table.appendChild( this.drawHead() );
			table.appendChild( this.drawBody() );
			document.querySelector( this.target ).appendChild( table );
		},
		createRequest: function() {
			return global.XMLHttpRequest ? 
				new global.XMLHttpRequest() :
				new global.ActiveXObject( 'XMLHTTP' );
		}
	};

	function table( options ) {
		// 过滤无效参数
		// 如果没有传入options 或者没有指定options的target属性
		if( !options || !options.target ){
			return null;
		}

		return new Table( options );
	}

	// add 将Table对象默认属性 写到一个对象上。
	// 	并且将该对象添加给Table函数的tableSettings属性。（仿照jquery）
	Table.tableSettings = {
		url: global.location.href,
		type: 'get',
		async: true,
		data: '',
		tableClass: 'grid-table'
	};

	// 实现继承
	function extend( target ) {
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
				// 如果 k 是obj自己的属性，不是继承下来的，就扩展给target。
				if( obj.hasOwnProperty( k ) ){
					target[ k ] = obj[ k ];
				}
			}
		}

		return target;
	}
	// 将沙盒内部的工厂函数 暴露给使用者。
	global.myTable = table;
} )( window );