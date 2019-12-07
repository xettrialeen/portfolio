setTimeout(() => {
    $("#loader").fadeToggle();
}, 3000);

$(document).ready(function() {
    // these will be for a loaders
    // $(".about").click(function(e) {
    //     e.preventDefault();
    //     $("#loader").fadeIn(0);
    //     $("#loader").fadeOut(1000);
    // });

    // $(".projects").click(function(e) {
    //     e.preventDefault();
    //     $("#loader").fadeIn(0);
    //     $("#loader").fadeOut(1000);
    // });

    // $(".knowledge").click(function(e) {
    //     e.preventDefault();
    //     $("#loader").fadeIn(0);
    //     $("#loader").fadeOut(1000);
    // });

    // $(".contact").click(function(e) {
    //     e.preventDefault(0);
    //     $("#loader").fadeIn();
    //     $("#loader").fadeOut(1000);
    // });
    // end of loaders

    // contact-form
    // $("#email").click(function(e) {
    //     e.preventDefault();
    //     $(this.show).css(
    //         "background-image",
    //         "linear-gradient(-90deg, #ffbd6f, #ff676c)"
    //     );
    // });
    // //

    // this are for tabs created by xettri aleen
    $(".first").hide();
    $(".second").hide();
    $(".third").hide();

    // this is tab bar
    $(".about").click(function(e) {
        $(".active").show();
        $(".first").hide();
        $(".second").hide();
        $(".third").hide();
    });
    $(".knowledge").click(function(e) {
        $(".first").show();
        $(".active").hide();
        $(".second").hide();
        $(".third").hide();
    });
    $(".projects").click(function(e) {
        $(".second").show();
        $(".active").hide();
        $(".first").hide();
        $(".third").hide();
    });
    $(".contact").click(function(e) {
        $(".third").show();
        $(".active").hide();
        $(".first").hide();
        $(".second").hide();
    });

    // $("li").hover(
    //     function() {
    //         // over
    //         $("span").css("color", "#BFC9CE");
    //     },
    //     function() {
    //         // out
    //         $("span").css("color", "#000000");
    //     }
    // );
    // $("li").mousehover(function(e) {
    //     e.preventDefault();
    //     $(this).animate({ left: "250px" });
    // });
    // $("li").mouseleave(function() {
    //     $("span").css("color", "#000000");
    // });
});