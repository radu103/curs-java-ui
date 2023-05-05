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
        $body.addClass("bodyStyleGrey");
        $body.removeClass("bodyStyleYellow");
    }
}
    // document.body.className = (document.body.className === "bodyStyleGrey") ? "bodyStyleYellow" : "bodyStyleGrey";


$(document).ready(function() {
    alert("Hello World");
});

$('#changeColorBtn').click(changeColor);