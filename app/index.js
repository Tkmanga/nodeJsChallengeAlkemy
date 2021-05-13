
const colors = require('colors');
const exps = require('express');

const server = exps(); 

server.get('/',(req,res) => {
    res.send(`<h1>Hola mundo</h1>`)
})

server.listen(3000, ()=>{
    console.log(`Server on port 3000`.red)
});

/* const http = require('http');
const colors = require('colors');

const handleServer = (req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(`<h1>Hola mundo desde node</h1>`);
    res.end();
}

const server = http.createServer(handleServer);


server.listen(3000,()=>{
    console.log('server on port 3000'.green)
}); */

