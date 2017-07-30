

// 更多按钮
$(function () {
    $("#menu").on("click", ".row>div:nth-child(8)", function () {
        $("#menu>.row>div:nth-last-child(-n+4)").toggle();

    })

    //  获取menu数据
    getMenuStyle();

    getRecommendStyle()
})

//menu数据 start
function getMenuStyle() {
    $.ajax({
        url: url + "api/getindexmenu",
        success: function (data) {
            console.log( data );
            // 数据接成功
            var html = template('indexMenuTpl', data)
            $('#menu .row').html(html);
        }
    })
}
//menu数据 end


////recommend数据start 
function getRecommendStyle(){
    $.ajax({
         url:url+'api/getmoneyctrl',
        success:function( data ){
            // console.log(data);
            // 数据获取成功
            var html = template('indexRecommendTpl',data)
            $('.recommend_product').html(html)
        }
    })
}

//recommend数据start 

