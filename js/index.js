const name = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const exit = document.getElementById('exit')


function getData() {
    let data = []

    if(localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }

    return data;
}

let fulUrl = window.location.href;
let index = fulUrl.search('index')
let baseUrl = fulUrl.substring(0, index)

document.addEventListener('DOMContentLoaded' ,function(){
    let users = getData();
    let activeUser = localStorage.getItem('activeUser')

    if(activeUser) {
        let user = users.find(el => {
            return el.username == activeUser
        })
        
        if(user) {
            name.innerHTML = user.name,
            surname.innerHTML = user.surname,
            age.innerHTML = user.age,
            email.innerHTML = user.email,
            username.innerHTML = user.username,
            password.innerHTML = user.password
        } else {
            window.location.assign(`${baseUrl}/pages/login.html`)
        }

    } else {
        window.location.assign(`${baseUrl}/pages/login.html`)
    }
})

exit && exit.addEventListener('click', function() {
    localStorage.removeItem('activeUser')
    window.location.assign(`${baseUrl}/pages/login.html`) 
})