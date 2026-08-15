const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");


let dia = "Nao definido";




if (numero == 1){
     dia = "Domingo";
} else if (numero == 2){
     dia = "Segunda-feira";
} else if (numero == 3){
     dia ="Terça=feira";
} else if (numero == 4){
     dia = "Quarta-feira";
} else if ( numero == 5){
     dia = "Quinta-feira";
} else if (numero == 6){
     dia = "Sexta-feira";
} else if (numero == 7){
     dia = "Sábado";
}

let obJson = {dia};

res.render("pages/index", {
     resultado: objJson
});

router.post("/dia",
     body("numero").isInt({
     min: 1, max: 7
}),  (req, res) => {

        const listaErros = validationResult(req);
        if (listaErros.isEmpty()){
          let numero = parseInt(req.body.numero);
        } else{
          
        }
}
);

module.exports = router;