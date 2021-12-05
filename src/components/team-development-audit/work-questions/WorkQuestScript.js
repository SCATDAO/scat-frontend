export default {
    data() {
        return {
            numberQuestion: [0, 0],
            questionList: [
                {
                    "number": 1,
                    "id": "TD1",
                    "category": "Team Development",
                    "name": "Anonymous",
                    "type": "Open",
                    "note": "If yes, please list all members of development team",
                    "example": "example",
                    "question": "Is the development team anonymous?",
                    "options": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "selected": false,
                    "answer": null,
                    "textarea": null,
                    "files": [],
                    "images": [],
                    "video": []
                },
                {
                    "number": 2,
                    "id": "TD2",
                    "category": "Team Development",
                    "name": "Real person",
                    "type": "Open",
                    "note": "To verify each member exists, please check LinkedIn profile for credentials and vouch against other social media outlets such as Facebook, Instagram , Twitter, etc. If the team member is a developer, do they have a github with some of their work submitted? then use google image search with their profile photo to see if it is a stock photo or it is their actual photo. ( running an official background check would be idea but with de multiple countries involved, there likely isn't a system that would work for everywhere)",
                    "example": "- Eric Helms:  https://www.linkedin.com/in/eric-helms-cpa-97866a3b",
                    "question": "Can you verify that each member of the development team is a real person?",
                    "options": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "selected": false,
                    "answer": null,
                    "textarea": null,
                    "files": [],
                    "images": [],
                    "video": []
                },
                {
                    "number": 3,
                    "id": "TD3",
                    "category": "Team Development",
                    "name": "Team history",
                    "type": "Open",
                    "note": "Please list the projects, perform a comprehensive review of any news or information available about them, and not if any of them has done anything unethical.",
                    "example": "",
                    "question": "Has the dev team worked on any other projects in the past?",
                    "options": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "selected": false,
                    "answer": null,
                    "textarea": null,
                    "files": [],
                    "images": [],
                    "video": []
                }
            ],
            currentQuestion: [],
            answeredQuestion: []
        }
    },
    created() {
        this.numberQuestion[1] = this.questionList.length;
        this.answeredQuestion = this.questionList;
        this.addCurrentQuestion();
    },
    methods: {
        addCurrentQuestion() {
            this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
        },
        addAnswerQuestion(option) {
            this.currentQuestion[0].answer = option;
        },
        nextAnswerQuestion() {
            if (this.currentQuestion != null) {
                this.answeredQuestion[this.numberQuestion[0]] = (this.currentQuestion.pop());
                this.numberQuestion[0] += 1;
                this.addCurrentQuestion();
            }
            else {
                this.currentQuestion = [];
                this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
            }
        },
        backAnswerQuestion() {
            this.currentQuestion = [];
            this.numberQuestion[0] -= 1;
            this.currentQuestion.push(this.answeredQuestion[this.numberQuestion[0]]);
        }
    }
}