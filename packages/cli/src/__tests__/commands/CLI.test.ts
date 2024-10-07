import { CLI } from "../../CLI";
import { firstValueFrom } from "rxjs";

const cliInstance = new CLI({}, ["generage"]);
it("no params should return help", async () => {
  const spy = jest
    .spyOn(cliInstance, "help")
    .mockImplementation(() => "Help me");
  await cliInstance.parse([]);
  expect(spy).toHaveBeenCalledTimes(1);
});

it('unknown command',async ()=>{
   await expect(firstValueFrom(cliInstance.parse(['doesnotexist']))).resolves.toThrow()
})