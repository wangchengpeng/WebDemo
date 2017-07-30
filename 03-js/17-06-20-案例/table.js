(function (global) {
	//在实际开发时，尽量多的使用局部变量
	var document = global.document;

	function Table(target, url, type, data, async, tableClass) {
		this.target = target;
		this.url = url || global.location.href;
		this.type = type || 'get';
		this.data = data || '';
		this.tableClass = tableClass || 'grid-table';

		this.load = function () {
			var self = this;
			var xhr = this.createRequest();
			xhr.open(this.type, this.url, this.async);
			xhr.onreadystatechange = function () {
				var state = xhr.readyState,
					status = xhr.status;

				if (state == 4) {
					if (status >= 200 && status < 300 || status == 304) {
						self.tableData = JSON.parse(xhr.responseText);
						self.draw();
					} else {
						console.log('请求失败。')
					}
				}
			};
			xhr.send();
		};
		this.drawHead = function () {
			var thead = document.createElement('thead'),
				tr = document.createElement('tr'),
				th;

			var k,
				obj = this.tableData[0];
			// console.log( obj );
			for (k in obj) {
				th = document.createElement('th');
				th.innerHTML = k;
				// console.log( k );
				tr.appendChild(th);
			}
			thead.appendChild(tr);
			return thead;


		};
		this.drawBody = function () {
			// alert(1);
			var tbody = document.createElement('tbody'),
				tr,
				th;

			var i = 0,
				l = this.tableData.length,
				k,
				obj;

			for ( ; i < l; i++ ) {
				obj = this.tableData[i];
				tr = document.createElement('tr');
				for (k in obj) {
					td = document.createElement('td');
					td.innerHTML = obj[k];
					tr.appendChild(td);
				}
				tbody.appendChild(tr);
			}
			console.log(tbody);

			return tbody;
		};
		this.draw = function () {
			var table = document.createElement('table');
			table.className = this.tableClass;
			table.appendChild(this.drawHead());
			table.appendChild(this.drawBody());
			document.querySelector(this.target).appendChild(table);
		};
		this.createRequest = function () {
			return global.XMLHttpRequest ?
				new global.XMLHttpRequest() :
				new global.ActiveXobject('XMLHTTP');
		};
	}

	function table(target, url, type, data, async, tableClass) {
		if (!target) {
			return null;
		}
		return new Table(target, url, type, data, async, tableClass);
	}
	//将沙盒内部的工厂函授，暴露给使用者。
	global.myTable = table;
})(window);