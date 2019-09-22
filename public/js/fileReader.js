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
            if (cell.length > 5 && dateCheck(makeDate(cell))) // TODO check clearly not message line
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

makeDate = function (cell) {
    if (cell.length > 4) {
        var year = cell[0],
            month = cell[1],
            day = cell[2],
            miltime = cell[3],
            hour = cell[4].split(":")[0],
            minute = cell[4].split(":")[1].split(","),
            _date = new Date(year, month, day, hour, minute);
        if (miltime == '오전') {
            return _date;
        } else {
            return _date.setHours(hour + 12);
        }

    }
    return false;
}

dateCheck = function (_date) {
    // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
    if (!(_date instanceof Date && !isNaN(_date)))
        return false;
    return true;
}

fileCheck = function () {
    return true; // TODO check function
}

closeDragDropBox = function (div) {
    //  div.target.hidden = true;
    div.target.style.display = "none";
}

createCanvas = function (data) {
    var svg = d3.select("body").append("svg")
        .attr("width", "100%")
        .attr("height", "100%"),
        bar_width = 20; // TODO relative
    bar_height = 10;

    svg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function (d) { return ((data.findIndex(function (e) { return e == d }) + 1) * bar_width + 2) })
        .attr("width", bar_width)
        .attr("y", "0px")
        .attr("height", function (d) { console.log(d.value); return d.value; });
}