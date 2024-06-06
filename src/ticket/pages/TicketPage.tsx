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
}

export const TicketsPage = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);

     useEffect(() => {
       const fetchTickets = async () => {
         try {
           console.log(import.meta.env.VITE_API_BACK)
           const response = await axios.get(`${import.meta.env.VITE_API_BACK}tickets`);
            console.log(response)
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

  return (
    <>
      
      <div className="mt-16">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket._id}
            title={ticket.title}
            _id={ticket._id}
            priority={ticket.priority}
            status={ticket.status}
          />
        ))}
      </div>
    </>
  );
};
