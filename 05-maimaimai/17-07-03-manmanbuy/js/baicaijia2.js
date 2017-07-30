$(function() {
    var $baicaijiaTitle = $(".baicaijia-title");

    $.ajax({
        // cros 跨域

        url: "http://182.254.146.100:3000/api/getbaicaijiatitle",
        success: function(data) {
            //     
            console.log(data)
                // 拼接模板
            var html = template("baicaijiaTitleTpl", data)
                // 把数据添加到页面上
            $baicaijiaTitle.html(html)
            var lis = $(".baicaijia-title").find('li');

            var ulWidth = 0;
            //   计算ul  width  
            for (var i = 0; i < data.result.length; i++) {
                // console.log(lis[i])
                ulWidth += $(lis[i]).width()
            }
            //  复值给ulWidth  宽度
            $baicaijiaTitle.width(ulWidth);
            // 给第一个li  添加active 
            $(lis[0]).addClass("active")
                // 记录初始位置
            var startX = 0;
            // 记录滑动位置
            var moveX = 0;
            // 记录结束位置
            var endX = 0;
            // 计算  滑动的位置
            var distanceX = 0;
            // 记录当前 的位置 
            var currentX = 0;
            // 记录最大的定位位置
            var maxPosition = 0;
            // 记录最小的定位位置
            var minPosition = $baicaijiaTitle.parent().width() - ulWidth;
            //  因为需要有吸附效果  计算 最大可以滑动的位置   
            var maxMove = maxPosition + 50;
            //  因为需要有吸附效果  计算 最小可以滑动的位置   
            var minMove = minPosition - 50;
            // 移动端  滑动事件
            $("#wrapper").on("touchstart", function(e) {
                // console.log(e)    e中 有 touches 中的事件   
                // 记录每次最开始的滑动位置
                startX = e.touches[0].clientX;

            })
            $("#wrapper").on("touchmove", function(e) {
                // 记录每次滑动的实时位置
                moveX = e.touches[0].clientX;
                distanceX = moveX - startX;
                // 当 滑动的距离在最大滑动位置  和最小滑动位置中间才可以移动   超出位置不让他移动 
                if ((currentX + distanceX) < maxMove && (currentX + distanceX) > minMove) {

                    $baicaijiaTitle.css("transform", "translateX(" + (currentX + distanceX) + "px)")
                        // 在移动的时候不可以有缓动
                    $baicaijiaTitle.css("transition", "none ")
                }


            })
            $("#wrapper").on("touchend", function(e) {
                    // console.log(e)
                    endX = e.changedTouches[0].clientX;
                    currentX += distanceX

                    if (currentX > maxPosition) {
                        //   currentX   最大只能为 0    这样才会在onend 结束才可以吸附回去
                        currentX = maxPosition
                        $baicaijiaTitle.css("transform", "translateX(" + currentX + "px)")
                        $baicaijiaTitle.css("transition", "all .3s ")
                    }

                    if (currentX < minPosition) {
                        //   currentX   最小只能为 minPosition    这样才会在onend 结束才可以吸附回去
                        currentX = minPosition
                        $baicaijiaTitle.css("transform", "translateX(" + currentX + "px)")
                        $baicaijiaTitle.css("transition", "all .3s ")
                    }

                    // console.log(startX, moveX, endX)
                })
                // 给每个li  添加点击事件    
            $("#wrapper ul li").on("click", function() {

                $(this).addClass("active").siblings().removeClass('active');
                // 记录每个li当前的titeid   通过计算当前li前面的 所有li 的宽度    复制给 ul   移动的位置
                var titleid = $(this).data("titleid");
                console.log(titleid)
                var currentLiwidth = 0;
                for (var i = 0; i < titleid; i++) {
                    // 计算当前li 前所有的宽度

                    currentLiwidth -= $(lis[i]).width()

                }
                if (currentLiwidth < minPosition) {
                    currentLiwidth = minPosition
                }
                $baicaijiaTitle.css("transform", "translateX(" + currentLiwidth + "px)")

                $baicaijiaTitle.css("transition", "all .3s ")
                    //  把当前li 的宽度赋值给 currentX   可以实时记录当前的位置
                currentX = currentLiwidth
            })

        }
    })
})