import { Command } from "@bridger/internals";
import { of } from "rxjs";

export class Generate implements Command{

    parse(argv:string[]){
        return this._run()
    }

    private _run(){
        return of()
    }
}