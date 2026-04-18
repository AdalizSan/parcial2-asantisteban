import ClientForm from "../components/client/ClientForm"
import ClientList from "../components/client/ClientList"
import useClientActions from "../../application/client/useClientActions"

function HomePage() {
  
  const {client, addClient, onPay} = useClientActions();

  return (
    <>
      <ClientForm addClient={addClient}/>
      <h3>Listado Clientes</h3>
      <ClientList clients={client} onPay={onPay} />
    </>
  )
}

export default HomePage
