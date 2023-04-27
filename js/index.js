function cargar(){
    //leemos el archivo
    let xhttp = new XMLHttpRequest();
    //open = le pedimos el archivo que queremos cargar
    xhttp.open("GET", "./xml/noticias.xml", true);
    //send = Le decimos que nos lo envie
    xhttp.send();
    //onreadystatechange = esperamos
    xhttp.onreadystatechange = function() {
        //comprobamos haya llegado bien, y esté todo correcto (4,20)
        if(this.readyState == 4 && this.status == 200) {
            mostrar(this);
        }
    };
}

//cargamos usando variables
function mostrar(xml){

    let texto, objHttp, cadena;
    objHttp = xml.responseXML;
    cadena = "";

    texto= objHttp.getElementsByTagName('texto');

    cadena = texto[0].childNodes[0].nodeValue;

    document.getElementById("noticiaxml").innerHTML = cadena;

}
