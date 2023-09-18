const jokeElem = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
    const jokerq = new XMLHttpRequest();

    jokerq.open('GET', 'https://api.chucknorris.io/jokes/random');

    jokerq.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status=== 200)
            {
                jokeElem.innerHTML = /* 'I got yah!' */ JSON.parse(this.responseText).value;
            } else {
                jokeElem.innerHTML = 'Uh oh, something went wrong... (not funny) :<';
            }
        }
    };

    jokerq.send();
};

jokeBtn.addEventListener('click', generateJoke);