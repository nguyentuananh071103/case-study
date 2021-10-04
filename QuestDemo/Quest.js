class Quest {
    constructor(imgUrl, answer) {
        this.imgUrl = imgUrl;
        this.answer = answer;
        this.point = 3;
        this.time = 20;
        this.hint = "Demo";
    }
    getHtml(){
        let html = `<img src="${this.imgUrl}" height="200px">`;
        return html;
    }
}