
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

function paleta1(){
    nav1.classList.remove('paleta2');
    nav1.classList.remove('paleta3');
    nav1.classList.add('paleta1');
    nav2.classList.remove('paleta2');
    nav2.classList.remove('paleta3');
    nav2.classList.add('paleta1');
    nav3.classList.remove('paleta2');
    nav3.classList.remove('paleta3');
    nav3.classList.add('paleta1');
    nav4.classList.remove('paleta2');
    nav4.classList.remove('paleta3');
    nav4.classList.add('paleta1');
    

    img1.src = 'img-topo-1.png';
    img2.src = 'img-topo2-1.png';

    btn1.classList.replace('btn-gradient-2', 'btn-gradient');
    btn2.classList.replace('btn-gradient-2', 'btn-gradient');
    btn3.classList.replace('btn-gradient-2', 'btn-gradient');
    btn4.classList.replace('btn-gradient-2', 'btn-gradient');
    btn5.classList.replace('btn-gradient-2', 'btn-gradient');
}

function paleta2(){
    nav1.classList.remove('paleta1');
    nav1.classList.remove('paleta3');
    nav1.classList.add('paleta2');
    nav2.classList.remove('paleta1');
    nav2.classList.remove('paleta3');
    nav2.classList.add('paleta2');
    nav3.classList.remove('paleta1');
    nav3.classList.remove('paleta3');
    nav3.classList.add('paleta2');
    nav4.classList.remove('paleta1');
    nav4.classList.remove('paleta3');
    nav4.classList.add('paleta2');

    img1.src='img-topo-3.png';
    img2.src = 'img-topo2-3.png';

    btn1.classList.replace('btn-gradient-2', 'btn-gradient');
    btn2.classList.replace('btn-gradient-2', 'btn-gradient');
    btn3.classList.replace('btn-gradient-2', 'btn-gradient');
    btn4.classList.replace('btn-gradient-2', 'btn-gradient');
    btn5.classList.replace('btn-gradient-2', 'btn-gradient');
}

function paleta3(){
    nav1.classList.remove('paleta1');
    nav1.classList.remove('paleta2');
    nav1.classList.add('paleta3');
    nav2.classList.remove('paleta1');
    nav2.classList.remove('paleta2');
    nav2.classList.add('paleta3');
    nav3.classList.remove('paleta1');
    nav3.classList.remove('paleta2');
    nav3.classList.add('paleta3');
    nav4.classList.remove('paleta2');
    nav4.classList.remove('paleta1');
    nav4.classList.add('paleta3');

    img1.src='img-topo-2.png';
    img2.src = 'img-topo2-2.png';

    btn1.classList.replace('btn-gradient', 'btn-gradient-2');
    btn2.classList.replace('btn-gradient', 'btn-gradient-2');
    btn3.classList.replace('btn-gradient', 'btn-gradient-2');
    btn4.classList.replace('btn-gradient', 'btn-gradient-2');
    btn5.classList.replace('btn-gradient', 'btn-gradient-2');
}