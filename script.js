let images = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"];
let btn = document.getElementById('btn');
let dice = Array.from(document.getElementsByTagName('img'));
console.log(btn);
console.log(dice);
btn.addEventListener('click',
    (e) => {
        dice.forEach((die) => {
            die.setAttribute('class', 'shake');
        })
        let timerId = setInterval(() => {
            let die1 = Math.floor((Math.random()) * 6);
            let die2 = Math.floor((Math.random()) * 6);
            console.log(die1, die2);

            let text = document.querySelector('.text');
            let sum = (die1 + die2 + 2);
            if (sum < 10) {
                text.innerHTML = 'Your roll is 0' + sum;
            }
            else {
                text.innerHTML = 'Your roll is ' + sum;
            }

            document.getElementById('die-1').setAttribute('src', images[die1]);
            document.getElementById('die-2').setAttribute('src', images[die2]);
        }, 10);

        setTimeout(() => {

            dice.forEach((die) => {
                die.removeAttribute('class', "shake");
            })
            clearInterval(timerId)
        }, 1000);

    });

