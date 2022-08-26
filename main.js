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




