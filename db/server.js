const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/api/db:id', (req,res) =>{
    const result = 
    res.json(result);
});

app.listen(PORT, () => {

});