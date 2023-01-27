const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (reqest, response) => {//request=>user //response=>sent back
    // console.log(request);
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello Server');
    response.end();

};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running on port ${port}`);
})
