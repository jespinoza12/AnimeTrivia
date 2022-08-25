
cate = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
diff = ['easy', 'medium', 'hard'];

shuffle(cate)
shuffle(diff)
url = 'https://opentdb.com/api.php?amount=10&category=' + 31 + '&difficulty=' + diff[2] + '&type=multiple';

let data;

points = 0;

q = 0;

function shuffle(a1) {
    var c = a1.length, temp, randIndex;
    while (c > 0) {
        randIndex = Math.floor(Math.random() * c);
        c--;
        temp = a1[c];
        a1[c] = a1[randIndex];
        a1[randIndex] = temp;
    }
    return a1;
}

var score = document.getElementById('score');

const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');


const main = () => {
    if (q == 0) {
        score.innerHTML = "Score: 0";
    }
    if (q >= 10) {
        score.innerHTML = "Final Score: " + points + " out of 10. Refresh the page and Play Again!";
        return;
    }
    console.log(data);
    question.innerHTML = data.results[q].question;
    for(let i = 0; i < 10; i++) {

         potentialAnswers = [
            [data.results[q].correct_answer, true],
            [data.results[q].incorrect_answers[0], false],
            [data.results[q].incorrect_answers[1], false],
            [data.results[q].incorrect_answers[2], false]
        ]
        shuffle(potentialAnswers)
        question.innerHTML = data.results[q].question;
        btn1.innerHTML = potentialAnswers[0][0];
        btn2.innerHTML = potentialAnswers[1][0];
        btn3.innerHTML = potentialAnswers[2][0];
        btn4.innerHTML = potentialAnswers[3][0];
        
}
};

    

// [
//     [a,true]
//     [b,false]
//     [c,false]
//     [d,false]
// ]

fetch(url)
    .then(response => response.json())
    .then(promise_data => {
        data = promise_data;
        main();
    });

    const handleClick = evt => {
        if (evt.target.id == 'btn1' && potentialAnswers[0][1]) {
            points += 1;
            score.innerHTML = "Correct! Score: " + points;
            q += 1;
            main();
        }  else if (evt.target.id == 'btn2' && potentialAnswers[1][1]) {points += 1;
            score.innerHTML = "Correct! Score: " + points;
            q += 1;
            main();
            
        } else if (evt.target.id == 'btn3' && potentialAnswers[2][1]) {points += 1;
            score.innerHTML = "Correct! Score: " + points;
            q += 1;
            main();

        } else if (evt.target.id == 'btn4' && potentialAnswers[3][1]) {points += 1;
            score.innerHTML = "Correct! Score: " + points;
            q += 1;
            main();

        }
        else {
            points += 0;
            score.innerHTML = "Incorrect! Score: " + points;
            q += 1;
            main();
        }
        console.log(evt.target.id);
    };

    
    


    btn1.addEventListener('click', handleClick);
    btn2.addEventListener('click', handleClick);
    btn3.addEventListener('click', handleClick);
    btn4.addEventListener('click', handleClick);

