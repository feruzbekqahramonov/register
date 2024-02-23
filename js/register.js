import { validateRegister } from "./functions.js"
const button = document.getElementById('button')
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')
const form = document.getElementById('form')



function getData() {
    let data = []

    if(localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }

    return data;
}

button && button.addEventListener('click', function(e) {
    e.preventDefault()
    const isValid = validateRegister(name, surname, age, email, username, password, repassword)

    if(isValid) {
        const user = {
            name: name.value,
            surname: surname.value,
            age: age.value,
            email: email.value,
            username: username.value,
            password: password.value,
        }

        let users = getData()
        users.push(user)

        localStorage.setItem('users', JSON.stringify(users))
        form.reset()
        let index = window.location.href.search('pages')
        let baseUrl = window.location.href.substring(0, index)
        window.location.assign(`${baseUrl}pages/login.html`);
    }
})


