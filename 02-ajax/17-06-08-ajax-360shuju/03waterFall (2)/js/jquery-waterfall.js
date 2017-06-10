$.fn.waterFall=function(){
    //在这里去实现逻辑，完成布局.
    //我们要进行瀑布流布局，实际上就是去定位所有的items 下面的item
    //这个item 是采用的position：absolute，去计算出来每个item 的left 值以及top值.

    //第一行的前面五个
    //left index*(width+space)
    //top:0
    //其它的item 元素
    var $parentitems=this;
    var parentWidth=$parentitems.width();

    var $items=$parentitems.children(".item");
    //第一个item 的width
    var width=$items.width();
    var column=5;
    //计算间距
    var space=(parentWidth-column*width)/(column-1);

    //存放的每一列的高度.
    var arr=[];

    //定位每一个item
    $items.each(function(index,dom){
        var $dom=$(dom);

        //第一行的前面五个
        //left index*(width+space)
        //top:0
        if(index<column){
            $dom.css({
                 top:0,
                 left:index*(width+space)
            });

            //缓存每一列的高度
            arr.push($dom.height());
        }else{

            //找到五列当中最矮的那一列，以及它的索引值.
            var minIndex=0;
            var minHeight=arr[minIndex];
            for(var i=0;i<arr.length;i++){
                if(minHeight>arr[i]){
                    minHeight=arr[i];
                    minIndex=i;
                }
            }

            $dom.css({
                 top:minHeight+space,
                 left:minIndex*(width+space)
            });
            //更新高度.
            arr[minIndex]=minHeight+space+$dom.height();
        }

    })

    //找到最高的那一列的高度.
    var maxIndex=0;
    var maxHeight=arr[maxIndex];

    for(var j=0;j<arr.length;j++){
        if(maxHeight<arr[j]){
              maxHeight=arr[j];
        }
    }


    //设置items 的高度.
    $parentitems.height(maxHeight+50);


}