$(function() {
    $.ajax({
        url: "http://182.254.146.100:3000/api/getbaicaijiatitle",
        success: function(data) {
            // console.log(data);
            // var Lis = "";
            // for (var i = 0; i < data.result.length; i++) {
            //     Lis += ` <li>
            //                     <a  href="#">${data.result[i].title}</a>
            //              </li>`
            // }
            // console.log(Lis)

            // $(".baicaijia-title").html(Lis)

            var html = template("baicaijiaTitleTpl", data);
            $(".baicaijia-title").html(html);
            var lis = $(".baicaijia-title").find("li");

            var ulWidth = 0;
            for (var i = 0; i < lis.length; i++) {
                ulWidth += $(lis[i]).width()
            };
            // ul  父盒子的宽度
            var parentWidth = $(".baicaijia-title").parent().width()
                // 触摸起始位置
            var startX = 0;
            // 移动位置
            var moveX = 0;
            // 结束位置
            var endX = 0;
            // 滑动的距离
            var distanceX = 0;
            // 记录当前的位置
            var currentX = 0;
            // 记录可以移动的最大位置
            var maxPosition = 0;
            // 记录可以移动的最小位置 （为负值 ）
            var minPosition = parentWidth - ulWidth;
            // 记录最大可以滑动的距离
            var maxMove = maxPosition + 50;
            // 记录最小可以滑动的距离
            var minMove = minPosition - 50;
            $(".baicaijia-title").width(ulWidth);
            $("#wrapper").on("touchstart", function(e) {
                // console.log(e)
                // 获取起始位置的clientX
                startX = e.originalEvent.touches[0].clientX;


            })
            $("#wrapper").on("touchmove", function(e) {
                //  获取移动位置的clientX
                moveX = e.originalEvent.touches[0].clientX;
                //  获取移动的距离
                distanceX = moveX - startX;
                // console.log(distanceX);
                // console.log(currentX, distanceX)
                // 将移动的距离给ul 设置上
                //   $(".baicaijia-title").css("transform", "translateX(" + distanceX+ "px)")
                if ((currentX + distanceX) < maxMove && (currentX + distanceX) > minMove) {
                    $(".baicaijia-title").css("transform", "translateX(" + (currentX + distanceX) + "px)")
                    $(".baicaijia-title").css("transition", "none")
                }

            })
            $("#wrapper").on("touchend", function(e) {
                    endX = e.originalEvent.changedTouches[0].clientX;
                    // 记录当前滑动的位置
                    currentX += distanceX

                    if (currentX > maxPosition) {
                        currentX = maxPosition
                        $(".baicaijia-title").css("transform", "translateX(" + currentX + "px)");
                        // 加过度
                        $(".baicaijia-title").css("transition", "all .3s ease")
                    }
                    if (currentX < minPosition) {
                        currentX = minPosition
                        $(".baicaijia-title").css("transform", "translateX(" + currentX + "px)");
                        $(".baicaijia-title").css("transition", "all .3s ease")
                    }

                })
                // 给每个li  加 点击事件
            $(".baicaijia-title li:first-child").addClass("active");
            $(".baicaijia-title li").on("click", function() {

                // d点击加上 clas
                $(this).addClass("active").siblings().removeClass("active");
                // 获取当前的索引
                // console.log($(this).index())
                var titleid = $(this).data("titleid")
                    // console.log(titleid)
                    // 计算当前li 前面的所有li宽度
                var currentLiWidth = 0;
                for (var i = 0; i < titleid; i++) {
                    currentLiWidth -= $(lis[i]).width()
                }
                if (currentLiWidth < minPosition) {
                    currentLiWidth = minPosition
                }
                $(".baicaijia-title").css("transform", "translateX(" + currentLiWidth + "px)")
                $(".baicaijia-title").css("transition", "all .3s ease")
                    // 将currentLiWidth 当前位置复制给 currentX
                currentX = currentLiWidth;

            })



        }
    })
})