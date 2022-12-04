 'use strict'
 const http = require('http');
 const fs = require('fs');
 http.get('http://loripsum.net/api/1', res => {
    var text = '';
    res.on('data', chunk => {
        text += chunk
    });
    res.on('end', () => {
        fs.writeFile('lorem.html', text, () =>{
            console.log('Arquivo pronto!');
        });
    });

 })
 .on('error', (e) => {
    console.log('Got error:' + e.message);
 });
