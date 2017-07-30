$(function () {
    // console.log(getAddressURLParam("categoryid"))
    // 获取地址栏中的参数
    var categoryid = getAddressURLParam("categoryid");
    getNavStyle(categoryid)

    // 获取nav数据
    var categoryid = getAddressURLParam("categoryid");

    var pageid = getAddressURLParam("pageid");
    // 获取商品列表数据
    getProductList(categoryid, pageid)
})
// alert(1);
// 获取地址栏中的参数
function getAddressURLParam(paramName) {
    //构造一个含有目标参数的正则表达式的对象
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    //匹配目标参数
    var url = window.location.search.substr(1).match(reg);
    //返回参数值
    if (url != null)
        return unescape(url[2]);
    return null;
}

// 获取 nav 
function getNavStyle(categoryid) {
    $.ajax({
        url: url + "api/getcategorybyid?categoryid=" + categoryid,
        success: function (data) {
            $(".productName").text(data.result[0].category)
        }
    })
}

// 获取商品列表
function getProductList(categoryid, pageid) {
    $.ajax({
        url: url + "api/getproductlist",
        data: {
            "categoryid": categoryid,
            "pageid": pageid||1
        },
        success: function (data) {
            // console.log(data);
            var html = template("productlistTpl", data);
            var $ul = $("#productlist>ul>li");
            $ul.html(html);

            // 获取页数
            var select = $("#select");
            // console.log(select);

            // console.log(options.text());   //拿到选中项的文本

            var pagesize = data.pagesize; //每页条数
            var totalCount = data.totalCount;  //总条数
            var page = parseInt(Math.ceil(totalCount / pagesize));  //页数(一共有几页)
            console.log(page);
            var option = "";  // 定义个变量接收 option 标签;
            for (var i = 0; i < page; i++) {
                // 判断页数是不是当前显示的信息的页数
                if ((i + 1) == pageid) {
                    option += "<option selected value=" + (i + 1) + ">第" + (i + 1) + "页</option>";
                } else {
                    option += "<option value=" + (i + 1) + ">第" + (i + 1) + "页</option>";
                }
            }
            // console.log(select);
            select.html(option);   //  将页数添加到页面


            // 跳转页
            select.on("change", function () {
                // console.log($(this).val());
                // $(this).val()
                // 获取地址栏的地址
                window.location.href = "./productlist.html?categoryid=" + categoryid + "&pageid=" + $(this).val();
                // window.location.href = "./producctlst.html?categoryid=" + categoryid + "&pageid=" + $(this).val();
            })
            // 设置上一页下一页的url
            var previousUrl = "./productlist.html?categoryid=" + categoryid + "&pageid=" + (pageid-1<=1?1:pageid-1);
            var nextUrl = "./productlist.html?categoryid=" + categoryid + "&pageid=" + (pageid-0+1>=page?page:pageid-0+1);
            // console.log($(".previous  a "));
            $(".previous > a").attr("href", previousUrl);
            $(".next > a").attr("href", nextUrl)
        }
    })
    // $.get(url + "api/getproductlist?", function (data) {    })
}
