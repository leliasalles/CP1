let capturando = "";
let resetando = document.getElementById('nome').value;



function capturar(){

    capturando = document.getElementById('input').value;
    document.getElementById('userInput').innerHTML = capturando;
    

    if(document.getElementById('input').value === "sol"){
        document.getElementById('img').src = '/CP1_LeliaSalles/img/sol.png';
    }else if(document.getElementById('input').value === "fá"){
        document.getElementById('img').src = '/CP1_LeliaSalles/img/fa.png';

    }else if(document.getElementById('input').value === "dó"){
        document.getElementById('img').src = '/CP1_LeliaSalles/img/do.png';
    }else if(document.getElementById('input').value != "sol" && document.getElementById('input').value != "fá" && document.getElementById('input').value != "dó"){
        alert("Para conhecer as claves digite as seguintes palavras: sol, fá, ou dó");
    }else{
       
    }

}
