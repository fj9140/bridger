import type { Commands,Command } from "@bridger/internals";

export class CLI implements Command{
    constructor(private readonly cmds:Commands,private readonly ensureBinaries:string[]){}
    
    async parse(argv:string[]):Promise<string|Error>{
        return this.help()
    }

    help(error?:string){
        return 'help'
    }
}