import ClientItem from "./ClientItem";
import type { Client } from "../../../domain/client/client.type"

type Props = {
  clients: Client[];
  onPay: (id: string) => void;
}

export default function ClientList({clients, onPay}: Props) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {clients.map((task) => (
          <ClientItem key={task.id} client={task} onPay={onPay}  />
        ))}
      </div>
    </>
  )
}