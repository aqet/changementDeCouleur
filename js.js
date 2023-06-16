let divchange = document.querySelector('.color');
let containerchange = document.querySelector('.container');
let q = document.querySelector('.button');
let newdiv = document.createElement("div");

for (let i = 0; i < 9; i++) {
    let newbtn = document.createElement("button");
    let newContent = document.createTextNode(i+1);
    newbtn.appendChild(newContent);
    q.appendChild(newbtn)
}
let btn = document.querySelectorAll('button');

divchange.onclick = () =>{
    if (divchange.classList.contains('colorchange')) {
        divchange.classList.remove('colorchange');
        containerchange.classList.remove('containerchange');
        btn.forEach((item) =>{
            item.classList.remove('btnchange')
        });
    }else{
        divchange.classList.add('colorchange');
        containerchange.classList.add('containerchange');
        btn.forEach((item) =>{
            item.classList.add('btnchange')
        });
    }
}

