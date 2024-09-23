import { execa, execaNode, ResultPromise } from "execa";
import path from "path";

export type BaseContext={
    fixture:(name:string)=>void
    cli:(...input:string[])=>ResultPromise
}

export const jestContext={
    new: function(ctx?:unknown){
        const c=ctx?ctx as BaseContext:({} as BaseContext)
        beforeEach(()=>{
            const originalCwd=process.cwd()
            c.fixture=()=>{
                // TODO
            }

            c.cli=(...input)=>{
                return execaNode(path.join( originalCwd,'../cli/build/index.js'))
            }
            
        })

        return factory(ctx as BaseContext)
    }
}

type ContextContributor<Context,NewContext>=(ctx:Context)=>Context & NewContext
type ContextContributorFactory<Settings,Context,NewContext>=Settings extends{}
    ? ()=>ContextContributor<Context,NewContext>
    : (settings:Settings)=>ContextContributor<Context,NewContext>

function factory<Context>(ctx:Context){
    return {
        add<NewContext>(contextContributor:ContextContributor<Context,NewContext>){
            const newCtx=contextContributor(ctx)
            return factory<Context & NewContext>(newCtx)
        },
        assemble():Context{
            return ctx
        }
    }
}

type ConsoleContext={}
export const jestConsoleContext:ContextContributorFactory<{},BaseContext,ConsoleContext>=()=>(c)=>{
    return c as BaseContext & ConsoleContext
}