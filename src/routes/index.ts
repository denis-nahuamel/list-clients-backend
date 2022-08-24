
import { Application } from "express";
import * as ClientController from "../controllers/client.controller";

export const routes = ( app: Application ):any => {
    // List all the clients in the default route.
    app.get( "/", ClientController.getClientList);

};