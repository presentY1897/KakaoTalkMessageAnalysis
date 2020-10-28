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
    personList = [];

    findPerson(name){
        const personFinded = this.personList.find(person => person.name === name)
        if(personFinded !== undefined){
            return personFinded;
        } else {
            const newPerson = new Person();
            newPerson.name = name;
            this.personList.push(newPerson);
            return newPerson;
        }
    }

    analyzingRawText(raw){
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
}

export default Analyzer;