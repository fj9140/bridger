import { exec } from "child_process";

export async function main(){
    exec("jest",(err,stdout,stderr)=>{
        console.log(stdout)
        console.error(err)
    })
}

void main()
