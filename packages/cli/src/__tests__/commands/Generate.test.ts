import { jestContext,jestConsoleContext } from "@bridger/get-platform";


const ctx=jestContext.new().add(jestConsoleContext()).assemble()

describe('using cli',()=>{
    it('should work with a custom output dir',async()=>{
        ctx.fixture("example-project")
        const data = await ctx.cli("generate")
    })
})