$(function(){
    $('#dowebok').fullpage({
        "navigation":"true",
        "css3":"true",
        // fullpage插件提供的api
        onLeave(index,nextIndex, direction){
            // 当下一屏为2且向下滑时
            if(nextIndex == 2 && direction == "down"){
                // 搜索框动画,结束后显示"沙发"两个字,因为将"沙发"动画放在搜索框后
                $('.section2').find('.e3').animate({
                    marginLeft:"-110",
                    opacity:1
                },1000,'linear',function(){
                  $('.section2').find('.e4').animate({
                      opacity: 1
                  },1000,'linear')
                }
                );
               
            }
        }
    });
});