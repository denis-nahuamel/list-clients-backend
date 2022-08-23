"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes = (app) => {
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.send("hello world");
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map