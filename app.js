
//pegar o input
 //se for sim, mostra as categorias disponíveis, perguntal qual categorial ela escolhe
 //se não, mostra todas as músicas em ordem crescente pela duração
 const musicas = require('./database.js')
 const readline = require('readline-sync')

 const entradaInicial = readline.question('Deseja buscar uma musica do Emicida? S/N')

 if (entradaInicial.toLocaleUpperCase() === 'S'){
     console.log('Esses são os álbuns disponíveis:')
     console.log('10 Anos de Triunfo (Ao Vivo)','/Doozicabraba e a Rev. Silenciosa','/Amarelo','/Emicidio','/Tao Real','/O Glorioso Retorno de Quem Nunca Esteve Aqui')

     const entradaAlbum = readline.question('Qual album voce escolhe?')

     const retorno = musicas.filter(musicas => musicas.album === entradaAlbum)

     console.table(retorno)
 } else {
    const musicasOrdenadas = musicas.sort((a,b)=> a.ano - b.ano) 
    console.log('Essas são todas as músicas do Emicida disponíveis:')
    console.table(musicasOrdenadas)
 }


