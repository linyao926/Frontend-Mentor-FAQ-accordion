const questionList = document.querySelectorAll(".question");
const answerList = document.querySelectorAll(".answer");

const handleExpandClick = (e) => {
    const temp = e.target.parentNode;
    if (temp.classList.contains("question-box")) {
        return;
    } else {
        const parent = temp.parentNode;
        parent.querySelector(".question-icon").classList.toggle("expand");
        parent.querySelector(".answer").classList.toggle("expand");
    }
};

questionList.forEach(question => question.addEventListener("click", handleExpandClick))