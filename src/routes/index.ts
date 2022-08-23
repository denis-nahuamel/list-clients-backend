
import { Application } from "express";

export const routes = ( app: Application ):any => {

    app.get( "/", ( req, res ) => {
        res.send( "hello world" );
    } );

};