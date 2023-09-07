const app = require('./app.js');


const port=process.env.port || 4000;

app.listen(port,() => {
    console.log(`Server running http://localhost:${port}`);
})