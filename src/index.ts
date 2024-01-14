import { Config } from "./simple-app-config";
import { NestableDataTypes } from "./constants";

/* Export Config and Nestable Data Types */
export { Config, NestableDataTypes as DataTypes };

console.log(Config.get('var1.var2.var3'))