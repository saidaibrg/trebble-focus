const express = require('express')
const app = express()

app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
})

app.get('/spotify', (req, res)=>{
    res.status(200).send({
        message: 'spotify playlist sending to you'
    })
})