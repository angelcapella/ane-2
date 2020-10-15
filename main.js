function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    if (imagen.src.match) {
        imagen.src = "https://i.blogs.es/594843/chrome/450_1000.jpg";
    } else {
        imagen.src = "https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg";
    }

}