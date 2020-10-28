import papaparse from 'papaparse';

class Person {
    name = '';
}

class ChatDataChunk {
    person = new Person();
    time = undefined;
    text = null;
    type = null;
}

class Analyzer {
    resultData = []; 

    analyzingRawText(raw){
        const _result = papaparse.parse(raw);
        console.log(_result);
    }
}

export default Analyzer;