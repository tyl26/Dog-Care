console.log("entered dog info");

let dog = window.localStorage.getItem("doginfo")
dog =JSON.parse(dog)
console.log(dog);

let img = document.getElementById('img')
img.src= dog.img
document.getElementById('name').innerText= 'Name:' +' ' +dog.name
document.getElementById('age').innerText= 'Age:' +' ' +dog.age
document.getElementById('gender').innerText='Gender:' +' ' + dog.sex
document.getElementById('breed').innerText= 'breed:' +' ' +dog.breed
document.getElementById('chipNum').innerText= 'Chip number:' +' ' +dog.chipNumber
document.getElementById('owner').innerText= 'Owner:' +' ' +dog.owner.name+ ' ' + dog.owner.lastName
document.getElementById('phoneNum').innerText= 'Phone Number:' +' ' +dog.owner.phoneNumber

let homeBtn = document.getElementById('home')
document.getElementById('home').addEventListener('click', goHome)


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        homeBtn.style.display = "block";
    } else {
        homeBtn.style.display = "none";
    }
}

function goHome() {
   location.href= 'dogcare.html';
//    alert('hhh')
}
