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
                    "question": "Is the development team anonymous?",
                    "worksteps": "1 . Review project website to check if team is listed. / 2. List each member listed in box below.",
                    "example": "example",
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
                    "name": "Real Persons",
                    "type": "Open",
                    "question": "Can you verify that each member of the Development team is a real person?",
                    "worksteps": "A. List each person obtained in project website in box below. / B. If links to LinkedIn Github, or other websites are provided, click through each link and review the information to determine if it looks genuine. Genuine profiles would likely have a long history, several contacts, current information, recommended skills,  etc. / C. If no links are provided, you will need to manually search. Begin with Google for general information. Check Linkedin, Facebook, Instagram, Github, and twitter to see if you can locate a profile that matches each person. / D. Google each members names and see if you can find any profiles or information associated with them. Good sources to review are Linkedin, Facebook, Instagram, Github, and Twitter. / E.Use google image serch for each profile picture that was provided. Instructions for using Google search can be found here )https://support.google.com/websearch/answer/1325808). Ensure image is not a stock photo and can be traced to a matching social media platform. / F. For any profiles found using workstep D or E, perform the review from Workstep B. / G. Save links to supporting information in this workstep to support your review.  ",
                    "example": "example",
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