
const colors = require('colors');
const exps = require('express');

const server = exps(); 
server.use(exps.json());
//Routing

server.get('/',(req, res) => {
    res.send(`<h1>Get req recibida</h1>`)
})

server.get('/user',(req, res) => {
    res.json(
        {
            userName: 'jose',
            lasTName: 'tacacho'
        }
    );
})
server.post('/user',(req, res) => {
    console.log(req.body)
    res.send(`<h1>Post req recibida</h1>`)
    
})
server.put('/contact',(req, res) => {
    res.send(`<h1>Hola mundo</h1>`)
})

server.delete('/delete',(req, res) => {
    res.send(`<h1>Pet delete recibida</h1>`)
})

server.listen(3001, ()=>{
    console.log(`Server on port 3001`.red)
});




/* 

//Forma vieja 

const http = require('http');
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

