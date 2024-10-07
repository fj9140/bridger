import { Command, HelpError, arg, isError } from "@bridger/internals";
import { bold, dim, red } from "kleur/colors";
import { of } from "rxjs";

export class Generate implements Command {
  private static help = `
Generate artifacts
${bold('Usage')}
    ${dim('$')} bridger generate [options]

${bold('Options')}
    -h, --help    Displays this help message
    --schema      Path to the OpenAPI schema
`;

  parse(argv: string[]) {
    const args = arg(argv, {
      "--help": Boolean,
      "-h": "--help",
      "--schema":String
    });

    if (isError(args)) {
      return of(this.help(args.message));
    }

    if (args["--help"]) {
      return of(this.help());
    }
    return this._run();
  }

  private _run() {
    return of();
  }

  public help(error?: string): string | HelpError {
    if (error) {
      return new HelpError(`\n${bold(red(`!`))} ${error}\n${Generate.help}`);
    }
    return Generate.help;
  }
}
