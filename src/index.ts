import * as coap from "coap";
import { Server } from "coap";

const server: Server = coap.createServer({ type: 'udp6' });

server.on('request', (req, res) => {
    console.log("request successful!")
    res.end('Hello ' + req.url.split('/')[1] + '\n')
})

// the default CoAP port is 5683

// Example Server

const portOrCallback = 5683;
server.listen(portOrCallback);
