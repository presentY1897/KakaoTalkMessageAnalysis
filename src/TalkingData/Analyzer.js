import papaparse from 'papaparse';

class Person {
    name = '';
    inTime = null;
    outTime = null;
}

class ChatDataChunk {
    person = new Person();
    time = undefined;
    text = null;
    type = null;
}

class Analyzer {
    resultData = [];
    personList = [];

    findPerson(name) {
        const personFinded = this.personList.find(person => person.name === name)
        if (personFinded !== undefined) {
            return personFinded;
        } else {
            const newPerson = new Person();
            newPerson.name = name;
            this.personList.push(newPerson);
            return newPerson;
        }
    }

    analyzingRawCsv(raw) {
        const csvParse = papaparse.parse(raw);
        const removeHead = csvParse.data.slice(1, csvParse.data.length);
        this.personList = [];
        const chunks = removeHead.map(line => {
            const chunk = new ChatDataChunk();
            chunk.time = line[0];
            const person = this.findPerson(line[1]);
            chunk.person = person;
            chunk.text = line[2];
            return chunk;
        });
        return chunks;
    }

    analyzingRawText(text) {
        const windowPcTypeAnalyzer = (text) => {
            const rawDeleteRN = text.replace('/r/n', '/n');
            const rawDeleteR = rawDeleteRN.replace('/r', '/n');
            const lines = rawDeleteR.split('/n');

            const divideByType = lines.filter((l, idx) => idx > 2)
                .map(line => {
                    if (line.indexOf('---------------') === 0) { // 날짜 변경 나중에 정교하게 변경
                        return { type: 'date', data: line };
                    } else if (line.indexOf('[') === 0) { // 대화
                        return { type: 'chat', data: line };
                    } else { // 나갔거나 대화의 연속
                        if (line.indexOf('나갔습니다.') > -1) {
                            return { type: 'out', data: line };
                        } else if (line.indexOf('들어왔습니다.') > -1) {
                            return { type: 'in', data: line };
                        }
                        return { type: 'someofchat', data: line };
                    }
                });
            let prevChat;
            let currentTime;
            const groupingChat = divideByType.map(chunk => {
                const type = chunk.type;
                if (type === 'date') {
                    const time = new Date(chunk.data.replace('---------------', ''));
                    currentTime = time;
                } else if (type === 'chat') {
                    const name = chunk.data.split(']')[0].replace('[', '');
                    const chatTime = currentTime + chunk.data.split(']')[1].replace('[', ''); //여기 수정
                    const line = chunk.data.split(']').filter((i, idx) => idx > 1).join(']');
                    const data = new ChatDataChunk();
                    chunk.time = chatTime;
                    chunk.text = line;
                    const person = this.findPerson(name);
                    chunk.person = person;
                    prevChat = data;
                    return data;
                } else if (type === 'someofchat') {
                    prevChat.text = prevChat.text + '\n' + chunk.data;
                } else if (type === 'out' || type === 'in') {
                    // 대충 이름 구하는 부분
                    const person = this.findPerson(name);
                    person.inTime =
                }
            });
        }
    }
}

export default Analyzer;