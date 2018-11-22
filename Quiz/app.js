const quiz = [
	{
		question: "Which genre of Games do you Play?",
		answers: [
			{ src: "images/horror.jpg", score: 1 },
			{ src: "images/platformer.jpg", score: -1 },
			{ src: "images/fps.jpg", score: 2 },
		] 
	}, 
	{
		question: "What System Do you Play On?",
		answers: [
			{ src: "images/ps4.jpg", score: 1 }, 
			{ src: "images/xbox.jpg", score: 1 }, 
			{ src: "images/pc.jpg", score: 2 }, 
		]
	},
    {
		question: "What Your Audio Preference?",
		answers: [
			{ src: "images/tvp2.jpg", score: -2 }, 
			{ src: "images/surround.jpg", score: 1 }, 
			{ src: "images/headset.jpg", score: 2 }, 
		]
	},
	{
		question: "How Many Hours do you Play a Week?",
		answers: [
			{ src: "images/3hr.jpg", score: -2 }, 
			{ src: "images/10hr.jpg", score: 1 }, 
			{ src: "images/72hr.jpg", score: 2 }, 
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
		
		img.onclick = function() {
			q.score = a.score;
		};
	}
	
	container.appendChild(questionDiv);
}





const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += quiz[i].score;
	}
	const response = document.getElementById('response');
	if (score > 0) {
		response.textContent = "You are a Pro Gamer";
	} else {
		response.textContent = "You are a Casual Gamer";
	}
};