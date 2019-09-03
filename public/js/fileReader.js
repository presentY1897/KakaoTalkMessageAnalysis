// drag and drop test 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
dropHandler = function (e) {
    console.log("check drop start");

    e.preventDefault();

    var files = e.dataTransfer.files,
        reader = new FileReader(),
        l = files.item.length;

    reader.onload = function(){
        file_check = reader.result;
        var lines = file_check.split('\n');
        var n = lines.size();

        lines.forEach(line => {
            var cell = line.split(' ');
        });
    }

    for (i = 0; i < l; i++) {
        var file = files[i];
        if (fileCheck(file)) {
            reader.readAsText(file, "euc-kr");
        }
    }
    return true;
}

dragOverHandler = function (ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

fileCheck = function () {
    return true;
}

processFile = function(file){
    var reader = new FileReader();

    reader.onload
}