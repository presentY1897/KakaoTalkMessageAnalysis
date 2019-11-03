// drag and drop test 
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
var area_tag = document.querySelector('#area')

var debug_var;

function matchAll(str, regex) {
    var result = [];
    var match;
    if (regex.global) {
        while (match = regex.exec(str)) {
            result.push(match);
        }
    } else {
        if (match = regex.exec(str)) {
            result.push(match);
        }
    }
    return result;
}


function parser(file_content) {
    // g: find all matches, m: multiline matching
    console.log('file checking');
    console.log(typeof(file_content));
    var regexDate = /^-{15} [a-zA-Z]{6,9}, ([a-zA-Z]+ \d{1,2}, 20\d{2}) -{15}(\r\n|\n)(((?!-{15}).*(\r\n|\n))*)/mg;
    var regexMessage = /^\[([^\].]+)\] \[(\d{1,2}:\d{1,2} (P|A)M)\] (((?!\[[^\].]+\] (\[\d{1,2}:\d{1,2} (P|A)M\])).*(\r\n|\n))+)/mg;
    result = {'objects': []};
    dateContents = matchAll(file_content, regexDate);
    dateContents.forEach(function (dateContent) {
        var content = {}
        content['date'] = dateContent[1];
        content['messages'] = [];
        messageContents = matchAll(dateContent[3], regexMessage);
        messageContents.forEach(function (messageContent) {
            var data = {};
            data['name'] = messageContent[1];
            data['time'] = messageContent[2];
            data['message'] = messageContent[4];
            content['messages'].push(data);
        });
        result['objects'].push(content);
    });
    console.log(result);
}

dropHandler = function (e) {
    console.log("check drop start");
    e.preventDefault();

    var files = e.dataTransfer.files;
    var reader = new FileReader();

    // setting file encoding
    for (i = 0; i < files.length; i++) {
        var file = files[i];
        if (fileCheck(file)) {
            // reader.readAsText(file, "euc-kr");
            reader.readAsText(file, "UTF-8");
        }
    }

    reader.onload = function () {
        file_check = reader.result;
        parser(file_check);
        // var lines = file_check.split('\n');
        // var n = lines.length,
        //     talkingData = [];

        // lines.forEach(line => {
        //     var cell = line.split(' ');
        //     if (cell.length > 5 )//&& dateCheck(makeDate(cell))) // TODO check clearly not message line
        //         talkingData.push({ // TODO too long message check, and exit message check
        //             name: cell[5],
        //             time: cell[0] + cell[1] + cell[2] + cell[3],
        //             message: cell[7]
        //         })
        //     //talkingData.push(new talkData(cell[5], cell[0] + cell[1] + cell[2] + cell[3], cell[7]))
        // });

        // debug_var = talkingData;
        // var countTalks = d3.nest()
        //     .key(function (d) { return d.name; })
        //     .rollup(function (v) { return d3.sum(v, function (d) { return 1; }); })
        //     .entries(debug_var);


        // closeDragDropBox(e);
        // createCanvas(countTalks);
    }

    e.currentTarget.classList.remove('file_on');
    return true;
}

dragOverHandler = function (e) {
    console.log('File(s) in drop zone');
    e.currentTarget.classList.add('file_on')

    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
}

makeDate = function (cell) { // TODO Clear hard coding
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

// area_tag.addEventListener('dragenter', dragOverHandler);
area_tag.addEventListener('dragover', dragOverHandler);
area_tag.addEventListener('dragleave', function (e) {
    e.currentTarget.classList.remove('file_on');
})
area_tag.addEventListener('drop', dropHandler)