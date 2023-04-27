productos = [
    //Pcs
    {id: 1, nombre: "PcCom Gold Élite", tipo: "pc", categoria_id: 1, cantidad: 1, precio: 929, img: '../assets/images/pcs/pc_1.png'},
    {id: 2, nombre: "PcCom Bronze", tipo: "pc", categoria_id: 1, cantidad: 1, precio: 950, img: '../assets/images/pcs/pc_2.png'},
    {id: 3, nombre: "HP OMEN 40L", tipo: "pc", categoria_id: 1, cantidad: 1, precio: 1000, img: '../assets/images/pcs/pc_3.png'},
    {id: 4, nombre: "PcVIP Effect", tipo: "pc", categoria_id: 1, cantidad: 1, precio: 899, img: '../assets/images/pcs/pc_4.png'},
    {id: 5, nombre: "Epical-Q Tracker 4", tipo: "pc", categoria_id: 1, cantidad: 1, precio: 850, img: '../assets/images/pcs/pc_5.png'},
    //Portátiles
    {id: 6, nombre: "HP 15S-fq2159ns", tipo: "portatil", categoria_id: 2, cantidad: 1, precio: 1300, img: '../assets/images/portatiles/portatil_1.png'},
    {id: 7, nombre: "HP Victus 16-e1015ns", tipo: "portatil", categoria_id: 2, cantidad: 1, precio: 1050, img: '../assets/images/portatiles/portatil_2.png'},
    {id: 8, nombre: "Lenovo IdeaPad 3", tipo: "portatil", categoria_id: 2, cantidad: 1, precio: 999, img: '../assets/images/portatiles/portatil_3.png'},
    {id: 9, nombre: "ASUS VivoBook 15", tipo: "portatil", categoria_id: 2, cantidad: 1, precio: 950, img: '../assets/images/portatiles/portatil_4.png'},
    {id: 10, nombre: "Acer Predator Helios 300", tipo: "portatil", categoria_id: 2, cantidad: 1, precio: 900, img: '../assets/images/portatiles/portatil_5.png'},
    //Smartphones
    {id: 11, nombre: "Apple iPhone 14 Pro Max", tipo: "smartphone", categoria_id: 3, cantidad: 1, precio: 1499, img: '../assets/images/smartphones/smartphone_1.jpg'},
    {id: 12, nombre: "Apple iPhone 13", tipo: "smartphone", categoria_id: 3, cantidad: 1, precio: 1200, img: '../assets/images/smartphones/smartphone_2.jpg'},
    {id: 13, nombre: "Xiaomi Redmi A1", tipo: "smartphone", categoria_id: 3, cantidad: 1, precio: 100, img: '../assets/images/smartphones/smartphone_3.jpg'},
    {id: 14, nombre: "Samsung Galaxy S23", tipo: "smartphone", categoria_id: 3, cantidad: 1, precio: 775, img: '../assets/images/smartphones/smartphone_4.jpg'},
    {id: 15, nombre: "Samsung Galaxy M23", tipo: "smartphone", categoria_id: 3, cantidad: 1, precio: 925, img: '../assets/images/smartphones/smartphone_5.jpg'},
    //Monitores
    {id: 16, nombre: "AOC 24B2XDAM", tipo: "monitor", categoria_id: 4, cantidad: 1, precio: 350, img: '../assets/images/monitores/monitor_1.png'},
    {id: 17, nombre: "HP X27", tipo: "monitor", categoria_id: 4, cantidad: 1, precio: 200, img: '../assets/images/monitores/monitor_1.png'},
    {id: 18, nombre: "Newskill Icarus IC27Q4-V2P", tipo: "monitor", categoria_id: 4, cantidad: 1, precio: 250, img: '../assets/images/monitores/monitor_1.png'},
    {id: 19, nombre: "HP X24c", tipo: "monitor", categoria_id: 4, cantidad: 1, precio: 199, img: '../assets/images/monitores/monitor_1.png'},
    {id: 20, nombre: "LG Ultragear 24GQ50F-B", tipo: "monitor", categoria_id: 4, cantidad: 1, precio: 299, img: '../assets/images/monitores/monitor_1.png'},
    //Auriculares
    {id: 21, nombre: "Scorpion MA-HG9015", tipo: "auricular", categoria_id: 5, cantidad: 1, precio: 150, img: '../assets/images/auriculares/auriculares_1.jpg'},
    {id: 22, nombre: "Vertux Miami", tipo: "auricular", categoria_id: 5, cantidad: 1, precio: 80, img: '../assets/images/auriculares/auriculares_2.jpg'},
    {id: 23, nombre: "Abysm Gaming AG700 Pro", tipo: "auricular", categoria_id: 5, cantidad: 1, precio: 100, img: '../assets/images/auriculares/auriculares_3.jpg'},
    {id: 24, nombre: "Klack Inkpod", tipo: "auricular", categoria_id: 5, cantidad: 1, precio: 35, img: '../assets/images/auriculares/auriculares_4.jpg'},
    {id: 25, nombre: "Hori Auriculares Gaming", tipo: "auricular", categoria_id: 5, cantidad: 1, precio: 175, img: '../assets/images/auriculares/auriculares_5.jpg'},
]

