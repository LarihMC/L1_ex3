const express = require("express");
const router = express.Router();

const validarSalario = require("./validator");

router.post("/resultado", validarSalario, (req, res) => {

    const salario = Number(req.body.salario);

    let percentual;

    if (salario <= 1400) {
        percentual = 15;
    } else if (salario <= 4500) {
        percentual = 10;
    } else if (salario <= 10000) {
        percentual = 7.5;
    } else {
        percentual = 5;
    }

    const aumento = salario * (percentual / 100);
    const novoSalario = salario + aumento;

    const resultado = {
        salario: salario.toFixed(2),
        percentual: percentual,
        aumento: aumento.toFixed(2),
        novoSalario: novoSalario.toFixed(2)
    };

    res.render("pages/index", { resultado });
});



function validarSalario(req, res, next) {

    const salario = Number(req.body.salario);

    if (isNaN(salario)) {
        return res.send("Digite um salário válido!");
    }

    if (salario <= 0) {
        return res.send("O salário deve ser maior que zero!");
    }

    next();
}

module.exports = router;
module.exports = validarSalario;