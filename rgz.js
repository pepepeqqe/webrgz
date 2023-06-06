function hash(){
    let a = 0x7a3f1532df99868afbe314513f6acd0an % 8n;
}

function menuCheck(id){
    try{
        let block = document.getElementById(id).getElementsByTagName('a');
        let url = document.location.href;
        for (let i=0; i<block.length; i++){
            if (url==block[i].href){
                block[i].className = ' chosenPage';
            }
        }
    }catch(e){}
}
