import { useState } from 'react'

type Props = {
  addClient: (title: string) => void;
}

export default function ClientForm({addClient}: Props) {
  const [title, setTitle] = useState('');
  
  const addClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addClient(title);
    setTitle('');
  }

  return (
    <form onSubmit={addClientSubmit} className="w-full flex flex-row gap-4">
      <input
        type="text"
        value={title}
        placeholder="Descripción Cliente"
        onChange={(e) => setTitle(e.target.value)}
        className="border border-purple-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-black-500 text-white rounded px-4 py-2 hover:bg-black-600 transition-colors duration-200"
      >
        Agregar
      </button>
    </form>
  )
}