import * as  esbuild from 'esbuild'
import { omit,pipe,transduce } from "../blaze";
import path from "path";
import {globby, globbySync} from "globby";

export type BuildOptions=esbuild.BuildOptions &{
    name?:string
}

const  DEFAULT_BUILD_OPTIONS:BuildOptions={
    target:"ES2021",
    platform:"node",
    tsconfig:'tsconfig.build.json',
    logLevel:'error'
}


const applyDefaults=(options:BuildOptions):BuildOptions=>{
    return {
        ...DEFAULT_BUILD_OPTIONS,
        format:'cjs',
        outExtension:{'.js':'.js'},
        resolveExtensions:['.ts','.js','.node'],
        entryPoints:globbySync('./src/**/*.{j,t}s',{
            ignore:["./src/__test__/**/*"]
        }),
        ...options,
        outfile:options.outfile??undefined
    }
}

function addExtensionFormat(options:BuildOptions){
    if (options.outfile && options.outExtension){
        const ext=options.outExtension['.js']
        options.outfile=`${options.outfile}${ext}`
    }
    return options
}

function createBuildOptions(optionsArr:BuildOptions[]){
    return optionsArr.map(options=>{
        return applyDefaults(options)
    })
}

async function executeEsBuild(options:BuildOptions){
    const build = await esbuild.build(omit(options,['name']) as Omit<BuildOptions,'name'>)
    const outdir=options.outdir??(options.outfile?path.dirname(options.outfile):undefined)

    return [build] as const
}

function addDefaultOutDir(options:BuildOptions){
    if(options.outfile ===undefined){
        options.outdir=getOutDir(options)
    }
    return options
}

export async function build(optionsArr:BuildOptions[]){
    return transduce.async(createBuildOptions(optionsArr),pipe.async(addExtensionFormat,addDefaultOutDir,executeEsBuild))
}


function getOutDir(options:BuildOptions){
    if(options.outfile !==undefined){
        return path.dirname(options.outfile)
    }
    
    return options.outdir ?? "dist"
}