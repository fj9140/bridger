import { CLI } from "./CLI";
import { Generate } from "./Generate";
import { catchError, lastValueFrom ,of} from "rxjs";

function main() {
  const cli = new CLI(
    {
      generate: new Generate(),
    },
    ["generate"]
  );

  const commandArray = process.argv.slice(2);

  cli.parse(commandArray).pipe(
    catchError(err=>{
        return of(null)
    })
  ).subscribe((result) => {
    console.log(result);
  });
}

main();
