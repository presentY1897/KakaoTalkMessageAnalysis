// drag and drop test 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
var debug_var;
dropHandler = function (e) {
    console.log("check drop start");

    e.preventDefault();

    var files = e.dataTransfer.files,
        reader = new FileReader(),
        l = files.item.length;

    reader.onload = function () {
        file_check = reader.result;
        var lines = file_check.split('\n');
        var n = lines.length,
            talkingData = [];

        lines.forEach(line => {
            var cell = line.split(' ');
            if (cell.length > 5) // TODO check clearly not message line
                talkingData.push({ // TODO too long message check, and exit message check
                    name: cell[5],
                    time: cell[0] + cell[1] + cell[2] + cell[3],
                    message: cell[7]
                })
            //talkingData.push(new talkData(cell[5], cell[0] + cell[1] + cell[2] + cell[3], cell[7]))
        });

        debug_var = talkingData;
        var countTalks = d3.nest()
            .key(function (d) { return d.name; })
            .rollup(function (v) { return d3.sum(v, function (d) { return 1; }); })
            .entries(debug_var);


        closeDragDropBox(e);
        createCanvas(countTalks);
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

closeDragDropBox = function(div){
    //  div.target.hidden = true;
    div.target.style.display = "none";
}

createCanvas = function(data){
    var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%"),
    bar_width = 20; // TODO relative
    bar_height = 10;

    svg.selectAll("bar")
    .data(data)
    .enter().append("rect")
    .style("fill", "steelblue")
    .attr("x", function(d){ return ((data.findIndex(function(e){return e == d}) + 1) * bar_width + 2)})
    .attr("width",bar_width)
    .attr("y", "0px")
    .attr("height", function(d){ console.log(d.value); return d.value; });
}