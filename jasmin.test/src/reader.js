
function Reader() {

    this.fileIn = function (files) {

        return false;
    };

    return this;
};

Reader.prototype.checkTest = function () {
    return "hello";
};