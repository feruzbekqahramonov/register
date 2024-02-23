import { validateLogin } from "./functions.js"
const button = document.getElementById('button')
const username = document.getElementById('username')
const password = document.getElementById('password')
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
    const isValid = validateLogin(username, password)

    if(isValid) {
        let users = getData()
        let user = users.find((el) => {
            return el.username == username.value && el.password == password.value
        })
       
        if(user?.name) {
           let fulUrl = window.location.href;
           let index = fulUrl.search('pages')
           let baseUrl = fulUrl.substring(0, index)

           localStorage.setItem('activeUser', username.value)
           window.location.assign(`${baseUrl}/index.html`)
        } else {
            alert('Username or password is incorrect')
        }
    }
})


