
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());
app.use(require('./router'));
app.listen(port, () => {
    console.log("app is listening on " + port);
});