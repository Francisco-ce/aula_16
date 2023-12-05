const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // importação composta
const sourcemaps = require('gulp-sourcemaps');


//pipe enadear as funções

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))  
        .pipe(sourcemaps.write('./maps'))                                    
        .pipe(gulp.dest('./build/styles'));
}





function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("Execultando via Gulp")
        callback();
    }, 2000);
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
exports.default = gulp.parallel(funcaoPadrao, dizerOi)
exports.dizerOi = dizerOi

//quando for função default (padrão) não precisa "chamar" no npm run gulp, mas quando for outra função é necessário "chamá-la" depois do gulp


//execução das tarefas
//primeiro importamos o Gulp 

exports.sass =compilaSass;

//usando os watchers do Gulp - deixa as tarefas rodando automático

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}


