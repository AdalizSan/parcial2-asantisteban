import type { Client } from "../../domain/client/client.type";

export function selectCompletedClients(clients: Client[]): Client[]{
  return clients.filter((client) => client.payed);
}

export function selectPendingClients(client: Client[]): Client[]{
  return client.filter((client) => !client.payed);
}
