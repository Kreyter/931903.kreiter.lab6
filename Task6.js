var
b = document.getElementById('blue')
g = document.getElementById('green')
c = document.getElementById('cat')
d = document.getElementById('dog')

bt1.onclick = function () {

    b.style.width = '90%';
    g.style.width = '10%'; 
    c.style.width = '400px';
    c.style.padding = '15px'
    c.style.margin = '0'
    c.style.display = "block"
    d.style.display = "none"
}

bt2.onclick = function () {

    g.style.width = '50%';
    b.style.width = '50%';
    c.style.width = '270px'
    d.style.width = '270px'
    d.style.display = "block"
    c.style.display = "block"
}

bt3.onclick = function () {

    g.style.width = '90%';
    b.style.width = '10%';
    d.style.width = '400px';
    d.style.padding = '15px'
    d.style.margin = '0'
    d.style.display = "block"
    c.style.display = "none"
}