$.fn.waterFall=function(){

     /*
     * 条件
     * */
    var $items=$(this);

    //获取到父元素的宽度
    var parentWidth=$items.width();

    //获取到所有item
    var $childrenItems=$items.children();

    //获取到item 的width
    var width=$childrenItems.width();

    //获取到间距，我就要定义列
    var column=5;

    //计算出来间距
    var space=(parentWidth-column*width)/(column-1);

    //定义一个数组，存放所有的列的高度
    var colArray=[];

    //遍历所有的item
    $childrenItems.each(function(index,dom){
            var $dom=$(dom);
            if(index<column){
                //第一行
                $dom.css({
                    top:"0",
                    left:index*(width+space)+"px"
                });
                colArray[index]=$dom.height();
            }else{
                //其它的数据.
               /* $dom.css({
                    top:"",
                    left:""
                })*/
                /*获取到最矮的那一列的高度，以及索引值.*/
                var minIndex=0;
                var minHeight=colArray[minIndex];

                for(var i=0;i<colArray.length;i++){
                     if(minHeight>colArray[i]){
                         minIndex=i;
                         minHeight=colArray[i];
                     }
                }
                $dom.css({
                    top:minHeight+space,
                    left:minIndex*(width+space)
                })
                colArray[minIndex]=minHeight+space+$dom.height();
            }

    });
    var maxIndex=0;
    var maxHeight=colArray[maxIndex];

    for(var i=0;i<colArray.length;i++){
        if(maxHeight<colArray[i]){
            maxHeight=colArray[i];
            maxIndex=i;
        }
    }
    //console.log(maxHeight);
    $items.height(maxHeight+"px");


}