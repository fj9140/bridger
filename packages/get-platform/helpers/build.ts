import { build } from "../../../helpers/compile/build";

void build([
    {
        name:"default",
        bundle:true,
        splitting:true,
        format:"esm"
    }
])