document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.getElementById('name');
    const userElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repos');
    const followElement = document.getElementById('followers');
    const followingElement = document.getElementById('followings');
    const linkElement = document.getElementById('link');
    
    
    
    
    
    fetch(`https://api.github.com/users/kellzero`)
        .then( function (resposta){
            return resposta.json();

        })
        .then(function(data){
            nameElement.innerText = data.name;
            userElement.innerText = data.login;
            avatarElement.src = data.avatar_url;
            reposElement.innerText = data.public_repos;
            followElement.innerText = data.followers;
            followingElement.innerText = data.following;
            linkElement.href = data.html_url;
        })
        .catch(function(error){
            console.log('error fetching data:', error);
        });
}); 
