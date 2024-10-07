import Arg from 'arg'

export function arg<T extends Arg.Spec>(
    argv:string[],
    spec:T,
    stopAtPositional=true,
    permissive=false
):Arg.Result<T>|Error{
    try{
        return Arg(spec,{argv,stopAtPositional,permissive})
    }catch(e){
        return e as Error;
    }
}

export function isError(result:unknown):result is Error{
    return result instanceof Error
}