let faqs = document.querySelectorAll('.faq-content');
let answers = document.querySelectorAll('.answer');
let arrows = document.querySelectorAll('.arrow');
console.log(faqs, answers);

for (let i = 0; i < faqs.length; i++) {

    faqs[i].addEventListener("click", () => {

        for (let j = 0; j < answers.length; j++) {
            if (i == j) {

                answers[j].style.display = answers[j].style.display == "block" ? "none" : "block";
                arrows[j] = answers[j].style.display == "block" ? arrows[j].style.rotate = '180deg' : arrows[j].style.rotate = '0deg';
            }
            else {
                answers[j].style.display = "none";
                arrows[j].style.rotate = '0deg';
            }
        }
    });
}

