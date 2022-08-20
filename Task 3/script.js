/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */


// Targets

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn')
const outputEl = document.getElementById('output')
const messageEl = document.getElementById('message')

// Envent Listeners
showUsersBtn.addEventListener('click', async function () {
    const initUsers = await getUsers(ENDPOINT)
    sendToHtml(initUsers)
    messageEl.className = 'hide'
    outputEl.className = 'grid'
})

// Functions
async function getUsers(url) {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log('data --->', data);
        return data
    }
    catch (err) {
        console.warn(err)
    }
}


function sendToHtml(arr) {
    arr.map((obj) => {

        const divEl = document.createElement('div')
        divEl.className = 'card'
        divEl.innerHTML = `
        <div class="card__img">
        <img src="${obj.avatar_url}" alt="user_avatar">
        </div>
        <div class="card__info">
        <h3>
        ${obj.login}
        </h3>
        <p>
        <i class="fa-brands fa-github"></i>
        <a href="${obj.html_url}">Visit User Github</a>
        <p>
        </div>
        `
        outputEl.append(divEl)
    })
}