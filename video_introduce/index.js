$().ready(function(){
$(".tab-menu li").click(function(){
//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
var _index = $(this).index();
//获取视频的title和简介
var title = $(this).text();
var val_text = $(".video_show_introduce>div").eq(_index).text();
//让内容框的第 _index 个显示出来，其他的被隐藏
$(".tab-box>div").eq(_index).show().siblings().hide();
//改变选中时候的选项框的样式，移除其他几个选项的样式
$(this).addClass("change").siblings().removeClass("change");
//改变相应的标题
$(".video_con_title").text(title);
//改变相应的视频简介
$(".video_show_zj_zc").text(val_text);
});
});