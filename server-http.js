const http = require('http')





const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})

    if (request.url == '/'){
        response.end('Open the blast door!\n')
    }else if (request.url === '/close'){
        response.end('Close the blast door!\n')
    }else{
        response.end('No doors!\n')
    }

})

server.listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337')
})

