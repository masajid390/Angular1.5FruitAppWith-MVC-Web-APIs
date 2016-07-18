var Index = (function () {
    function Index(element) {
        this.element = element;
        this.element.innerHTML += "Time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerHTML = new Date().toUTCString();
    }
    Index.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 100);
    };
    Index.prototype.stop = function () {
        clearInterval(this.timerToken);
    };
    return Index;
})();
window.onload = function () {
    var element = document.getElementById("content");
    var index = new Index(element);
    index.start();
    var btnStop = document.getElementById('btnStop');
    btnStop.onclick = function () {
        index.stop();
    };
};
