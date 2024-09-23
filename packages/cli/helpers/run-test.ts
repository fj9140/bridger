import { execa, execaSync } from "execa";

export async function main(){
    execa('jest',['--silent'],{
        stdio:'inherit',
        env:process.env,
    })
}

void main()
