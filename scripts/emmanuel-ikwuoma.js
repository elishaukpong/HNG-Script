const { createServer } = require("http")

const PORT = process.env.PORT || 3000

const details = {name: "Emmanuel Ikwuoma", hngID: "HNG-04940", lang: "JavaScript"}

createServer((req, res) => {
    if(req.url == "/") {
        res.write(`Hello World, this is ${details.name} with HNGi7 ID ${details.hngID} using ${details.lang} for stack 2 task`)
        res.end();
    }
    else if(req.url == "/json") {
        res.write(JSON.stringify(details))
        res.end();
    }
}).listen(PORT, () => console.log("PORT 3000"))