/** Funcion que se ejecuta al seleccionar una opcion del primer select */
function cargarSelect2(categoria_id)
{
    if (categoria_id == 0) {

        // desactivamos el segundo select
        document.getElementById("select2").disabled=true;
        
        // eliminamos todos los posibles valores que contenga el select2 y mostramos mensaje de desactivación
        document.getElementById("select2").options.length=0;
        document.getElementById("select2").options[0]=new Option("Desactivado", "0");

    }else{      //En caso contrario:

        // eliminamos todos los posibles valores que contenga el select2
        document.getElementById("select2").options.length=0;
        
        // añadimos la opcion de "Selecciona un producto"
        document.getElementById("select2").options[0] = new Option("Selecciona un producto", "0");

        // añadimos los productos
        let select_productos = document.getElementById("select2")
        let i = 1;
        productos.forEach(function callback(producto, index) {
            if(categoria_id == producto.categoria_id) {
                console.log(index)
                select_productos.options[i] = new Option(producto.nombre, producto.id);
                i++;
            }
        });

        // habilitamos el segundo select
        document.getElementById("select2").disabled=false;
    }
}

//Para hacer el apartado de los precios he utilizado Jquery, ya que no lo he utilizado en todo el proyecto, y aparte me ha resultado mas fácil.

//Cada vez que notamos un cambio en el "select2" de los productos, en los extras o en los plazos llamamos a la función "actualiza_precio_final"

$('#select2').change(actualiza_precio_final);
$('#extra_1').change(actualiza_precio_final);
$('#extra_2').change(actualiza_precio_final);
$('#extra_3').change(actualiza_precio_final);
$('#extra_4').change(actualiza_precio_final);
$('#plazos').change(actualiza_precio_final);

//en esta función detectaremos todos los eventos 

function actualiza_precio_final()
{   
    //declaramo la variable y almacenamos en ella el "value" del producto
    let producto_seleccionado_id = $('#select2').val();
    //En la variable producto, almacenaremos los productos, que vienen de recorrer el array de objetos, menos 1 posición ya que el array empieza en "0"
    let producto = productos[producto_seleccionado_id - 1];
    //En la variable precio almacenamos el precio del objeto producto.
    let precio = producto.precio;

    //Con "prop" vemos si la casilla está "checked" o no, y si lo está le sumamos el precio del extra a la del producto
    if($('#extra_1').prop('checked')) {
        precio = precio + $('#extra_1').data('precio');
    }
    if($('#extra_2').prop('checked')) {
        precio = precio + $('#extra_2').data('precio');
    }
    if($('#extra_3').prop('checked')) {
        precio = precio + $('#extra_3').data('precio');
    }
    if($('#extra_4').prop('checked')) {
        precio = precio + $('#extra_4').data('precio');
    }

    //En esta variable recogemos el valor del imput "plazos"
    let meses_plazo = $('#plazos').val();

    //En estas condiciones recogemos el valor de nuestro imput y dependiendo del número le aplicamos unos descuentos u otros(1-3 un 30%, 3-6 un 20% y de 6-12 un 10%)
    if(meses_plazo >= 1 && meses_plazo <= 3) {
        precio = precio - ((precio * 30) / 100)
    }
    if(meses_plazo >= 4 && meses_plazo <= 7) {
        precio = precio - ((precio * 20) / 100)
    }
    if(meses_plazo >= 8 && meses_plazo <= 12) {
        precio = precio - ((precio * 10) / 100)
    }

    $('#presupuesto_final').val(precio);
}