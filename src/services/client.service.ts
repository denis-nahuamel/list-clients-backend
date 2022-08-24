import { items } from "../data/clients";
import { IClient } from "src/models/client.interface";

// Get the users from the source.
export const getAllClients = async (): Promise<IClient[]> => {
    return items;
};