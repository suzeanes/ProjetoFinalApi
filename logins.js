let elementLogin =
document.getElementById("login");
let elementSenha =
document.getElementById("senha");

const verificarLogin = (login,senha)=>{
    if(login == "luke" && senha == "123"){
        localStorage.setItem("usuarioLogado", "Luke");
        localStorage.setItem("sobrenomeUsuarioLogado", "Skywalker");
        return true;
    }
    return false;
};

const apresentaMensagemErro = () =>{
    alert("Wrong user or password!!!");
};
const realizarLogin = () =>{
    const login = elementLogin.value;
    const senha = elementSenha.value;
    if(verificarLogin(login, senha)){
        //window.location.href = "./views/home.html";
        window.location.assign("./index.html");
    }else{
        apresentaMensagemErro();
    }
   
};