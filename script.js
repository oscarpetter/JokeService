function onLoad() {
    addJoke()
}

window.addEventListener('load', () => {
    onLoad()
})

let random = document.getElementById('random')
random.addEventListener('click', (e) => jokeButtonListner(e))

let short = document.getElementById('categoryTwo')
short.addEventListener('click', (e) => jokeButtonListner(e))

let shower = document.getElementById('categoryThree')
shower.addEventListener('click', (e) => jokeButtonListner(e))

let traditional = document.getElementById('categoryFour')
traditional.addEventListener('click', (e) => jokeButtonListner(e))


function jokeButtonListner(e) {
    console.log(e.currentTarget.id);

    switch (e.currentTarget.id) {
        case "random":
            {
                addJoke("random")
                break
            }
        case "categoryTwo":
            {
                addJoke("categoryTwo")
                break
            }
        case "categoryThree":
            {
                addJoke("categoryThree")
                break
            }
        case "categoryFour":
            {
                addJoke("categoryFour")
                break
            }
    }
}

function addJoke(type) {
    const fortunes = document.getElementsByClassName("joke-output")

    for (let i = fortunes.length - 1; i > 0; --i) {
        fortunes[i].innerText = fortunes[i - 1].innerText
    }

    jokeService.get(type)
        .then(fortune => {
            fortunes[0].innerText = fortune
        })
        .catch(error => {
            fortunes[0].innerText = error
        })
}

const jokeService = {
    get: async(type) => {
        let options = {
            headers: { 'Accept': 'application/json' }
        }

        let resp = await fetch(`http://input-URL-for-API-fetch-/${type}`, options)

        if (!resp.ok) {
            throw new Error(resp.status)
        }

        return fetch(`http://input-URL-for-API-fetch-/${type}`)
            .then(response => response.json())
            .then(json => json.fortune)
    }
}