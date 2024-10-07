import { HelpError } from "@bridger/internals";
import { CLI } from "./CLI";
import { Generate } from "./Generate";
import { catchError, lastValueFrom ,of,map} from "rxjs";

function main() {
  const cli = new CLI(
    {
      generate: new Generate(),
    },
    ["generate"]
  );

  const commandArray = process.argv.slice(2);

  cli.parse(commandArray).pipe(
  ).subscribe((result) => {
    if(result instanceof HelpError){
      console.error(result.message);
      process.exit(1);  
    }
    console.log(result);
  });
}

main();
