import {selectCompletedClients } from "../../application/client/useClientSelectors"
import useClientActions from "../../application/client/useClientActions"
import ClientList from "../components/client/ClientList"

function CompletedPage() {

  const { client, onPay } = useClientActions();
  const completedClients = selectCompletedClients(client); 

  return (
    <>
      <>
          <h3>Clientes</h3>
          <ClientList clients={completedClients} onPay={onPay} />
        </>
    </>
  )
}

export default CompletedPage
