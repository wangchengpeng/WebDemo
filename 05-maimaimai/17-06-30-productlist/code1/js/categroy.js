// alert(1);

$(function () {
    // alert(2);
    $('#categroy_title').on('click', '.category_ul>li>a', function () {
        // alert(3); 
        // console.log(this);
        $(this).siblings("ul").toggle();

        $(this).parent().siblings('li').find("ul").slideUp();
        var titleid = $(this).attr("data_title_id");

        // console.log($(this).attr("data_title_id"));
        var titleid = $(this).attr("data_title_id");
        var $that = $(this);
        getcategoryMenu(titleid, $that)

    })

    getcategoryTitle();

});


// 商品分类标题
function getcategoryTitle() {
    $.ajax({
        // 请求路径 地址
        url: url + "api/getcategorytitle",
        success: function (data) {
            // console.log(data);
            // 将获取到的数据添加到页面
            var html = template("categoryTtileTpl", data);
            $(".category_ul").html(html)
        }
    })
}

// 商品分类列
function getcategoryMenu(titleid, $that) {
    if ($that.siblings("ul").find("li").length == 0) {
        $.ajax({
            url: url + "api/getcategory?titleid=" + titleid,
            success: function (data) {
                // console.log(data);  
                // 获取数据添加到页面
                var html = template("categoryMenuTpl", data);
                var $ul = $that.siblings("ul");
                $ul.html(html);
                var lastlis = $ul.children().length % 3 || 3;
                $ul.children("li:nth-last-child(-n" + lastlis + ")").css("border=bottom", "none")
            }
        })
    }
}


