const $btn = document.querySelectorAll(".btn");
const $res = document.querySelector(".resultado");
let n1 = 0;
let operacion = "";
let validar = false;
let punto = false;
$btn.forEach(i => {
    i.addEventListener("click", () => {
        if(i.textContent === '+') {
            if($res.textContent !== "") {
                n1 += Number.parseFloat($res.textContent);
                $res.textContent = "";
                punto = false;
                operacion = "s";
            }
        }
        else if(i.textContent === '-') {
            if($res.textContent !== "") {
                n1 += Number.parseFloat($res.textContent);
                $res.textContent = "";
                punto = false;
                operacion = "r";
            }
        }
        else if(i.textContent === '*') {
            if($res.textContent !== "") {
                n1 += Number.parseFloat($res.textContent);
                $res.textContent = "";
                punto = false;
                operacion = "m";
            }
        }
        else if(i.textContent === '/') {
            if($res.textContent !== "") {
                n1 += Number.parseFloat($res.textContent);
                $res.textContent = "";
                punto = false;
                operacion = "d";
            }
        }
        else if(i.textContent === '.') {
            if(punto !== true) {
                $res.textContent+=i.textContent.toString();
                punto = true;
            }
        }
        else if(i.textContent === 'E'){
            if(operacion !== ""){
                if(operacion === 's') n1+= Number.parseFloat($res.textContent);
                else if(operacion === 'r') n1-= Number.parseFloat($res.textContent);
                else if(operacion === 'm') n1*= Number.parseFloat($res.textContent);
                else if(operacion === 'd') n1/= Number.parseFloat($res.textContent);
                $res.textContent = n1;
            }
            n1 = 0;
            punto = false;
        }
        else if(i.textContent === 'C'){
            operacion = "";
            n1 = 0;
            $res.textContent = '';
            punto = false;
        }
        else {
            $res.textContent+=i.textContent.toString();
        }
    });
});