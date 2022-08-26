// FORMULARIO
function onClick (event) {
    event.preventDefault();
    
    const mensaje = {
      name: document.getElementById('comercio').value,
      email: document.getElementById('titular').value,
      message: document.getElementById('celular').value
    }
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Usted se ha registrado', 
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
    
    console.log('antes de la promesa...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => resolve(), 5000);
        const getValueInput = () => {
            let inputValue1 = document.querySelector("#comercio").value;
            let inputValue2 = document.querySelector("#titular").value; 
            let inputValue3 = document.querySelector("#celular").value;               
        };
    })
    .then(resp => {
        console.log('termino el timeout');
    });
    console.log('despues de la promesa');
  }

  function cleanForm() {
      let formulario = document.getElementById('formulario');    
      formulario.reset();    
  }
  function redirectUrl(){
      window.location.href = "https://google.com";    
  }

  let boton = document.getElementById("enviar");
    boton.addEventListener("click", onClick);

 // Capturar valores de los inputs
const getValueInput = () => {
    let inputValue1 = document.querySelector("#comercio").value;
    let inputValue2 = document.querySelector("#titular").value; 
    let inputValue3 = document.querySelector("#celular").value;       
    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);
};  




//API CLIMA - OpenWeather

let longitud;
let latitud;
let url;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion=>{
        //posiciones mias
        //longitud= posicion.coords.longitude
        //latitud=posicion.coords.latitude
        //posicion de la ciudad cultural
        latitud="-24.188654561006086";
        longitud="-65.300252137829";
        key= "ee3dc4f05e3eb01904cbe1629c493a51";
        //pongo mis valores y ubicación
        url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${key}&lang=es`;

        console.log(url);
        const getData=async()=>{

            const cogerDatos=await fetch(url) 
            const data=await cogerDatos.json() 
            console.log(data) 

            let temp=data.main.temp- 273.15 ; // temperatura en kelvin a celsius
            
            let date = new Date();
            fechaActual = date.toLocaleDateString()+" "+date.getHours()+":"+date.getMinutes();
            
           // document.getElementById('fechaActual').src=img;
           document.getElementById('fechaActual').textContent=" Fecha : "+ fechaActual;
           document.getElementById('localidad').textContent= "Localidad: " +data.name;
           document.getElementById('humedad').textContent=" Humedad: "+data.main.humidity;
           document.getElementById('temperatura').textContent="Temperatura: "+Math. round(temp)+ "°C";
           document.getElementById('visibilidad').textContent="Visibilidad: "+data.visibility;
           document.getElementById('porcNubes').textContent="Pocentaje de Nubes: "+data.clouds.all;
          
        }
        getData()
    })
}  


 



