function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    if (imagen.src.match) {
        imagen.src = "https://i.blogs.es/594843/chrome/450_1000.jpg";
    } else {
        imagen.src = "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg";
    }

};


//1

document.title = 'Ahora trabajando con DOM dinámico';

//2

document.getElementsByTagName('section');

document.addEventListener('DOMContentLoaded', () => {

   
const sections = document.getElementsByTagName('section');
[...sections].forEach((section,index) => section.id ='section-' + index);
console.log(sections);


//3

const paragraphs = document.getElementsByTagName('p');
[...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

//4

const enlaces = document.getElementsByTagName('a');
[...enlaces].forEach(enlace => enlace.style.textDecoration = 'none');

//5

const boton = document.createElement("input");
boton.setAttribute("type", "checkbox");
[...boton].forEach(botons => boton.style.backgroundColor='grey');




});