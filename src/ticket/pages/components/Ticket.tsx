import React, { useState } from "react";
import { useAppDispatch } from '../../../redux/hooks/hook';
import { updateTicket } from '../../../redux/ticketSlice';
import Swal from 'sweetalert2';
import { formatDate } from '../utils/formatDate'; // Asegúrate de ajustar la ruta según tu estructura de archivos

export interface TicketData {
  _id: string;
  title: string;
  type: string;
  createdAt: string;
  priority: string;
  status: string;
  description: string;
}

interface TicketProps {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  type: string;
  updateTicketInState: (updatedTicket: TicketData) => void;
}

export const Ticket: React.FC<TicketProps> = ({
  _id,
  title,
  description,
  priority,
  status,
  createdAt,
  type,
  updateTicketInState
}) => {
  const dispatch = useAppDispatch();
  const [newPriority, setNewPriority] = useState(priority);
  const [newStatus, setNewStatus] = useState(status);

  const handleUpdate = async (updates: Partial<TicketData>) => {
    try {
      const updatedTicket = await dispatch(updateTicket({ id: _id, updates })).unwrap();
      Swal.fire({
        icon: 'success',
        title: 'Ticket actualizado',
        text: 'El ticket se ha actualizado correctamente',
      });
      updateTicketInState(updatedTicket);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al actualizar el ticket. Inténtalo de nuevo.',
      });
    }
  };

  const handlePriorityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPriority = e.target.value;
    setNewPriority(newPriority);
    await handleUpdate({ priority: newPriority });
  };

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setNewStatus(newStatus);
    await handleUpdate({ status: newStatus });
  };

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const priorityColorBorder = (priority: string) => {
    if (newStatus === "closed") {
      return "border-gray-500";
    }
    switch (priority) {
      case "high":
        return "border-red-500";
      case "medium":
        return "border-yellow-500";
      case "low":
        return "border-green-500";
      default:
        return "border-gray-500";
    }
  };

  return (
    <>
      <div className="bg-gray-50 p-2 flex flex-col items-center space-y-24">
        <div
          className={`flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 w-3/4 border-l-8 ${priorityColorBorder(
            priority
          )} ${newStatus === "closed" ? "bg-gray-50" : ""}`}
        >
          <div className="flex-1">
            <h1 className="text-xl font-semibold uppercase text-gray-800">
              {title} # <span className="text-gray-300">{_id}</span>
            </h1>
            <p className="text-gray-500 mt-6">{description}</p>
          </div>

          <div className="flex flex-col items-start md:items-end text-sm mt-4 md:mt-0">
            {newStatus !== "closed" && (
              <span
                className={`rounded-full text-xs font-semibold ${priorityColor(
                  priority
                )} capitalize`}
              >
                {type} 
              </span>
            )}
            <h2 className="text-gray-400 uppercase">{status}</h2>
            <h2 className="text-gray-500">{formatDate(createdAt)}</h2>

            <div className="mt-4">
              {newStatus !== "closed" && (
                <select
                  value={newPriority}
                  onChange={handlePriorityChange}
                  className="mr-2 text-gray-600"
                >
                  <option value="high">Alta</option>
                  <option value="medium">Media</option>
                  <option value="low">Baja</option>
                </select>
              )}
              <select
                value={newStatus}
                onChange={handleStatusChange}
                className="mr-2 text-gray-600"
              >
                <option value="open">Abierto</option>
                <option value="closed">Cerrado</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
