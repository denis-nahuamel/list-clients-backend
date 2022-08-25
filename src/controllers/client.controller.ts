import { IClient } from "src/models/client.interface";
import * as ClientService from '../services/client.service';
import {Request, Response} from "express";

// get all the clients
export const getClientList = async (req:Request, res:Response) => {
  const clientList: IClient[] = await ClientService.getAllClients();
  try {
    res.status(200).send(clientList);
  } catch (e:any) {
    res.status(404).send(e.message);
  }
};