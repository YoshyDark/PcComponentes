// 1. CREAR MAPA DE NUESTRA EMPRESA

    // A) Función para inicializar el mapa
    
function initMap(){
    const mapa = document.querySelector("#mapa");
    const localizacion = {lat:37.82792413942396, lng:-1.38775961691894}

        //Creamos el mapa
    const map = new google.maps.Map(mapa,{
    zoom: 17,
    center: localizacion,
    mapTypeId: 'roadmap' //Por defecto: roadmap, satellite(satélite), hybrid, terrain (topográfico)
    })

        //creamos la marca para que aparezca en nuestro mapa
    const marca = new google.maps.Marker({
        position: localizacion,
        map: map,                                   
        draggable: false,                           //Para que NO se pueda mover la marca (he usado el valor "true" para mover la marca y encontrar las coordenadas exactas)
        title: "PcComponentes"
    })
    
        //Con este evento he conseguido las coordenadas exactas, ya que la marca no me coincidia en el mapa

    /*
    marca.addListener("drag",(event)=>{
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());

    })*/

        //Creamos ventana con la información de la empresa

            //creamos el contenido de la ventana
    const contenido = 
        '<h1 id="ventana_titulo"> PcComponentes </h1>'+
        '<img id="imagen_ventana"src="../assets/images/mapa/oficinas_PcComponentes.png">'+
        '<p class="parrafo_ventana"> <strong> Dirección: </strong> <span class="parrafo_ventana_2">Polígono Industrial Las Salinas, Avenida Europa, 2-3, 30840, Murcia </span> </p>'+
        '<p class="parrafo_ventana"> <strong> Sitio Web: </strong> <a href="https://www.pccomponentes.com/">pccomponentes.com</a></p>'+
        '<p class="parrafo_ventana"> <strong> Teléfono: </strong> <span class="parrafo_ventana_2"> 868268070 </span></p>';
            
            //creamos la ventana con el contenido previamente creado
    const infow = new google.maps.InfoWindow({
        content: contenido,
        })
            
            //creamos un evento donde indicaremos el mapa y la marca 
    marca.addListener("click",()=>{
        infow.open({
            map: map,
            anchor: marca,
            shouldFocus: false
            })
        })

    ////////////////////////////////////////// CREAR UNA RUTA DESDE UN PUNTO HASTA NUESTRA EMPRESA //////////////////////////////////////////////////////
    /******************************************************************************************************************************************************/
    navigator.geolocation.getCurrentPosition(function(position){
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;

        let directionsService = new google.maps.DirectionsService;                      //Calcula la ruta
        let directionsDisplay = new google.maps.DirectionsRenderer;                     //Muestra (dibuja) la ruta

        let inicio = new google.maps.LatLng(latitud,longitud);                                   //Inicio de la ruta
        let final = {lat:37.82792413942396,lng:-1.38775961691894};                                    //Fin de la ruta

        const indicaciones = document.getElementById('indicaciones');                   

        let mapa2 = new google.maps.Map(document.getElementById('mapa_rutas'),{
            zoom: 2,
            center: inicio
        });

        directionsDisplay.setMap(mapa2);

        /* directionsDisplay.setPanel(indicaciones);                                           //Muestra las indicaciones de la ruta */

        directionsService.route({
            origin: inicio,
            destination: final,
            travelMode:google.maps.TravelMode.WALKING                                      //Como queremos ir: DRIVING(coche), WALKING(andando), TRANSIT(transporte público)
        }, function(response, status){
            if(status == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(response);
            }else{
                alert("Fallo en el calculo de la ruta");
            }
        })  

    })
        
}

    // B) Llamar a la función

window.initMap=initMap;





