// drag and drop test 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
dropHandler = function (e) {
    console.log("check drop start");

    e.preventDefault();

    var files = e.dataTransfer.files,
        reader = new FileReader();
    reader.onload = function (event) {
        console.log(event.target);
    }
    console.log('check');
    console.log(files)

    return true;
}

dragOverHandler = function(ev){
    console.log('File(s) in drop zone'); 
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }