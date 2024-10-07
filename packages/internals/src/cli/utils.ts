import Arg from 'arg'

export function arg<T extends Arg.Spec>(
    argv:string[],
    spec:T
):Arg.Result<T>|Error{
    try{
        return Arg(spec,{argv})
    }catch(e){
        return e as Error;
    }
}

export function isError(result:unknown):result is Error{
    return result instanceof Error
}