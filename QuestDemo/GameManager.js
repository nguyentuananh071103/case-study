class GameManager {
    constructor() {
        this.quests = [];
        this.time = 0;
        this.score = 0;
        this.index = 0;
        this.limit = 10;
    }

    initQuest(questList){
        for (let i = 0; i < questList.length; i++) {
            let quest = new Quest(questList[i].imgUrl, questList[i].answer);
            quest.hint = questList[i].hint;
            this.quests.push(quest);
        }
    }

    shuffleQuest(){
        for (let i = 0; i < this.quests.length; i++) {
            let randIndex = Math.floor(Math.random()*this.quests.length);
            let temp = this.quests[randIndex];
            this.quests[randIndex] = this.quests[i];
            this.quests[i] = temp;
        }
    }
}

let questList = [
    {
        imgUrl:"bahoa.png",
        answer:"ba hoa",
        hint:"Nói nhiều"
    },
    {
        imgUrl:"baothuc.png",
        answer:"báo thức",
        hint: "Điều đầu tiên nghe thấy mỗi sáng"
    },
    {
        imgUrl:"cadao.png",
        answer:"ca dao",
        hint: "Các cụ có câu"
    }
]