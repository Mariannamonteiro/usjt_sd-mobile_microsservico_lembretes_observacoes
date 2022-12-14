const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

palavraChave = "importante"
const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = 
            observacao.texto.includes(palavraChave)
            ? "importante" : "comum";
            console.log(observacao)
        axios.post("http://localhost:10000/eventos",{
            tipo: "ObservacaoClassificada",
            dados: observacao
        })    
    }
}
app.post('/eventos', (req, res) =>{
    try{
        funcoes[req.body.tipo](req.body.dados);
    }catch(ex){}
    res.status(200).send({msg: "ok"})
})



app.listen(7000, async() => {
    console.log("Classificacao. Porta 7000")

    try{
        
        const resp = await axios.get('http://localhost:10000/eventos')
        resp.data.forEach((valor,indice, colecao) => {
            try{
                funcoes[valor.tipo](valor.dados)
            }catch(e){}
        
        })

    }catch(e){console.log(e)}
})