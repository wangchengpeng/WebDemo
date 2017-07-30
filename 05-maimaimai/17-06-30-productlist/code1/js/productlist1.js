
$(function(){
    // 获取参数
    var categoryid = GetQueryString("categoryid")
    // console.log(categoryid);
    var pageid = GetQueryString("pageid");

    // 获取商品列表展示数据
    getProductlist(categoryid, pageid)
})

// 获取地址栏的参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

// 获取三级菜单的数据代码
function getNavStyle(categoryid){
    $.ajax({
        url: url + "api/getcategorybyid?categoryid=" + categoryid,
        success: function(data){
            $(".productNam").html(data.result[0].category)
        }
    })
}


// 获取商品列表展示
function getProductlist(categoryid, pageid){
    // 将pageid转换为数字类型
    var pageid = parseInt(pageid);
    
    $.ajax({
        url: url + "api/getproductlist",
        data:{
            "categoryid":categoryid,
            "pageid": pageid || 1
        },
        success: function (data) {
            var html = template("productlistTpl", data);
            $("#productlist ul").html(html);

            var pagesize = data.pagesize;
            var totalCount = data.totalCount;
            var page = parseInt(Math.ceil(totalCount / pagesize));
            // console.log(page);
            var option = "";
            for(var i = 0; i < page; i++){
                if((i + 1) == pageid) {
                    option += "<option selected value=" + (i + 1) + ">第" + (i + 1) + "页</option>"
                }else{
                    console.log(i);
                    option += "<option value=" + (i + 1) + ">第" + (i + 1) + "页</option>"
                }
            }
            console.log(option);
            $("#select").html(option);

            $("#select").on("change", function (){
                // alert(1);
                console.log($(this).val());
                window.location.href = "./productlist.html?categoryid="+categoryid + "&pageid=" + $(this).val();
            })

            var previousUrl = "./productlist.html?categoryid=" + categoryid +"&pageid=" + ((pageid + 1)>page?page:(pageid + 1));
            var nextsUrl = "./productlist.html?categoryid=" + categoryid +"&pageid=" + ((pageid - 1)<1?1:(pageid - 1));
            $(".previous a ").attr("href", previousUrl)
            $(".next a ").attr("href", nextsUrl)
        }
    })

}



// 页数呵呵的；