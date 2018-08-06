


$(function(){

    $("#big-box").load("abc.html")
    $("#small-box").load("123.html")



    //切换
    $(".menu").click(function() {

        $("#big-box").load($(this).data("page"))


    })


});