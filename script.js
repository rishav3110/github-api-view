const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    console.log(data);
    document.getElementById('avatar').src=`${data.avatar_url}`
document.getElementById('username').innerHTML=`${data.login}`
document.getElementById('bio').innerHTML=`${data.bio}`
document.getElementById('name').innerHTML=`${data.name}`
document.getElementById('location').innerHTML=`${data.location}`
document.getElementById('followers').innerHTML=`${data.followers}`
document.getElementById('following').innerHTML=`${data.following}`
}
    const formSubmit = () => {
        if(searchBox.value !==""){
            getUser(searchBox.value);
        }
        return false;
    };
