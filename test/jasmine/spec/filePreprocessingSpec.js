/// 파일을 읽어오고 읽어온 파일을 전처리하여 json으로 변환
var reader; // reader 개체
var test_file_path; // test용 파일 경로
var test_file_rows = 5176; // test용 파일에서 생성시 데이터 갯수

describe("call reader", function () {
    beforeEach(function () {
        reader = Reader();
    });
    it("and read file", function () {
        reader.Read(test_file_path);
        expect(typeof reader.rawdata != "undefined").toBe(true);
    });
    // TODO: 텍스트 파일 타입 구분, 대화방 내보내기에 따라 다름
});

describe("preprocessing", function(){
    function IsJsonString(str) {
        try {
            var json = JSON.parse(str);
            return (typeof json === 'object');
        } catch (e) {
            return false;
        }
    }      

    it("should return true", function(){
        expect(reader.preprocessing()).toBe(true);
    });
    it("and data type was json", function(){
        expect(IsJsonString(reader.data)).toBe(true);
    });
    it("and data has name, time, message columns", function(){
        expect(reader.data[0].hasOwnProperty("name")).toBe(true);
        expect(reader.data[0].hasOwnProperty("time")).toBe(true);
        expect(reader.data[0].hasOwnProperty("message")).toBe(true);
    });
    it("rows would be " + test_file_rows + " rows", function(){
        expect(reader.data.count == test_file_rows).toBe(true);
    });
});