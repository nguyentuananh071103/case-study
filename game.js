let images = [
    "bahoa.png",
    "baothuc.png",
    "huanhoahong.jpg",
    "khabanh.jpg",
    "coloa.png",
    "xemtuong.png",
    "noigian.png",
    "kienthiet.png",
    "tranducbo.jpg",
    "xakep.png",

];
let answers = [
    "ba hoa",
    "báo thức",
    "huấn hoa hồng",
    "khá bảnh",
    "cổ loa",
    "xem tướng",
    "nội gián",
    "kiến thiết",
    "trần đức bo",
    "xà kép",

];
let timeCount ;
let message;
let timeID = setInterval(function (){
    document.getElementById('timeCountDown').innerHTML = timeCount +  "giây";
    timeCount--;
    countdown();
}, 1000);

function countdown(){
    if (timeCount<0){
        clearInterval(timeID);
        message = window.confirm('hết giờ rồi bạn ơi!!!');
        reload();
    }
}
// function showQuestion(question){
//     timeCount = 20;
// }

let ImageQuestion = function () {
    this.index = 0;
    this.increaseIndex = function () {
        if (this.index >= 0 && this.index < images.length - 1) {
            this.index++;
        } else {
            this.index = 0;
        }
    };
    this.setImage = function (src) {
        this.image = src;
    };
    this.getImage = function () {
        return this.image;
    };
    this.changeImage = function () {
        this.increaseIndex();
        console.log(this)
        this.setImage(images[this.index]);
        document.getElementById("img").src = 'musicandimg/img/' + this.getImage();
    }
};
let Answer = function () {
    this.setAnswer = function () {
        this.answer = document.getElementById("inp").value;
    };
    this.getAnswer = function () {
        return this.answer;
    };
    this.check = function () {
        this.setAnswer();
        if (this.answer === answers[image.index]) {
            alert("Chúc mừng, bạn đã trả lời đúng");
            image.changeImage();
            point.increasePoint();//tăng điểm
            point.getPoint();//lấy điểm
            point.getPointColor();//chỉnh màu
            point.resetPoint();//điểm
            document.getElementById("inp").value = null;
            if (image.index === 0) {
                alert("Bạn đã thắng cuộc");
                alert("Điểm của bạn là: 100")

            }
        } else if (this.answer === "") {
            alert("Bạn chưa nhập câu trả lời!");
        } else {
            alert("Sai rồi nhé, thử lại nào!!!");
            document.getElementById("inp").value = null;
        }
    }
};
let Point = function () {
    this.point = 0;
    this.increasePoint = function () {
        this.point += 10;
    };
    this.getPoint = function () {
        return document.getElementById("point").innerHTML = "Điểm của bạn: " + this.point;
    };
    this.getPointColor = function () {
        document.getElementById("point").style.color = "snow";
        document.getElementById("point").style.fontSize = "50px";
    };
    this.resetPoint = function () {
        if (image.index === 0) {
            this.point = 0;
            document.getElementById("point").innerHTML = "Điểm của bạn: ";
        }
    }
};
let image = new ImageQuestion();
let answer = new Answer();
let point = new Point();