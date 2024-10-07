import { jestContext, jestConsoleContext } from "@bridger/get-platform";
import { Generate } from "../../Generate";
import { firstValueFrom } from "rxjs";

const ctx = jestContext.new().add(jestConsoleContext()).assemble();

describe("using cli", () => {
  it("should work with a custom output dir", async () => {});
});

describe("--schema from project directory", () => {
  it("--schema relative path: should work", async () => {
    const result = await firstValueFrom(new Generate().parse(["--schema=./schema.yaml"]));
    expect(result).toMatchInlineSnapshot(`
        aslkfjlk
    `);
  });
});
