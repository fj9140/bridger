import {CLI} from '../../CLI'

const cliInstance=new CLI({},['generage'])
it('no params should return help',async()=>{
   const spy=jest.spyOn(cliInstance,'help').mockImplementation(()=>'Help me')
   await cliInstance.parse([])
   expect(spy).toHaveBeenCalledTimes(1)
})
