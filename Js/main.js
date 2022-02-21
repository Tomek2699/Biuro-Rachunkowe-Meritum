/* Włączanie Menu */
function DropMenu() 
{
    document.getElementById("DropMenu").classList.toggle("show");
}

/* Wyłączanie Menu */
function ExitMenu() 
{
    var dropdown = document.getElementById("DropMenu");
    var Body = document.body;
    if(dropdown.classList.contains('show'))
    {
        dropdown.classList.remove('show')
    }
}

/* LightBox */
function LightBox(imgSrc)
{
    var lightbox = document.createElement('div');
    lightbox.className = "lightbox";
    document.body.appendChild(lightbox);
    lightbox.classList.add('active-lightbox');
    var image = document.createElement('img');
    image.src = imgSrc;
    lightbox.appendChild(image);
    var lightboxClose = document.body;

    lightbox.onclick = function()
    {
        lightbox.classList.remove('active-lightbox');
        lightbox.removeChild(lightbox.firstChild);
        lightboxClose.removeChild(lightbox)
    }
}
