import { BuildOptions,build } from "../../../helpers/compile/build";


const cliBuildConfig:BuildOptions={
    name:'cli',
    entryPoints:['src/bin.ts'],
    outfile:'build/index',
}

build([cliBuildConfig]);