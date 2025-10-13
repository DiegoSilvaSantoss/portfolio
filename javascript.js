alert(`
    < > INFORMAÇÕES DO DESENVOLVEDOR

    📢ATENÇÃO❗

    👨‍🔧: Site em Manutenção.

    🗃️: Vou colocar os projetos de fato, esses que estão no Portfólio são fotos ilustrativos... Vou pôr os projetos real e com modo de visualização. assim tendo uma melhor experiência.

    ✔️: Projeto (Página de Viagens), Já funcionando.
    ✔️: Projeto (Lojas de Carros), Já funcionando.
    ❌: Projeto (Microsoft), Tá em andamento...
    `)


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