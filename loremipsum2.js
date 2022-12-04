

const http = require('http');
const fs = require('fs');
const fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi,'');
const quantityOfParagraphs = String(process.argv[3] || '').replace(/[^\d]/g, '');
const USAGE = 'USO: node loremipsum.js {nomeArquivo} {quantidadeParagrafos}';

if(!fileName || !quantityOfParagraphs){
    return console.log(USAGE);
}

http.get('http://loripsum.net/api/' + quantityOfParagraphs, (res) => {
    let text = '';
    res.on('data', (chunk) =>{
        text += chunk;
    });

    res.on('end', () => {
        fs.writeFile(fileName, text, () =>{
            console.log('Arquivo' + fileName + 'pronto!');
        });
    });


})

.on('error', (e) => {
    console.log('Got error' + e.message);

});