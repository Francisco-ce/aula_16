const gulp = require('gulp');


function funcaoPadrao(callback) {
    console.log("Execultando via Gulp")
    callback();
}

function dizerOi(callback) {
    console.log("olá Gulp")
    dizerTchau();
    callback();
}

function dizerTchau() {
    console.log("tchau Gulp");
}

// exports.default = funcaoPadrao
exports.default = gulp.series(funcaoPadrao, dizerOi)
exports.dizerOi = dizerOi

//quando for função default (padrão) não precisa "chamar" no npm run gulp, mas quando for outra função é necessário "chamá-la" depois do gulp


//execução das tarefas
//primeiro importamos o Gulp 

