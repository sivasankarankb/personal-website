import { series } from 'gulp'
import { deleteAsync } from 'del'
import { makeDirectory } from 'make-dir'

async function removeOutDir(){
    return deleteAsync('dist')
}

async function createOutDir(){
    return makeDirectory('dist')
}

export default series(
    removeOutDir, createOutDir
)
