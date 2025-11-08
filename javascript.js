const btn = document.querySelector('.btn-lateral')
const btnLateral = document.querySelector('.botao-lateral')
const menuLateral = document.querySelector('.navegacao')
const backg = document.querySelector('.background')


btn.addEventListener('click', () => {

    btnLateral.classList.toggle('active')
    menuLateral.classList.toggle('active')
    backg.classList.toggle('active')
})

backg.addEventListener('click', () => {

    btnLateral.classList.remove('active')
    menuLateral.classList.remove('active')
    backg.classList.toggle('active')
})


window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) {
    btnTopo.classList.add('active');
  } else {
    btnTopo.classList.remove('active');
  }
})




// ENVIAR MENSAGEM FORMATADA PRO WHATSAPP
function enviarWhats(event) {

    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5563999789035'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

    window.open(url, '_blank')
}

// NOTIFICAÇÃO POPUP PERSONALIZADO
/*window.addEventListener('load', function() {
  Swal.fire({
    title: '🆕|Projeto Adicionado!',
    text: 'PORTFOLIO CARROSEL ANIMADO',
    imageUrl: './img/projeto5.PNG',
    imageWidth: 500,
    imageHeight: 250,
    imageAlt: 'Imagem do Portfolio',
    confirmButtonText: 'Ok',
    background: '#1e1e2f',
    color: '#fff',
    confirmButtonColor: '#9400D3'
  });
});*/