let incidentes = [];


let direcciones = [
    "Av. Corrientes 3500", "Calle Florida 850", "Av. Rivadavia 6200", "San Martín 1234",
    "Mitre 4567", "Av. Córdoba 2300", "Independencia 780", "Belgrano 900", 
    "Av. Santa Fe 4100", "9 de Julio 2200", "La Rioja 320", "Juan B. Justo 2500",
    "Av. De Mayo 1100", "Sarmiento 540", "Las Heras 3000", "Vélez Sarsfield 1780",
    "Moreno 2890", "Pueyrredón 1900", "Salta 1560", "Cangallo 1350"
  ];
  
  let localidades = [
    "Palermo", "Recoleta", "San Telmo", "Balvanera", "Almagro", "Caballito", "Villa Urquiza",
    "Belgrano", "Liniers", "Flores", "La Boca", "Villa Devoto", "San Isidro", "Vicente López",
    "Tigre", "Quilmes", "Avellaneda", "Lanús", "Morón", "San Fernando"
  ];
  
  let provincias = [
    "Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán", "Entre Ríos", "Salta",
    "Misiones", "Corrientes", "Chaco", "San Luis", "San Juan", "La Pampa", "Neuquén",
    "Río Negro", "Chubut", "Santa Cruz", "Jujuy", "Santiago del Estero", "Formosa"
  ];
  
  let causas = [
    "Fuente quemada", "Pantalla sin imagen", "Error de disco duro", "Memoria RAM defectuosa",
    "Sistema operativo no arranca", "Refrigeración insuficiente", "Placa madre dañada",
    "Batería agotada", "Problema en la tarjeta gráfica", "Puerto USB roto",
    "Conexión a red intermitente", "Teclado no responde", "Overclocking inestable",
    "Drivers desactualizados", "Virus y malware", "Error en BIOS", "Pantalla azul",
    "Cortocircuito en la placa", "Software corrupto", "Falla en la fuente de alimentación"
  ];
  
  let tecnicos = [
    "Juan Pérez", "Carlos Gómez", "María López", "Fernando Díaz", "Sofía Ramírez",
    "Martín Herrera", "Luciana Castro", "Diego Fernández", "Valeria Torres",
    "Andrés Benítez", "Julieta Acosta", "Roberto Figueroa", "Camila Sosa",
    "Emiliano Rojas", "Paula Medina", "Hernán Álvarez", "Gabriela Ortega",
    "Javier Bustos", "Romina Cabrera", "Esteban Molina"
  ];









let nombres = [];
let amigos = '';
let indice = 0;




function agregarAmigo(){

    amigos =document.getElementById('amigo').value ; //asigno el valor del imput a la variables amigos

    if (condicionesIniciales()===true){ //valido que no este vacio el input ,cargo el amigo y limpio la caja.
        
        limpiarLista()
        nombres.push(amigos);
        indice = nombres.length;
        nombres.forEach(function (elemento, indice) {
            console.log(elemento, indice);
            asignarTextoElemento('#listaAmigos', elemento);
         });
        limpiarTablas();
       
        return;
}
}

function limpiarTablas() { ///limpio el espacio del imput en cada ingreso de nombre
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){//limpio el listado UL del HTML en cada interaccion para mostrar los elementos de la lista nueva
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
};

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    let li = document.createElement('li');  
    li.textContent = texto;  
    elementoHTML.appendChild(li);  
}

function generarNumeroAleatorio() {
    let numeroGenerado =  Math.floor(Math.random()*indice);
    return numeroGenerado;
}


function simularPagina(){
    let sorteo = document.querySelector('#resultado');
    sorteo.innerHTML = 'El amigo secreto sorteado es: '+ nombres[generarNumeroSecreto()];
    

}