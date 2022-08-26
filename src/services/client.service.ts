import clients  from "../data/clients.json";
import { IClient } from "src/models/client.interface";

// Get the users from the source.
export const getAllClients = async (): Promise<IClient[]> => {
    return clients;
};