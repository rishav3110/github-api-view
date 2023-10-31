const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    console.log(data);
    const card = `
    <div class="card">
    <div id="imgbox">
                <img src="${data.avatar_url}" alt="" class="avatar">
            </div>
            <div class="userinfo">
                <h2>${data.name}</h2>
                <p>Bio</p>
                <ul class="info">
                    <li>Followers</li>
                    <li>Following</li>
                    <li>Repost</li>
                </ul>
            </div>
            <div class="Repost">
                <a class="repo" href="#" target="_blank">Repo1</a>
                <a class="repo" href="#" target="_blank">Repo2</a>
                <a class="repo" href="#" target="_blank">Repo3</a>
            </div>
        </div>
        `
        main.innerHTML = card;
}
