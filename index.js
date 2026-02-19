// const http=require('http');
// const myserver=http.createServer((req,res)=>{
//     // console.log("server1")
//     // res.end("this is my first server");
//     if(req.url=='/'){
//         res.end("this is my home page");
//     }
//     else if(req.url=="/about"){
//         res.end("this is my about page");
//     }
//     else{
//         res.end("404 page is not found");
//     }
// })
// myserver.listen(8000,()=> console.log("server is run"))
// const http = require('http');

// const myserver = http.createServer((req, res) => {
//     // Set header so browser knows we're sending HTML
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (req.url == '/') {
//         res.end("<h1>Welcome to ABES College</h1><p>Home Page</p>");
//     }
//     else if (req.url == '/about') {
//         res.end(`
//             <h1>About ABES College</h1>
//             <img src="https://imgs.search.brave.com/M-OwMZlup3Qtw0Yr6O6Y7pNdo6G94iAi10xnNNBdF4s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9vc3RteXRh/bGVudC5jb20vaW1n/L3VuaXYvYWJlcy1l/bmdpbmVlcmluZy1j/b2xsZWdlLWdoYXpp/YWJhZC1jYW1wdXMt/YWRtaXNzaW9uLndl/YnA" alt="ABES College Building" width="500"/>
//         `);
//     }
//     else if (req.url == '/contact') {
//         res.end(`
//             <h1>Contact Us</h1>
//             <p>ABES Engineering College</p>
//             <p>Campus 1, 19th KM Stone, NH-24, Ghaziabad, Uttar Pradesh, India</p>
//             <p>Email: info@abes.ac.in | Phone: +91-120-7135112</p>
//         `);
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end("<h1>404 - Page Not Found</h1>");
//     }
// });

// myserver.listen(8000, () => console.log("Server is running on port 8000"));
