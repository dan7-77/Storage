const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){
    modal.showModal();
    var body = document.getElementById("modal-body");
    var nome = localStorage.getItem("nome")
    var cpf = localStorage.getItem("cpf")
    var telefone = localStorage.getItem("telefone")
    var email = localStorage.getItem("email")
    var senha = localStorage.getItem("senha")

    body.innerHTML = nome + "<br>" + cpf + "<br>" + telefone + "<br>" + email + "<br>" + senha
   //fade.classList.toggle("show")


  // modal.classList.remove("hide")

   //fade.classList.remove("hide")

}
function Fechar() {
    modal.close();
}
