"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
// const app = express();
// Configure routes
// routes( app );
// start the Express server
app_1.default.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map