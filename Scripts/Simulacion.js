

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

  let internos = [
    100000, 100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009,
    100010, 100011, 100012, 100013, 100014, 100015, 100016, 100017, 100018, 100019
  ];
  
  let externos = [
    1000000, 1000001, 1000002, 1000003, 1000004, 1000005, 1000006, 1000007, 1000008, 1000009,
    1000010, 1000011, 1000012, 1000013, 1000014, 1000015, 1000016, 1000017, 1000018, 1000019
  ];
  
  let origen = [
    200000, 200001, 200002, 200003, 200004, 200005, 200006, 200007, 200008, 200009,
    200010, 200011, 200012, 200013, 200014, 200015, 200016, 200017, 200018, 200019
  ];
  
  let fechas = [
    "01/02/24", "02/02/24", "03/02/24", "04/02/24", "05/02/24", "06/02/24", "07/02/24",
    "08/02/24", "09/02/24", "10/02/24", "11/02/24", "12/02/24", "13/02/24", "14/02/24",
    "15/02/24", "16/02/24", "17/02/24", "18/02/24", "19/02/24", "20/02/24"
  ];
  
  let horas = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];
  
  let estado = [
    "abierto", "cerrado", "en preparación", "a solucionar", "solucionada",
    "abierto", "cerrado", "en preparación", "a solucionar", "solucionada",
    "abierto", "cerrado", "en preparación", "a solucionar", "solucionada",
    "abierto", "cerrado", "en preparación", "a solucionar", "solucionada"
  ];
  
  let local = [
    "j201", "j202", "j203", "j204", "j205", "j206", "j207", "j208", "j209", "j210",
    "j211", "j212", "j213", "j214", "j215", "j216", "j217", "j218", "j219", "j220"
  ];
  
  let servicio = [
    "POS", "Microinformática", "Totem Tarjeta", "Flejeadora", "Huelleros",
    "POS", "Microinformática", "Totem Tarjeta", "Flejeadora", "Huelleros",
    "POS", "Microinformática", "Totem Tarjeta", "Flejeadora", "Huelleros",
    "POS", "Microinformática", "Totem Tarjeta", "Flejeadora", "Huelleros"
  ];

  let slas =[ "Sla 1" , "Sla 1.5" , "Sla 2"];
  let slaRandon = 0;
  let simulacion = 0;
  let repetibles = [];
  let cantidadAleatoria = 0;

function generarNumeroAleatorio() {
    let numeroGenerado =  Math.floor(Math.random()*20);

    return numeroGenerado;
  
}

function asignarNumeroAleatorio(){
    simulacion = generarNumeroAleatorio();
     slaRandon =  Math.floor(Math.random()*3);
    



    console.log(simulacion);
     incidentes = [
        slas[slaRandon] ,
        internos[simulacion],
        origen[simulacion],
        externos[simulacion],
        fechas[simulacion],
        horas[simulacion],
        local[simulacion],
        servicio[simulacion],
        direcciones[simulacion],
        localidades[simulacion],
        provincias[simulacion],
        estado[simulacion],
        causas[simulacion],
        tecnicos[simulacion],



]

}

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    let td = document.createElement('td');  
    td.textContent = texto;  
    elementoHTML.appendChild(td);  
}
         
    // Generar filas dinámicamente
    function generarLista() {
        let tbody = document.getElementById("sla-list");
        tbody.innerHTML = ""; // Limpiar lista antes de generar nueva
        cantidadAleatoria = generarNumeroAleatorio();
        for (let i = 0; i < cantidadAleatoria; i++) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<tr>
            <td  scope="row" >${internos[simulacion]}</td>
            <td>${slas[slaRandon]}</td>
            <td>${origen[simulacion]}</td>
            <td>${externos[simulacion]}</td>
            <td>${fechas[simulacion]}</td>
            <td>${horas[simulacion]}</td>
            <td>${local[simulacion]}</td>
            <td>${servicio[simulacion]}</td>
            <td>${direcciones[simulacion]}</td>
            <td>${localidades[simulacion]}</td>
            <td>${provincias[simulacion]}</td>
            <td>${estado[simulacion]}</td>
            <td>${causas[simulacion]}</td>
            <td>${tecnicos[simulacion]}</td>
            </tr>
            `;
            tbody.appendChild(tr);
            repetibles.push = [simulacion];
            simulacion = generarNumeroAleatorio();
            slaRandon =  Math.floor(Math.random()*3);
        }
    }

    
    alert("Oprimir simular pagina para que aparesca un listado dinamico aleatorio de datos") ;  


function simularPagina(){
 
    asignarNumeroAleatorio();
    console.log(incidentes);
    generarLista();
    
}
