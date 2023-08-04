const express = require('express')
const app = express()
const PORT=3001

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

app.get('/spotify', (req, res)=>{
    res.status(200).send({
        message: 'spotify playlist sending to you'
    })
})