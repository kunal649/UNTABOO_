const http = require("node:http");
const app = require('./app.js');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

async function start(){
    try{
        server.listen(PORT, () =>{
            console.log(`Server running on PORT ${PORT}`);
        });
    }catch(err){
        console.error(err);
    };
}
start();
