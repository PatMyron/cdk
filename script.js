function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

function run() {
    input = editor['input'].getValue();
    output = eval(input);
    console.log(output)
    editor['output'].setValue(output);
}

var editor = [];
Array.from(document.getElementsByTagName('textarea')).forEach((element) => {
    editor[element.id] = CodeMirror.fromTextArea(element, {
        lineNumbers: true,
        theme: 'darcula',
    });
});
if (param('input')) {
    $.get(param('input'), function (text) {
        editor['input'].setValue(text);
        run();
    });
}