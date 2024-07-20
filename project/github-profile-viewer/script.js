// https://api.github.com/users/Midhun777

var apiUrl = "https://api.github.com/users/Midhun777";
var input_value = document.getElementById('input-value');
var image = document.getElementById('image');
var name = document.getElementById('name');
var blog = document.getElementById('blog');
var repo = document.getElementById('repo');
var bio = document.getElementById('bio');
var following = document.getElementById('following');
var followers = document.getElementById('followers');
var twitter = document.getElementById('twitter');
var location = document.getElementById('location');
var data_updated = document.getElementById('data-updated');

async function displayData() {
    const response = await fetch("https://api.github.com/users/Midhun777");
    var data = await response.json();
    console.log(data);
    console.log(data.id);
    console.log(data.name);
    console.log("blog : "+ data.blog);
    console.log(data.twitter_username);
    console.log("repo : "+data.public_repos);
}
displayData();
