$(function() {
    var data1, i = 0;
    $.ajax({
        url: "http://182.254.146.100:3000/api/getinlanddiscount",
        success: function(data) {
            data1 = data;
            var newdata = {
                "result": []
            }
            console.log(data)
            for (i = 0; i < 4; i++) {
                newdata.result.push(data.result[i])
            }
            var html = template("discountTpl", newdata);
            $("#main .main-product").html(html);
            $(".loadding").hide()
        }
    })

    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        var minProductHeight = $(".main-product").height();
        var mainProductTop = $(".main-product").offset().top;
        var windowHeight = $(window).height();
        var offset = minProductHeight + mainProductTop + $("#footer").height() + $(".loading").height() - scrollTop - windowHeight;
        if (offset < 0) {
            $.ajax({
                url: "http://182.254.146.100:3000/api/getinlanddiscount",
                beforeSend: function() {

                    if ($(".loadding").hasClass("xfa")) {
                        return false;
                    }
                    $(".loadding").show().addClass("xfa")

                },
                success: function(data) {
                    data1 = data;
                    if (i >= data.result.length) {
                        return false;
                    }
                    console.log(data.result.length)
                    var newdata = {
                        "result": []
                    }
                    for (var j = i; j < i + 4; j++) {
                        newdata.result.push(data.result[j])
                    }
                    var html = template("discountTpl", newdata);
                    $("#main .main-product").append(html);
                    i = j
                },
                complete: function() {
                    $(".loadding").hide()
                    if ($(".loadding").hasClass("xfa")) {
                        setTimeout(function() {
                            $(".loadding").removeClass("xfa")
                        }, 200)
                    }
                }
            })
        }
        // console.log(offset)


    })

})