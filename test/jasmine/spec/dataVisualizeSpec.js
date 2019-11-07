/// 데이터 시각화 테스트
var visualizer;
var test_vis_data; // 테스트용 json 데이터

describe("call visualizer", function () {
    beforeEach(function () {
        test_vis_data = fs.readFile();
    });
    it("get data", function(){
        // visualizer = Sculpture(reader.data);
        visualizer = Sculpture(test_vis_data);
    });
    it("visualize A", function () {
        expect(visualizer.Sculpt("name", "time")); // TODO:
    });
    it("visualize B", function () {
        expect(visualizer.Sculpt("name", "message", "time")); // TODO:
    });
});