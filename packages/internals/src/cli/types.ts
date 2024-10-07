import { Observable } from "rxjs";


export interface Command{
    parse(argv:string[]):Observable<string|Error>
}

export type Commands={[command:string]:Command}