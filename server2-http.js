
const http = require('http')
const routes = new Map()
routes.set('/', (request, response) => response.end('Open the blast doors\n'))
routes.set('/close', (request, response) => response.end('Close the blast doors!\n'))


const phrases = ['vou te dar um cuecão de couro',
                 'te acho uma baranga',
                 'sabe eu pegoa amizade fácil',
                 'fala bitoca'] 


routes.set('/pitbicha', (request, response) => {
    const randomIndex = Math.ceil(Math.random() * phrases.length)  -1
    const say = phrases[randomIndex]
    response.end(say)
}) 


const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'})
    
    if (!routes.has(request.url))
        return response.end('No doors!\n')

    return routes.get(request.url)(request, response)

})
server.listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337/')
})