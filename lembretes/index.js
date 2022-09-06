const express = require('express')
const app = express()
//estamos aplicando um middleware
app.use(express.json())

const lembretes = {}
let contador = 0

//POST cadastrar um lembrete novo
//lochalhost:4000/lembretes
app.get('/lembretes',(req, res) => {
    res.status(200).send(lembretes)
})

//GET obter a lista de lembretes
//localhost:40000/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    const texto = req.body.texto
    lembretes[contador] = {contador, texto}
    res.status(201).end()

})

app.listen(4000, () => console.log('Lembretes. Porta 4000'))


