const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const users = data.results;
    const usersContainer = document.getElementById('users');
    for (const user of users) {
        const fullName = (user.name.title + '. ' + user.name.first + ' ' + user.name.last);
        const p = document.createElement('p');
        p.innerHTML = `Hi I'm <span class='name'> ${fullName} </span> my email is: <span class ='email'>${user.email}</span>`;
        usersContainer.appendChild(p);
        // console.log(fullName);
    }

}