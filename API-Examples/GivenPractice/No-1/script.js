document.getElementById('loadBuddies').addEventListener('click', function () {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBuddies(data));
});


const displayBuddies = buddies => {
    console.log(buddies);
    const displayBuddiesContainer = document.getElementById('display-buddies');
    buddies.forEach(buddy => {
        console.log(buddy);
        const buddiesCard = document.createElement('div');
        buddiesCard.classList.add('col');
        buddiesCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Name : ${buddy.name}</h5>
                <p class="card-text">City : ${buddy.address.city}</p>
            </div>
        </div>        
        `;
        displayBuddiesContainer.appendChild(buddiesCard);
    });
}

/* 
    ---------->load comments
 */

const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadAllComments(data))
}

const loadAllComments = comments => {
    // console.log(comments);
    const commentsSection = document.getElementById('comments-section');
    comments.forEach(comment => {
        // console.log(comment);
        const commentCardDiv = document.createElement('div');
        // commentCardDiv.classList.add('card', 'border');
        commentCardDiv.innerHTML = `
            <div onclick="loadCommentDetails(${comment.id})" class="card border">
                <div class="card-body">
                    <h5 class="card-title">${comment.email}</h5>
                    <p class="card-text">${comment.body}</p>                  
                </div>
            </div>
        `;
        commentCardDiv.style.marginBottom = '10px';
        commentsSection.appendChild(commentCardDiv);

    })
}



const loadCommentDetails = commentId => {
    console.log(commentId);
    const url = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCommentDetails(data[0]))
}


const displayCommentDetails = comment => {
    console.log(comment);
    const displayCommentDetailsSection = document.getElementById('display-comment-details');
    displayCommentDetailsSection.textContent = '';
    const div =  document.createElement('div');
    div.classList.add('card', 'text-center');
    div.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${comment.email}</h5>
            <p class="card-text">${comment.name}</p>
        </div>
    `;
    displayCommentDetailsSection.appendChild(div);
}


loadComments();