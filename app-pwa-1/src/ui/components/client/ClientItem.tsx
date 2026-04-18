import type { Client } from "../../../domain/client/client.type"

type Props = {
  client: Client;
  onPay: (id: string) => void;
}

export default function ClientItem({client, onPay}: Props) {

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow">
      <div className="flex items-center">
        {
          client.payed ? (
            <span className="text-white-800 line-through">{client.title}</span>
          ) : (
            <span className="text-purple-800">{client.title}</span>
          )
        }
      </div>
      <div className="flex flex-row gap-2">
          <button 
            type="button" 
            onClick={() => onPay(client.id)}
            className="bg-green-200 hover:bg-green-400 p-4 text-green-500 hover:text-green-700">
              Pagado
          </button>

      </div>
    </div>
  )
}
