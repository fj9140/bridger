import { exec } from "child_process";

export async function main(){
    exec("jest",{
        env:process.env,
        
    },(err,stdout,stderr)=>{
        console.log(stdout)
        console.error(err)
    })
}

main()
