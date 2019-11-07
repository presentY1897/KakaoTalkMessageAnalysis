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
    return result;
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
        var parseObj = parser(file_check);

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

dateCheck = function (_date) {
    // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
    if (!(_date instanceof Date && !isNaN(_date)))
        return false;
    return true;
}

fileCheck = function () {
    return true; // TODO check function
}

// area_tag.addEventListener('dragenter', dragOverHandler);
area_tag.addEventListener('dragover', dragOverHandler);
area_tag.addEventListener('dragleave', function (e) {
    e.currentTarget.classList.remove('file_on');
})
area_tag.addEventListener('drop', dropHandler)