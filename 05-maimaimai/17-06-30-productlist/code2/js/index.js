
// 点击更过按钮显示所有菜单选项
$(function(){
    $("#menu").on("click", ".roww>li:nth-child(8)", function(){
        // $("menu>.roww>li:nth-child(-n+4)").toggle();
        $("li:nth-child(n+9)").toggle();
    });

    getMenuStyle();
})

// 获取菜单数据
function getMenuStyle(){
    $.ajax({
        url: url + "api/getindexmenu",
        success: function(data){
            console.log(data);
        $("#menu ul").html(template("indexMenuTpl", data))
        }
    })
}