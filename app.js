// express.json() middleware for body parser

const express = require('express');
const app = express();

// http://localhost:3000?id=123&name='John' -> req.query
app.get('/', (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    console.log(JSON.stringify(req.query));
    res.send('Done');
});

// http://localhost:3000/user/h012 -> req.params
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('id = ', id);
    res.send('Done');
});

// client sends json data -> req.body
// express.json(): json body parser
app.post('/json', express.json(), (req, res) => {
    const body = req.body;
    console.log(JSON.stringify(body));
    res.send('Done');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});