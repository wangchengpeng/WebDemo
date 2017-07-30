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

			var i = 0,
				l = this.model.length;
			// 添加“序号”表头列
			th = document.createElement( 'th' );
			th.innerHTML = '序号';
			// 指定宽度
			th.style.width = "40px";
			tr.appendChild( th );

			for( ; i < l; i++ ){
				th = document.createElement( 'th' );
				// 给th添加自定义属性data-sort-by，用来存储排序字段
				th.setAttribute( 'data-sort-by', i );
				th.innerHTML = this.model[ i ].text;
				// 如果设置宽度
				if( this.model[ i ].width ){
					th.style.width = this.model[ i ].width + 'px';
				}
				// 如果设置了对齐方式
				
				tr.appendChild( th );
			}
			// 添加“操作”表头列
			th = document.createElement( 'th' );
			th.innerHTML = '操作';
			th.style.width = "80px";
			tr.appendChild( th );
			// 给tr添加name属性，用来区分排序和“操作”
			tr.setAttribute( 'name', 'sort' );
			thead.appendChild( tr );

			return thead;
		},
		drawBody: function() {
			var tbody = document.createElement( 'tbody' ),
				tr,
				td;

			var i = 0,
				l = this.tableData.length,
				j,
				k = this.model.length,
				obj;

			for( ; i < l; i++ ){
				obj = this.tableData[ i ];
				tr = document.createElement( 'tr' );
				// 添加一个自定义属性，用来记录行的索引
				tr.setAttribute( 'data-index', i );
				// 添加序号列
				td = document.createElement( 'td' );
				td.innerHTML = i + 1;
				tr.appendChild( td );
				// 遍历model 这样才能准确的确定列的顺序。
				for( j = 0; j < k; j++ ){
					td = document.createElement( 'td' );
					/*var prop = this.model[ j ].prop;
					td.innerHTML = obj[ prop ];*/
					var txt = obj[ this.model[ j ].prop ];
					td.innerHTML = txt == undefined ? '' : txt;
					// 如果设置了对齐方式
					if( this.model[ j ].align ){
						td.style.textAlign = this.model[ j ].align;
					}
					if( this.model[ j ].color ){
						td.style.color = this.model[ j ].color;
					}
					tr.appendChild( td );
				}
				// 添加编辑和删除操作
				td = document.createElement( 'td' );
				td.innerHTML = '<a name="edit" href="javascript:;">编辑</a><a href="javascript:;" name="delete">删除</a>';
				tr.appendChild( td );
				tbody.appendChild( tr );
			}

			return tbody;
		},
		draw: function() {
			// 给Table对象添加属性table，存储创建出来的table标签
			var table = this.table = document.createElement( 'table' );
			// 如果指定了表格的宽度
			/*if( this.width ){
				this.table.style.width = this.width + 'px';
			}*/
			this.width && ( this.table.style.width = this.width + 'px' );
			table.className = this.tableClass;
			table.appendChild( this.drawHead() );
			table.appendChild( this.drawBody() );
			document.querySelector( this.target ).appendChild( table );
			// 绘制完成后，绑定事件
			this.bind();
		},
		createRequest: function() {
			return global.XMLHttpRequest ? 
				new global.XMLHttpRequest() :
				new global.ActiveXObject( 'XMLHTTP' );
		},
		refresh: function() {
			// 将table表格之前的tbody删除
			this.table.removeChild( this.table.tBodies[ 0 ] );
			this.table.appendChild( this.drawBody() );
		},
		bind: function() {
			// 缓存Table对象
			var self = this;
			// 要在这里获取 table标签 然后绑定事件。
			this.table.addEventListener( 'click', function( e ) {
				var target = e.target, // 获取事件源
					cate = target.name; 
				// 1 实现排序
				var isSort = !!target.parentNode.getAttribute( 'name' );
				if( isSort ){
					var sortKey, // 排序方式
						sortBy;  // 排序字段（按照哪个属性来排序）
					var index = target.getAttribute( 'data-sort-by' );
					// 如果index 不为undefined值，表示 点击的是可排序的列
					if( index != undefined ){
						// 获取排序方式
						// 用自定义属性data-sort-key存储上一次的排序方式 ，默认值为降序排序
						// 用 1 表示 升序； -1 表示 降序
						// 下面代码是获取上一次的排序方式
						sortKey = target.getAttribute( 'data-sort-key' ) || -1;
						// 转换成本次排序方式
						sortKey = -sortKey;
						// 将本次排序方式 存储在自定义属性上
						target.setAttribute( 'data-sort-key', sortKey );
						// 获取排序字段
						sortBy = self.model[ index ].prop;
						self.tableData.sort( function( a, b ) {
							return a[ sortBy ] > b[ sortBy ] ? sortKey: -sortKey;
						} );
						// 重绘表格
						self.refresh();		
					}
				}
				// 2 实现 删除和编辑功能
				// 如果获取到了对应类别，就向下执行
				if( cate ){
					switch( cate ){
						case 'edit':
							break;
						case 'delete': 
							if( global.confirm( '确认删除操作？' ) ){
								// 坑
								// 获取行索引
								var index = target.parentNode.parentNode.getAttribute( 'data-index' );
								// 删除数据
								self.tableData.splice( index, 1 );
								// 重绘表格
								self.refresh();
							}
							break;
					}
				}
			} );
		}
	};

	function table( options ) {
		// 过滤无效参数
		// 如果没有传入options 或者没有指定options的target属性 或者 没有指定表头配置
		if( !options || !options.target || !options.model ){
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