import { src, dest, series, parallel } from 'gulp'
import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'
import { exec } from 'child_process'

async function removeOutDir(){
    return deleteAsync('dist')
}

async function createOutDir(){
    return makeDirectory('dist')
}

function copyHTML(){
    return src('src/index.html').pipe(dest('dist'))
}

function buildCSS(cb){
    exec(
        'npx @tailwindcss/cli -i src/style.src.css --minify -o dist/style.css',

        function (err, stdout, stderr){
            console.log(stdout)
            console.error(stderr)
            cb(err)
        }
    )
}

function copyImages(){
    return src('src/images/**', {encoding: false}).pipe(dest('dist/images'))
}

function copyJS(){
    return src('src/scripts/**', {encoding: false}).pipe(dest('dist/scripts'))
}

export default series(
    removeOutDir, createOutDir, parallel(
        copyHTML, buildCSS, copyImages, copyJS
    )
)
