function changeColor() {
    let $body = $("#htmlBody");
    let $spans = $body.children("span");

    for(let i = 0; i < $spans.length; i++) {
        let $span = $($spans.get(i));
        $span.toggleClass("spanClass");
    }

    if($body.hasClass("bodyStyleGrey")) {
        $body.removeClass("bodyStyleGrey");
        $body.addClass("bodyStyleYellow");
    } else {
        $body.removeClass("bodyStyleYellow");
        $body.addClass("bodyStyleGrey");
    }
}

$(document).ready(function() {
    alert("Hello World!");
});