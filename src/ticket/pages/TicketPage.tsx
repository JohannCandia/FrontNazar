import { useEffect, useState } from "react";
import { Ticket } from "./components/Ticket";
import axios from "axios";

interface TicketData {
  _id: string;
  title: string;
  type: string;
  createdAt: string;
  priority: string;
  status: string;
  description: string;
}

export const TicketsPage = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<TicketData[]>([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BACK}tickets`);
        setTickets(response.data);
      } catch (error) {
        if ((error as any).response) {
          console.error('Error response', (error as any).response);
        } else if ((error as any).request) {
          console.error('Error request', (error as any).request);
        } else {
          console.error('Error', (error as any).message);
        }
      }
    }
    fetchTickets();
  }, []);

  useEffect(() => {
    let filtered = [...tickets];

    if (typeFilter) {
      filtered = filtered.filter(ticket => ticket.type === typeFilter);
    }

    if (priorityFilter) {
      filtered = filtered.filter(ticket => ticket.priority === priorityFilter);
    }

    if (statusFilter) {
      filtered = filtered.filter(ticket => ticket.status === statusFilter);
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setFilteredTickets(filtered);
  }, [tickets, typeFilter, priorityFilter, statusFilter, sortOrder]);

  const updateTicketInState = (updatedTicket: TicketData) => {
    setTickets(prevTickets => 
      prevTickets.map(ticket => 
        ticket._id === updatedTicket._id ? updatedTicket : ticket
      )
    );
  };

  return (
    <>
      
      <div className="mt-16 container mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Todos los tipos</option>
            <option value="technical">Técnico</option>
            <option value="functional">Funcional</option>
          </select>
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Todas las prioridades</option>
            <option value="high">Alta</option>
            <option value="medium">Media</option>
            <option value="low">Baja</option>
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Todos los estados</option>
            <option value="open">Abierto</option>
            <option value="closed">Cerrado</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded">
            <option value="asc">Fecha Ascendente</option>
            <option value="desc">Fecha Descendente</option>
          </select>
        </div>
        <div className="grid gap-4">
          {filteredTickets.map((ticket) => (
            <Ticket
              key={ticket._id}
              {...ticket}
              updateTicketInState={updateTicketInState}
            />
          ))}
        </div>
      </div>
    </>
  );
};
