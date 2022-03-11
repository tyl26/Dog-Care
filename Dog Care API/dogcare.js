document.getElementById('present').addEventListener('click', getDogPresent)
document.getElementById('dogabsent').addEventListener('click', getDogabsent)
document.getElementById('home').addEventListener('click', goHome)


function getDogPresent() {
    document.getElementById('group').style.display = 'none'
    document.getElementById('dogabsent').style.display = 'none'


    fetch('./dogs.json')
        .then(res => res.json())
        .then((data) => {
            let dogList = data.dogs

            for (let i = 0; i < dogList.length; i++) {
                if (dogList[i].present === true) {

                    let allDogs = document.createElement('article')
                    document.querySelector('body').appendChild(allDogs)
                    let profileImg = document.createElement('img')
                    profileImg.setAttribute('src', dogList[i].img)
                    allDogs.appendChild(profileImg)
                    let name = document.createElement('h3')
                    name.innerHTML = 'Name:' + ' ' + dogList[i].name
                    allDogs.appendChild(name)
                    let moreBtn = document.createElement('button')
                    moreBtn.textContent = 'More about me'
                    allDogs.appendChild(moreBtn)

                    moreBtn.addEventListener('click', () => {
                        window.localStorage.setItem('doginfo', JSON.stringify(dogList[i]) )
                        location.href = 'doginfo.html';


                        


                    })

                }

            }

        })

}


function getDogabsent() {
    document.getElementById('group').style.display = 'none'
    document.getElementById('present').style.display = 'none'


    fetch('./dogs.json')
        .then(res => res.json())
        .then((data) => {
            let dogList = data.dogs

            for (let i = 0; i < dogList.length; i++) {
                if (dogList[i].present === false) {

                    let allDogs = document.createElement('article')
                    document.querySelector('body').appendChild(allDogs)
                    let profileImg = document.createElement('img')
                    profileImg.setAttribute('src', dogList[i].img)
                    allDogs.appendChild(profileImg)
                    let name = document.createElement('h3')
                    name.innerHTML = 'Name:' + ' ' + dogList[i].name
                    allDogs.appendChild(name)
                    let moreBtn = document.createElement('button')
                    moreBtn.textContent = 'More about me'
                    allDogs.appendChild(moreBtn)

                    moreBtn.addEventListener('click', () => {
                        window.localStorage.setItem('doginfo', JSON.stringify(dogList[i]) )
                        location.href = 'doginfo.html';




                    })

                }

            }

        })

}

let homeBtn = document.getElementById('home')

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 0) {
        homeBtn.style.display = "block";
    } else {
        homeBtn.style.display = "none";
    }
}

function goHome() {
    location.reload()
}