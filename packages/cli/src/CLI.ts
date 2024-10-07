import {
  Commands,
  Command,
  unknownCommand,
  HelpError,
  arg,
  isError,
} from "@bridger/internals";
import { bold, green, dim } from "kleur";
import { Observable, of } from "rxjs";

export class CLI implements Command {
  constructor(
    private readonly cmds: Commands,
    private readonly ensureBinaries: string[]
  ) {}

  private static help = `
    ${
      process.platform === "win32" ? "" : bold(green("◭  "))
    }Bridger is a modern API toolkit

    ${bold("Usage")}
        ${dim("$")} birdger [command]

    ${bold("Commands")}
        generate Generate artifacts from OpenAPI spec

    ${bold("Flags")}
        --help, -h
    `;

  parse(argv: string[]): Observable<string | HelpError> {
    const args = arg(argv, {
      "--help": Boolean,
    });

    if (isError(args)) {
      return of(this.help(args.message));
    }

    if (args._.length === 0) {
      return of(this.help());
    }

    const cmdName = args._[0];

    const cmd = this.cmds[cmdName];
    if (cmd) {
      return cmd.parse([]);
    } else {
      return of(unknownCommand(this.help(), args._[0]));
    }
  }

  help(error?: string) {
    return CLI.help;
  }
}
