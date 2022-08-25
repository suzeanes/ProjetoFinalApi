

let elemento_usuario_logado = document.getElementById("usuario-logado");
const nome_usuario_logado = localStorage.getItem("usuarioLogado");
const sobrenomeUsuarioLogado = localStorage.getItem("sobrenomeUsuarioLogado");
elemento_usuario_logado.innerText = `Hi ${nome_usuario_logado} ${sobrenomeUsuarioLogado},`;

const botaoVoltar = () => {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("sobrenomeUsuarioLogado");
    window.location.assign("../login.html");
    
};
function carregaMaisPersoonagens() {

}
function carregarPaginaPrimeiraVez(url) {
    fetch(url).then(res => {
    res.json().then(data => {
        console.log(data);
        const people = data.results;
        people.map(char => {
            const a = document.getElementById('info');
            const li = document.createElement('li');
            const h4 = document.createElement('h4');
            h4.innerHTML = `${char.name}`;
            a.appendChild(li);
            li.appendChild(h4);

            li.onclick = function (){
                for( let filme of char.films){
                    fetch(filme).then(response =>response.json()).
                    then(response => {
                        const div = document.createElement('div');
                        div.innerHTML=`${response.title}`;
                        li.appendChild(div); 
                    });
                }
            }

        });
        const buttonMaisPersonagens = document.getElementById("maisp");
        if(data.next == null) {
            alert ("Todos os personagens foram exibidos.");
            buttonMaisPersonagens.style.display = "none";
        }
        
        buttonMaisPersonagens.onclick = function () {carregarPaginaPrimeiraVez(data.next);}; 


    })
})
.catch(err => console.error('Informação não encontrada', err));
}
carregarPaginaPrimeiraVez("http://swapi.dev/api/people/")