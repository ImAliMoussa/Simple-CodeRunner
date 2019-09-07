const EditSession = require("ace/edit_session").EditSession;
const htmlSession = new EditSession("");
htmlSession.setMode("ace/mode/html");

const cssSession = new EditSession("");
cssSession.setMode("ace/mode/css");

const jsSession = new EditSession("");
jsSession.setMode("ace/mode/javascript");

const editor = ace.edit("code-editor");
document.getElementById('code-editor').style.fontSize='17px';

editor.setTheme("ace/theme/monokai");

$(".tab-button").click(
    function(){
        changeMode($(this).attr("value"));
        console.log($(this).attr("value"));
        $("a").removeClass("selected");
        $(this).addClass("selected");
    }
);

function run(){
    const htmlCode = htmlSession.getValue();
    const cssCode = "<style>" + cssSession.getValue() + "</style>";
    const jsCode = "<script>" + jsSession.getValue() + "</script>";

    const newCode = htmlCode + cssCode + jsCode;
    $("#out-div").html(newCode);
}

function changeMode(mode) {
    
    if (mode === "html"){
        editor.setSession(htmlSession);
    } else if (mode === "css"){
        editor.setSession(cssSession);
    } else if (mode === "javascript"){
        editor.setSession(jsSession);
    } else {
        console.log("a7a");
    }
}

$("#code-editor").resizable();
$("#code-editor").resize(function(){
    $("#out-div").width($("#editor-parent").width()-$("#code-editor").width());
    $("#out-div").height($("#code-editor").height());
});

$(window).resize(function(){
    $('#out-div').width($("#editor-parent").width()-$("#code-editor").width()); 

 });

$("#html-button").click();