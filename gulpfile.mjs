import { src, dest, series } from 'gulp'
import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'

async function removeOutDir(){
    return deleteAsync('dist')
}

async function createOutDir(){
    return makeDirectory('dist')
}

function copyHTML(){
    return src('src/index.html').pipe(dest('dist'))
}

export default series(
    removeOutDir, createOutDir, copyHTML
)
