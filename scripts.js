function darken() {
    $(this).addClass('dark');
}
function lighten() {
    $(this).removeClass('dark');
}

$(document).ready(function() {
    $('#links a.link').mouseover(darken);
    $('#links a.link').mouseout(lighten);
    $('.resources a').mouseover(darken);
    $('.resources a').mouseout(lighten);
})
