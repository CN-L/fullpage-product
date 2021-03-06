$(function () {
    // let promise = new Promise(function(resolve, reject){

    // });
    $('.section').data('flag', false);
    $('#dowebok').fullpage({
        "navigation": "true",
        "css3": "true",

        // fullpage插件提供的api
        onLeave(index, nextIndex, direction) {
            // 当下一屏为2且向下滑时
            if (nextIndex == 2 && direction == "down") {
                // false可以触发动画
                if ($('.section2').data('flag') == false) {
                    //上划后下滑 不再触发动画
                    $('.section2').data('flag', true)
                    // 搜索框动画,结束后显示"沙发"两个字,因为将"沙发"动画放在搜索框后
                    $('.section2').find('.e3').animate({
                        marginLeft: "-110",
                        opacity: 1
                    }, 1000, 'linear', function () {
                        // 沙发两个字显示
                        $('.section2').find('.e4').animate({
                            opacity: 1
                        }, 800, 'linear', function () {
                            //搜索框原图隐藏
                            $('.section2').find('.e3').hide();
                            //搜索框的替代图片显示且移动到右上角
                            $('.section2').find('.e5').show().animate({
                                marginLeft: "110px",
                                bottom: "450px",
                                height: "30px"
                            }, 400, "linear");
                            // 让八个沙发图显示出来
                            $('.section2').find('.e6').animate({
                                height: "218px"
                            }, 800)
                            // 同时让顶部白色的字显示出来
                            $('.section2').find('.e2').animate({
                                // 注意  show()和hide()方法只能更改display属性,不能应用于opactity
                                opacity: '1',
                            })
                        })
                    }
                    );
                }


            }
            //下滑为第三屏时
            if (nextIndex == 3 && direction == "down") {
                if ($('.section3').data('flag') == false) {
                    $('.section3').data('flag', true)
                    // 棕色沙发显示并且移动 下滑到第三屏
                    $('.section2').find('.e7').show().animate({
                        //   下滑到指定位置
                        bottom: -$(window).height() + 250,
                        marginLeft: -295,
                        //   高度变化
                        height: 166
                    }, 1000, 'linear', function () {
                        // 让第三屏选中状态展示 且并集选择器 
                        $('.section3').find('.e3, .e5').animate({
                            opacity: 1
                        }, 600)
                    })
                    $('.section2').find('.e8').show()
                }

            }
            // 第四屏
            if (nextIndex == 4 && direction == "down") {
                if ($('.section4').data('flag') == false) {
                    $('.section4').data('flag', true)
                    $('.section2').find('.e7').hide();
                    $('.section3').find('.sofa').show().animate({
                        bottom: -$(window).height() + 270,
                        marginLeft: "-50px"
                    }, 1000, "linear", function () {
                        // 让掉落的沙发隐藏 代替图片显示
                        $(this).hide();
                        $('.section4').find('.sofa').show();
                        // 小车飞出屏幕外
                        $('.section4').find('.e4').animate({
                            marginLeft: 999
                        }, 1000, "easeInExpo", function () {
                            // 地址显示
                            $('.section4').find('.e6').animate({
                                opacity: 1
                            }, 600, function () {
                                // 地址上文字显示
                                $('.section4').find('.e7').animate({
                                    opacity: 1,
                                }, 400)
                            })
                            // 提示文字显示
                            $('.section4').find('.e3').fadeIn()
                        })
                    })
                }

            }
            // 第五屏
            if (nextIndex == 5 && direction == "down") {
                if ($('.section5').data('flag') == false) {
                    $('.section5').data('flag', true)
                    $('.section5').find('.e3').animate({
                        bottom: 354
                    }, 1000)
                    $('.section5').find('.sofa').animate({
                        bottom: 90
                    }, 1000)
                    $('.section5').find('.e6').animate({
                        bottom: 0
                    }, 1000, function () {
                        $('.section5').find('.e5').show()
                    })
                }

            }
            // 第六屏
            if (nextIndex == 6 && direction == "down") {
                if ($('.section6').data('flag') == false) {
                    $('.section6').data('flag', true)
                    $('.section6').data('flag')
                    // 盒子运动接住沙发
                    $('.section6').find('.e1').animate({
                        opacity: 1,
                        marginLeft: -300
                    }, 1000)
                    // 沙发从上一屏掉到盒子里
                    $('.section5').find('.sofa').animate({
                        bottom: -$(window).height() + 390,
                        height: 80,
                        marginLeft: -280,
                    }, 1000, function () {
                        // 隐藏沙发
                        $(this).hide();
                        // 盒子开始掉进车里
                        $('.section6').find('.e1').animate({
                            bottom: 30
                        }, 500, function () {
                            //背景移动
                            $('.section6').animate({
                                backgroundPositionX: -1050
                            }, 1000, 'linear', function () {
                                //让送货提示的文字显示
                                $('.section6').find('.e2').animate({
                                    opacity: 1
                                })
                                //让送货地址显示
                                $('.section6').find('.e5').show()
                                //让送货人送货
                                $('.section6').find('.e6')
                                    .animate({
                                        height: 305
                                    })
                                    .animate({
                                        bottom: 112
                                    })
                                    .animate({
                                        marginLeft: 42
                                    }, function () {
                                        // 开门
                                        $('.section6').find('.e7').show()
                                        // 送货已经完成
                                        $('.section6').find('.e3').animate({
                                            opacity: 1
                                        })
                                        // 显示请收货
                                        $('.section6').find('.e9').show()
                                        // 女孩出现
                                        $('.section6').find('.e8').animate({
                                            height: 294
                                        }, 1000)
                                    })
                            })

                        })
                    })
                }

            }
            //第七屏
            if (nextIndex == 7 && direction == "down") {
                if ($('.section7').data('flag') == false) {
                    $('.section7').data('flag', true)
                    // 五星好评 delay延迟执行 毫秒为单位
                    $('.section7').find('.e1').delay(1000).animate({
                        width: 96,
                    }, 1000)
                    // 好评来袭
                    $('.section7').find('.e2').delay(1000).animate({
                        marginLeft: -280,
                        opacity: 1
                    }, 1000)
                }

            }
            //如果是第八屏，往下滑的动画会消失
            if(nextIndex == 8){
                $('.moveDown').hide()
            }else{
                $('.moveDown').show()//下一屏不为8，显示出来
            }
        }
    });
    // 鼠标移动 第八屏
    $('.section8').on('mousemove', function (e) {
        if ($('.section8').data('flag') == false) {
            $('.section58').data('flag', true)
            // 获取鼠标距离屏幕左侧和顶部的距离
            var pageX = e.pageX;//左侧
            var pageY = e.pageY;//顶部
            // 最大高度是浏览器窗口高度 - 自身高度
            //计算向上最大的移动范围
            var maxTop = $(window).height() - $('.hand').height();
            if (pageY < maxTop) {
                pageY = maxTop
            }
            $('.hand').css({
                left: pageX,
                top: pageY + 10
            })
        }

    })
     // 点击再来一次
     $('#align').on('click', function () {
        $('.section').stop();
        // 跳转第一屏
        $.fn.fullpage.moveTo(1);
        // 动画停止执行
        //开锁
        $('.section').data('flag', false)
        // 删除行内样式 以便动画重新执行
        $('.section img, .section div').attr('style', '');
        // 处理第六屏背景位置
        $('.section6').css('backgroundPositionX',-200)
        
    })
    $('.moveDown').on('click',function(){
        $.fn.fullpage.moveSectionDown() //继续往下滑 更多精彩
    })
});