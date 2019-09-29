// drag and drop test 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
var debug_var;
dropHandler = function (e) {
    console.log("check drop start");

    e.preventDefault();

    var files = e.dataTransfer.files;
    var reader = reader();
    var analyzer = analyzer();
    var viewer = viewer();

    viewer.tableIn(analyzer.dataIn(reader.fileIn(files)));
    viewer.style(function(){
        
    })
    viewer.bind(document.getElementById("viewer_area"));
    return true;
}

dragOverHandler = function (ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}