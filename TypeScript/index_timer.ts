class Index {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "Time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerHTML = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 100);
    }

    stop() {
        clearInterval(this.timerToken);
    }
}

window.onload = () => {

    var element = document.getElementById("content");
    var index = new Index(element);
    index.start();

    var btnStop = document.getElementById('btnStop');
    btnStop.onclick = () => {
        index.stop();
    }
}