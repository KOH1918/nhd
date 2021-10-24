let w = document.getElementById("sexo").value;
let fecha = document.getElementById("edad").value;
let y = document.getElementById("peso").value;
let z = document.getElementById("talla").value;
let text
let txttalla;
let txtpeso;
let tallaB = 0, tallaA = 0;
let pesoB, pesoA;
y = Math.round(y);
z = Math.round(z);
function calculo_talla(tallaA, tallaB, z) {
if ((z < tallaA) && (z > tallaB)) {
    txttalla = "la talla está bien"
}else {
    if (z >= tallaA) {
        txttalla = "la talla es alta";
    } else {
        if (z <= tallaB) {
            txttalla = "La talla está baja";
        }
    }
}   
}
function calculo_peso(pesoA, pesoB, y) {
if ((y < pesoA) && (y > pesoB)) {
    txtpeso = "El peso está bien"
}else {
    if (y >= pesoA) {
        txtpeso = "Tiene sobrepeso";
    } else {
        if (y <= pesoB) {
            txtpeso = "El peso está bajo";
        }
    }
} 
}
function calcularEdad(fecha) {
var hoy = new Date();
var cumpleanos = new Date(fecha);
var edad = hoy.getFullYear() - cumpleanos.getFullYear();
var m = hoy.getMonth() - cumpleanos.getMonth();

if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
}
edad = edad * 12;
if (m < 0) {
    m = m + 12;
}
edad = edad + m;
while (edad % 3 != 0) {
    edad--;
}
return edad;
}
function datos() {
y = y * 1000;
let x = Number (calcularEdad(fecha));
console.log(x);
if (w == 0) {
    switch (x) {
        case 1:
            tallaA = 55;
            tallaB = 50;
            pesoA = 5000;
            pesoB = 2500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 2:
            tallaA = 58;
            tallaB = 53;
            pesoA = 5500;
            pesoB = 4000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 3:
            tallaA = 61;
            tallaB = 57;
            pesoA = 6500;
            pesoB = 4500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 4:
            tallaA = 59;
            tallaB = 55;
            pesoA = 7500;
            pesoB = 5000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 5:
            tallaA = 67;
            tallaB = 61;
            pesoA = 8000;
            pesoB = 5500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 6:
            tallaA = 69;
            tallaB = 63;
            pesoA = 8000;
            pesoB = 6000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 7:
            tallaA = 71;
            tallaB = 64;
            pesoA = 9000;
            pesoB = 6500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 8:
            tallaA = 73;
            tallaB = 65;
            pesoA = 9500;
            pesoB = 7000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 9:
            tallaA = 74;
            tallaB = 66;
            pesoA = 9900;
            pesoB = 27500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 10:
            tallaA = 76;
            tallaB = 68;
            pesoA = 10200;
            pesoB = 7500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 11:
            tallaA = 77;
            tallaB = 70;
            pesoA = 10700;
            pesoB = 8000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 12:
            tallaA = 78;
            tallaB = 71;
            pesoA = 11000;
            pesoB = 8500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 15:
            tallaA = 81;
            tallaB = 74;
            pesoA = 11900;
            pesoB = 9000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 18:
            tallaA = 84;
            tallaB = 77;
            pesoA = 12500;
            pesoB = 9500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 21:
            tallaA = 88;
            tallaB = 80;
            pesoA = 13000;
            pesoB = 10000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 24:
            tallaA = 90;
            tallaB = 82;
            pesoA = 13800;
            pesoB = 10500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 27:
            tallaA = 91;
            tallaB = 83;
            pesoA = 14500;
            pesoB = 11000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 30:
            tallaA = 94;
            tallaB = 85;
            pesoA = 15200;
            pesoB = 11400;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 33:
            tallaA = 97;
            tallaB = 87;
            pesoA = 16000;
            pesoB = 11900;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 36:
            tallaA = 99;
            tallaB = 89;
            pesoA = 16700;
            pesoB = 12200;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 39:
            tallaA = 101;
            tallaB = 91;
            pesoA = 17300;
            pesoB = 12800;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 42:
            tallaA = 103;
            tallaB = 93;
            pesoA = 18000;
            pesoB = 13500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 45:
            tallaA = 105;
            tallaB = 94;
            pesoA = 18500;
            pesoB = 13500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 48:
            tallaA = 107;
            tallaB = 96;
            pesoA = 19000;
            pesoB = 14000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 51:
            tallaA = 108;
            tallaB = 98;
            pesoA = 19500;
            pesoB = 14200;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 54:
            tallaA = 110;
            tallaB = 99;
            pesoA = 20100;
            pesoB = 14600;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 57:
            tallaA = 112;
            tallaB = 101;
            pesoA = 20500;
            pesoB = 15000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 60:
            tallaA = 114;
            tallaB = 103;
            pesoA = 21400;
            pesoB = 15400;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 63:
            tallaA = 115;
            tallaB = 104;
            pesoA = 22000;
            pesoB = 15600;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 66:
            tallaA = 117;
            tallaB = 105;
            pesoA = 22500;
            pesoB = 16000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 69:
            tallaA = 119;
            tallaB = 107;
            pesoA = 23200;
            pesoB = 16200;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 72:
            tallaA = 120;
            tallaB = 108;
            pesoA = 23500;
            pesoB = 16500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        default:
            console.log("edad errada");
            break;
    }
} else {
    switch (x) {
        case 1:
            tallaA = 54;
            tallaB = 48;
            pesoA = 5500;
            pesoB = 3500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 2:
            tallaA = 58;
            tallaB = 53;
            pesoA = 6500;
            pesoB = 4000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 3:
            tallaA = 64;
            tallaB = 58;
            pesoA = 7000;
            pesoB = 5000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 4:
            tallaA = 68;
            tallaB = 60;
            pesoA = 8000;
            pesoB = 5500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 5:
            tallaA = 69;
            tallaB = 63;
            pesoA = 8500;
            pesoB = 6000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 6:
            tallaA = 71;
            tallaB = 65;
            pesoA = 9000;
            pesoB = 6500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 7:
            tallaA = 73;
            tallaB = 66;
            pesoA = 9500;
            pesoB = 7000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 8:
            tallaA = 74;
            tallaB = 67;
            pesoA = 10000;
            pesoB = 7500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 9:
            tallaA = 76;
            tallaB = 68;
            pesoA = 10500;
            pesoB = 8000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 10:
            tallaA = 77;
            tallaB = 69;
            pesoA = 11000;
            pesoB = 8000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 11:
            tallaA = 78;
            tallaB = 72;
            pesoA = 11400;
            pesoB = 8500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 12:
            tallaA = 80;
            tallaB = 73;
            pesoA = 11800;
            pesoB = 8900;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 15:
            tallaA = 83;
            tallaB = 76;
            pesoA = 12500;
            pesoB = 9500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 18:
            tallaA = 86;
            tallaB = 79;
            pesoA = 13000;
            pesoB = 10000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 21:
            tallaA = 89;
            tallaB = 81;
            pesoA = 13800;
            pesoB = 10500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 24:
            tallaA = 92;
            tallaB = 83;
            pesoA = 14500;
            pesoB = 11000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 27:
            tallaA = 93;
            tallaB = 84;
            pesoA = 15000;
            pesoB = 11500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 30:
            tallaA = 95;
            tallaB = 88;
            pesoA = 15600;
            pesoB = 11900;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 33:
            tallaA = 99;
            tallaB = 89;
            pesoA = 16400;
            pesoB = 12000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 36:
            tallaA = 100;
            tallaB = 90;
            pesoA = 17000;
            pesoB = 12500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 39:
            tallaA = 102;
            tallaB = 94;
            pesoA = 17500;
            pesoB = 13000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 42:
            tallaA = 104;
            tallaB = 94;
            pesoA = 18000;
            pesoB = 13500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 45:
            tallaA = 106;
            tallaB = 95;
            pesoA = 18700;
            pesoB = 13000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 48:
            tallaA = 108;
            tallaB = 97;
            pesoA = 19000;
            pesoB = 14400;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 51:
            tallaA = 110;
            tallaB = 99;
            pesoA = 20000;
            pesoB = 14700;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 54:
            tallaA = 112;
            tallaB = 100;
            pesoA = 20500;
            pesoB = 15000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 57:
            tallaA = 114;
            tallaB = 102;
            pesoA = 21000;
            pesoB = 15500;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 60:
            tallaA = 115;
            tallaB = 104;
            pesoA = 21500;
            pesoB = 16000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 63:
            tallaA = 117;
            tallaB = 105;
            pesoA = 22300;
            pesoB = 17000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 66:
            tallaA = 119;
            tallaB = 107;
            pesoA = 23000;
            pesoB = 17000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 69:
            tallaA = 120;
            tallaB = 108;
            pesoA = 23500;
            pesoB = 17000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        case 72:
            tallaA = 121;
            tallaB = 109;
            pesoA = 24300;
            pesoB = 17000;
            calculo_talla(tallaA, tallaB, z);
            calculo_peso(pesoA, pesoB, y);
            break;
        default:
            console.log("edad errada");
            break;
    }
}
document.getElementById("txtpeso").innerHTML = txtpeso;
document.getElementById("txttalla").innerHTML = txttalla;
}
