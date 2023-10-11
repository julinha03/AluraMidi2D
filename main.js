function tocaSam(seletorAudio){
    const elemento=document.querySelector(seletorAudio);
    if(elemento&&elemento.localName==='audio'){
        elemento.play( );
    }
    else{
        //alert('elemento não encontrado');
        console.log('elemento nãoencontrado ou seletor inválido');
    }
}
const ListaDeTeclas=document.querySeletorAll('.tecla');
//para
for(let contador=0;contador<ListaDeTeclas.length;contador++){
    const tecla=ListaDeTeclas[contador];
    const instrumento=tecla.classlist[1];
    const idAudio='#som-${instrumento}';//tamplate string
    
    }