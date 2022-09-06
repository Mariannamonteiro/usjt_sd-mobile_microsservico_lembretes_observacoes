// express é um framework web para o node que manipula requisições HTTP
const express = require('express')
const app = express()
app.use(express.json())

const observacoes = {}
let contador = 0

app.post('/lembretes/:id/observacoes', (req, resp) => {
    

})

app.get('/lembretes/:id/observacoes', (req, resp) => {

})

// sempre colocar no final, se não o serviço não enxerga os metodos HTTP
app.listen(5000, () => console.log('Observacoes. Porta 5000'))
