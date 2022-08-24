import { IClient } from "src/models/client.interface";
import * as ClientService from '../services/client.service';

// get all the clients
export const getClientList = async (req:any, res:any) => {
  const clientList: IClient[] = await ClientService.getAllClients();
  try {
    res.status(200).send(clientList);
  } catch (e:any) {
    res.status(404).send(e.message);
  }
};