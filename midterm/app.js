// gifs div 
const gifs = document.getElementById('gifs');

const key = "2MACBWIkzZteDHAMTJRqDrs3ZDEkNcmR";
const quiz = [
    {
        question: "Who Do You Prefer To Send Your Holiday With?",
        answers: [
            {
                src: "images/friends.jpg",
                score: 2
            },
            {
                src: "images/spouse.jpg",
                score: -1
            },
            {
                src: "images/family.jpg",
                score: 2
            },
		]
	},
    {
        question: "What Is Your Choice Holiday Meal?",
        answers: [
            {
                src: "images/dinner.jpg",
                score: 2
            },
            {
                src: "images/snacks.jpg",
                score: 2
            },
            {
                src: "images/intimate.jpg",
                score: -1
            },
		]
	},
    {
        question: "What gifts do you prefer giving to others?",
        answers: [
            {
                src: "images/money.jpg",
                score: 1
            },
            {
                src: "images/food.jpg",
                score: 2
            },
            {
                src: "images/gifts.jpg",
                score: -1
            },
		]
	},
    {
        question: "What is Your Favorite Part Of the Holidays?",
        answers: [
            {
                src: "images/family2.jpg",
                score: 2
            },
            {
                src: "images/presents.jpg",
                score: 1
            },
            {
                src: "images/bar.jpg",
                score: -1
            },
		]
	},








];

const container = document.getElementById('quiz');


for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];


    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');


    const p = document.createElement('p');
    p.textContent = q.question;
    questionDiv.appendChild(p);



    const options = document.createElement('div');
    options.classList.add('options');
    questionDiv.appendChild(options);


    for (let j = 0; j < q.answers.length; j++) {
        const a = q.answers[j];
        const img = new Image();
        img.src = a.src;
        options.appendChild(img);

        img.onclick = function () {
            q.score = a.score;
            img.style.border = "5px solid black";
            img.style.borderImageWidth = "10px";
            img.style. = "1px";
        };
    }

    container.appendChild(questionDiv);
}

function addGif(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${tag}&rating=g&api_key=${key}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const img = new Image();
            img.src = json.data.images.downsized.url;
            gifs.appendChild(img);

            img.addEventListener('click', function (event) {
                this.remove();
                addGif(tag);
            });

        })
        .catch(function (error) {
            console.log('error', error);
        });
}



const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function () {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        score += quiz[i].score;
    }
    const response = document.getElementById('response');
    if (score > 6) {
        response.textContent = "Thanksgiving";
        addGif("Thanksgiving");
    } else if (score >= 5) {
        response.textContent = "Christmas";
        addGif("Christmas");
    } else if (score >= 2) {
        response.textContent = "Birthday";
        addGif("Birthday");
    } else if (score >= -4) {
        response.textContent = "Valentines Day";
        addGif("Valentines Day");
    }

};