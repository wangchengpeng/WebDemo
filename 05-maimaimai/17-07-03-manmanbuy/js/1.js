$(function() {
    // 获取动态的ul 中列表
    $.ajax({
        url: url + "api/getbaicaijiatitle",
        success: function(data) {
            // console.log(data)
            var html = template("baicaijiaTpl", data);
            $(".nav-ul").html(html)
            var lis = $(".nav-ul").find("li");
            var ulWidth = 1;
            for (var i = 0; i < lis.length; i++) {
                ulWidth += $(lis[i]).width()
            }
            // console.log(ulWidth)

            $(".nav-ul").css("width", ulWidth)

            var ulParentWidth = $(".nav-ul").parent().width()
            var maxPosition = 0;
            var minPosition = ulParentWidth - ulWidth;
            // console.log(minPosition)
            var starX = 0;
            var moveX = 0;
            var endX = 0;
            var minMove = minPosition - 50;
            var maxMove = maxPosition + 50;
            var distanceX = 0;
            var currentX = 0;
            $(".bj-title").on("touchstart", function(e) {

                startX = e.originalEvent.touches[0].clientX;
            })
            $(".bj-title").on("touchmove", function(e) {

                moveX = e.originalEvent.touches[0].clientX;
                distanceX = moveX - startX;
                // console.log((distanceX + currentX))
                if ((distanceX + currentX) < maxMove && (distanceX + currentX) > minMove) {
                    $(".nav-ul").css("transform", "translateX(" + (distanceX + currentX) + "px)")
                        // console.log(distanceX)
                    $(".nav-ul").css("transition", "none")
                }

            })
            $(".bj-title").on("touchend", function(e) {

                endX = e.originalEvent.changedTouches[0].clientX;
                // console.log(currentX)
                currentX += distanceX;
                if (currentX > maxPosition) {
                    currentX = maxPosition
                    $(".nav-ul").css("transform", "translateX(" + currentX + "px)")
                    $(".nav-ul").css("transition", "all .3s")

                } else if (currentX < minPosition) {
                    currentX = minPosition
                    $(".nav-ul").css("transform", "translateX(" + currentX + "px)")
                    $(".nav-ul").css("transition", "all .3s")
                }
            })
            $(".nav-ul li:nth-child(1)").addClass("active")

            $(".nav-ul li").on("click", function() {
                $(this).addClass("active").siblings().removeClass("active");
                var titleid = $(this).attr("data-titleid");
                var clickPosition = 0;
                for (var i = 0; i < titleid; i++) {

                    clickPosition -= $(lis[i]).width();

                }
                if (clickPosition < minPosition) {
                    clickPosition = minPosition
                }

                $(".nav-ul").css("transform", "translateX(" + clickPosition + "px)")
                $(".nav-ul").css("transition", "all .3s");


                clickPosition = currentX;
                getDiscountProduct(titleid)

            })




        }

    })
})


function getDiscountProduct(titleid) {
    $.ajax({
        url: url + "api/getbaicaijiaproduct",
        data: {
            titleid: titleid
        },

        success: function(data) {
            //    data  键值对形式
            var html = template("indexDiscountTpl", data);
            $(".productBaicaijia").html(html)
        }
    })
}