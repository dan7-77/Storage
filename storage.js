// Mascara NOME
function salva_nome()
{
    var nome = document.getElementById('name').value
    localStorage.setItem("nome",nome)

}       

function mascara_telefone ()
        {
          // limite
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
            tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            // Mascara TELEFONE
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            var telefone = document.querySelector("#telefone").value
           localStorage.setItem("telefone",telefone)
         
    }
          


             // Mascara EMAIL
        function mascara_email()
        { 
            var email = document.querySelector("#email").value
            localStorage.setItem("email",email)
        }       
    
         // Mascara CPF
         function mascara_cpf()
         { var cpf_formatado = document.getElementById("cpf").value
             if (cpf_formatado[2]!=".")
             {
                 if (cpf_formatado[2]!=undefined)
                 {
                     document.getElementById("cpf").value=cpf_formatado.slice(0,2)+"."+cpf_formatado[2];
                 }
             }
         
             if (cpf_formatado[6]!="-")
             {
                 if(cpf_formatado[6]!=undefined)
                 {
                     document.getElementById("cpf").value=cpf_formatado.slice(0,6)+"-"+cpf_formatado[6]
                 }
             }
             var cpf = document.querySelector("#cpf").value
             localStorage.setItem("cpf",cpf)
         }       
     
 

            