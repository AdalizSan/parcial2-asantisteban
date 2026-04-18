import { useState } from "react";
import type { Client } from "../../domain/client/client.type";
import validateClientTitle from "../../domain/client/client.validors.";
import generateId from "../../shared/generateId.util";

export default function useClientActions() {

  const [client, setClients] = useState<Client[]>([]);

  const addClient = (title: string) => {
    if (!validateClientTitle(title))
      return;

    const newClient: Client = {
      id: generateId(),
      title,
      payed: false,
      addedAt: new Date(),
    }
    const updatedClients = [...client, newClient];
    setClients(updatedClients);
  }

  const onPay = (id: string) => {
    const updatedClients = client.map((client) => {
      if (client.id === id) {
        return {
          ...client,
          payed: !client.payed,
        }
      }
      return client;
    });
    setClients(updatedClients);
  }



  return {
    client,
    addClient,
    onPay,
  }
}
