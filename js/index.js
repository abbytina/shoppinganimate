$(function () {
  $('#fullpage').fullpage({
    // 内容不要垂直居中
    verticalCentered: false,
    // 显示右侧导航
    navigation: true,
    // 滚动到某一屏幕后触发执行
    afterLoad: function (linkName, index) {
      // 到了第二屏时执行
      if (index == 2) {
        $(".s2_search_empty").animate({
          right: "50%",
          marginRight: "-111px",
        }, 1000, function () {
          $(".s2_sf_font").fadeIn(1000, function () {
            $(".s2_search_empty,.s2_sf_font").hide();
            $(".s2_search_full").show().animate({
              bottom: "451px",
              left: "63%",
              height: "30px"
            }, 1000);

            // 带有多个沙发的图片动画
            $(".s2_sfs").show().animate({
              width: 441
            }, 1000);

            // 文字提示
            $(".s2_title1").fadeOut(1000);
            $(".s2_title2").fadeIn(1000);

          });
        });
      }


      if(index == 5){
        // 1 手在动
        $(".s5_hand").animate( {
          bottom: -32
          },1000,function () {  
            // 2 鼠标切换
            $(".s5_mouse").hide();
            $(".s5_mouse02").show();
            // 3 沙发移动
            $(".s5_sf").animate({
               bottom: "15%",
            },1000,function () {
              // 4 账单显示
              $(".s5_bill").animate({
                bottom: "63%",
              },1000,function () { 
                $(".s5_title1").addClass("s5_title_rotate");
               })
              });
          });
      }
      if(index == 7){
        // 星星显示的动画
        $(".s7_star").animate({
          width: 102
        },1000,function () { 
          // 好评显示
          $(".s7_good_comment").fadeIn(1000);
         });
      }
      if(index == 8){
        // 绑定鼠标移动事件
        $(document.body).on("mousemove",function (e) {
          // console.log(e);
          var clientX = e.clientX;
          var clientY = e.clientY;

          var hand_top = clientY + 10;
          // 移动的最大的高度
          var maxTop = $(".s8").height() - 485;
          if(hand_top < maxTop){
             hand_top = maxTop;
          }

          var distance = $(".section_content").offset().left;

          $(".s8_hand").css({
               // 68 是手的图片 的最左边距离 食指的距离
               left: clientX - distance - 58,
               top: hand_top
            }
          );
        })
        // 再来一次的按钮
        $(".s8_again").click(function () {
            // 跳回第一屏
            $.fn.fullpage.moveTo(1);
            // 让动画从头再来一遍 .section * 选择全部
            // 重置动画的本质 去掉 标签的style 样式 
            $(".section *").attr("style","");
            // 设置第六屏背景的移动
            $(".s6").css({
              backgroundPositionX:"25%"
            });
            
          });
      }

    },

    // 一离开就触发
    onLeave: function (index, nextIndex, direction) {
      // alert(1);
      if (index == 2 && nextIndex == 3) {
        // 离开了第二屏，到了第三屏
        // 白色的遮罩层显示
        $(".s2_wrap").show();
        // 沙发动画
        $(".s3_sf").show().animate({
          bottom: "34%",
          left: "26%",
          width: 207
        }, 1000, function () {
          $(".s3_black_size,.s3_black_car").fadeOut(1000);
          $(".s3_white_size,.s3_white_car").fadeIn(1000);
        });
      }

      // 离开了第三屏，到了第四屏
      if (index == 3 && nextIndex == 4) {
        // 获取屏幕的高度
        var height = $(".s4").height();
        // console.log(height);
        // console.log($(".s4_qx_sf").css("bottom"));
        var ownBottom = parseInt($(".s4_qx_sf").css("bottom"));
        // console.log($(".s4_qx_sf").height());
        // var ownBottom = $(".s4_qx_sf").height(); 
        var bottom = ownBottom + height + 400;
        // // 倾斜沙发
        $(".s4_qx_sf").css({
          bottom:bottom,
          left:-38
        });

        // 隐藏 s3 的沙发
        $(".s3_sf").hide();
        // 给倾斜沙发设置动画 ,进去到购物车中
        $(".s4_qx_sf").animate({
          bottom:190,
          left:136
        },1000,function () {
          var x = $(".s4_full_car").offset().left;
          // console.log(x);
          var leftMargin = $(".s4").width()-x;
          // 车和沙发一起移动 ,用一个大的div包着
          $(".s4_full_car").animate({
            marginLeft:leftMargin,
          },2000,"easeInOutElastic",function() { 
            $(".s4_title1").hide(1000);
            $(".s4_title2").show(1000);
            $(".s4_adress").show(1000);
           });
        });
      }
      if(index == 5 && nextIndex == 6){
        // 第五屏的沙发隐藏
        $(".s5_sf").hide();
        // 箱子移动
        $(".s6_box").animate({
          left:"25%"
        },1000);
        // 第六屏的沙发移动
        $(".s6_sf_move").animate({
          left:"28%",
          bottom:"72%",
          width:50
        },2000,function () {
          // 箱子掉下来，沙发隐藏
          $(".s6_sf_move").hide();
          $(".s6_box").animate({
            bottom:"4%"
          },1000,function () { 
            // 文字提示显示
            $(".s6_title1").animate({
              left:"25%"
            },1000);
            // 门牌号显示
            $(".s6_zy88").show();
            // 车子走动 , 其实是背景图移动
            $(".s6").animate({
               // 背景位置的设置, 要有backgroundPositionX 或者backgroundPositionY
               backgroundPositionX:"100%"
            },2000,function () {
              // 快递员变大了
              $(".s6_boys").animate({
                left: "27%",
                bottom: "15%",
                width: 252
              },1000,function () {
                // 快递员往右移
                $(".s6_boys").animate({
                  left:"46%"
                },1000,function () {
                  // 门打开
                  $(".s6_door").show();
                  // 女孩出来领快递
                  $(".s6_girl").show().animate({
                    width: 87,
                    right: 360
                  },1000,function () {
                    // 提示牌显示
                    $(".s6_recive").fadeIn(1000);
                  });
                })
              });
            });
           })
          });
      }
    }
  });

  // 往下更多精彩 图片按钮 只绑定一次 
  $(".nextSection").click(function () {
     // 下一屏跳转
     $.fn.fullpage.moveSectionDown();
  })

});