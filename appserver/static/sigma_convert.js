require([
'jquery',
'underscore',
'splunkjs/mvc',
],
function(
$,
_,
mvc
) {

var tokens = mvc.Components.getInstance("default");

$(document).on('click', "#convert", function (){
        arg =  $(".file-path").val() == '' ? alert("Please enter file/folder path") :  $(".file-path").val()
        tokens.set("form.args", arg)
    });
});
