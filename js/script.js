let btn = document.getElementById("get-data");

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then(data => {
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post Id: ${data.id}`;
            pUserId.innerText = `User Id: ${data.userId}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            btn.after(hr);
            btn.after(pBody);
            btn.after(pTitle);
            btn.after(pUserId);
            btn.after(pId);
        })
        .catch(error => {
            console.error(error);
        })
    
}


btn.addEventListener('click', getData);


