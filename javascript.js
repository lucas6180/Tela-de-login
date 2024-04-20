        function fazerLogin() {
            var email = document.getElementById("email").value;
            var regex = /^[a-zA-Z0-9._!#\$%&'*+\/=?^_`{|}~-]+@(gmail|hotmail|outlook)\.(com|br)$/;
            var senha = document.getElementById("senha").value;
            
            if (email && senha) {
                if (regex.test(email)) {
                    window.location.href = "https://www.youtube.com";
                } else {
                    alert("Erro: Por favor, insira um email válido do Gmail, Hotmail ou Outlook.");
                }
            } else {
                alert("Erro: Por favor, preencha todos os campos.");
            }
        }