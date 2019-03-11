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
                    // 沙发两个字显示
                  $('.section2').find('.e4').animate({
                      opacity: 1
                  },800,'linear',function(){
                    //搜索框原图隐藏
                    $('.section2').find('.e3').hide();
                    //搜索框的替代图片显示且移动到右上角
                    $('.section2').find('.e5').show().animate({
                        marginLeft:"110px",
                        bottom:"450px",
                        height: "30px"
                    },400,"linear");
                    // 让八个沙发图显示出来
                    $('.section2').find('.e6').animate({
                        height:"218px"
                    },1000)
                    // 同时让顶部白色的字显示出来
                    $('.section2').find('.e2').animate({
                        // 注意  show()和hide()方法只能更改display属性,不能应用于opactity
                        opacity:'1',
                    })
                  })
                }
                );
               
            }
            if(nextIndex == 3 && direction == "down"){
                // 棕色沙发显示并且移动 下滑到第三屏
                $('.section2').find('.e7').show().animate({
                //   下滑到指定位置
                  bottom: -$(window).height()+250,
                  marginLeft:-295,
                //   高度变化
                  height:166
                },1000,'linear',function(){
                    // 让第三屏选中状态展示 且并集选择器 
                  $('.section3').find('.e3, .e5').animate({
                      opacity:1
                  },600)
                })
                $('.section2').find('.e8').show()
            }
        }
    });
});