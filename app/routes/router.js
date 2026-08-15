const express = require("express");
const router = express.Router();

const validarNotas = require("./validator");

router.post("/resultado", validarNotas, (req, res) => {

    const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);

    const media = (nota1 + nota2) / 2;

    let conceito;

    if (media > 9.0 && media <= 10.0) {
        conceito = "A";
    } else if (media > 7.5 && media <= 9.0) {
        conceito = "B";
    } else if (media > 6.0 && media <= 7.5) {
        conceito = "C";
    } else if (media > 4.0 && media <= 6.0) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    const resultado = {
        nota1: nota1,
        nota2: nota2,
        media: media.toFixed(2),
        conceito: conceito
    };

    res.render("pages/index", { resultado });
});

function validarNotas(req, res, next) {

    const nota1 = Number(req.body.nota1);
    const nota2 = Number(req.body.nota2);

    if (isNaN(nota1) || isNaN(nota2)) {
        return res.send("Digite notas válidas!");
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        return res.send("As notas devem estar entre 0 e 10!");
    }

    next();
}

module.exports = router;
module.exports = validarNotas;