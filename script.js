document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let permite = document.getElementById("permite").checked;
    let seguro = document.getElementById("seguro").checked;
    let impulso = document.getElementById("impulso").checked;
    let termo = document.getElementById("termo").checked;

    let cpfCadastrados = ["125678900", "111111111"];


    console.log("Hello Test");



    if (moradia == "apartamento" && quintal.value == "sim") {
        return alert("Apartamento não pode ter quintal!");
    }

    if (moradia == "apartamento" && !permite) {
        return alert("Apartamento não permite animais!");
    }

    if (moradia == "casa" && !seguro) {
        return alert("Informe se o quintal é seguro!");
    }

    if (horas > 8) {
        return alert("Animal ficará muito tempo sozinho!");
    }

    if (pet.value == "nao") {
        return alert("A ONG poderá acompanhar sua adaptação!");
    }

    let motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido");
    }

    if (!financeiro) {
        return alert("Sem condições financeiras");
    }

    if (impulso) {
        return alert("Cuidado com sua decisão impulsiva");
    }

    document.getElementById("resultado").innerHTML =
        "Cadastro realizado com sucesso!<br>" +
        "Nome: " + nome + "<br>" +
        "Email: " + email + "<br>" +
        "Telefone: " + telefone + "<br>" +
        "Cidade: " + cidade;
});