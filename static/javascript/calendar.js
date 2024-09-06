
document.getElementById('agendamento-form').addEventListener('submit', function (event) {
    event.preventDefault(); 


    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;


    const mensagem = `Olá, gostaria de agendar um horário para corte de cabelo. \nNome: ${nome} \nData: ${data} \nHora: ${hora} \n\nAguardo confirmação, obrigado!`;

    const mensagemCodificada = encodeURIComponent(mensagem);


    const numeroWhatsApp = '1234567890'; 
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


    window.location.href = urlWhatsApp;
});

