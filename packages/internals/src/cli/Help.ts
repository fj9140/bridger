import { bold,red } from "kleur/colors";

export function unknownCommand(help: string, cmd: string):HelpError {
  return new HelpError(`\n${bold(red(`!`))} Unknown command "${cmd}\n"${help}`)
}

export class HelpError extends Error{
    constructor(msg:string){
        super(msg)
        this.name="HelpError"
        Object.setPrototypeOf(this,HelpError.prototype)
    }
}

