console.log("test");

const setBg = () => {
    let p1 = document.querySelector('.first-p');
    let p2 = document.querySelector('.second-p');

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
}

let btnSetColor = document.getElementById('set-color');
btnSetColor.addEventListener('click', setBg);