let nick;

let nickShown = document.querySelector("#name");

let logged = false;

let sendBtn = document.querySelector("msg-send");

const myModal = new bootstrap.Modal('#login-modal', {"keyboard":false});

const modalToggle = document.getElementById('toggleMyModal'); 

myModal.show(modalToggle);


async function sendLogin() {
    let input = document.querySelector("#input-nick");
    nick = input.value;
    if(!nick)
    {
        console.log("erro: campo nick vazio");
        console.log("nick: "+nick);
    }else
    {
        console.log("logado com sucesso!");
        console.log("nick: "+nick);
        logged = true;
        nickShown.innerHTML = nick;
        myModal.hide(modalToggle);
        await login();
    }
}
async function login() {
    let req = { "method": "POST",
     "body": {"nick": nick}}

    fetch('https://chat-crng.onrender.com/entrar', req)
    .then(response => {
        // valida se a requisição falhou
        if (!response.ok) {
          return new Error('falhou a requisição') // cairá no catch da promise
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}
function inserirMensagem(autor, corpo) {
    let div = document.createElement("div");
    let pAutor = document.createElement("p");
    let pCorpo = document.createElement("p");

    pAutor.appendChild(document.createTextNode(autor));
    pCorpo.appendChild(document.createTextNode(corpo));

    pAutor.className = "msg-autor";
    pCorpo.className = "msg-corpo";
    div.className = "msg col-12 ms-4";

    div.appendChild(pAutor);
    div.appendChild(pCorpo);

    let window = document.querySelector("#window-msg");

    window.appendChild(div);
}
function enviarMensagem() {

}

