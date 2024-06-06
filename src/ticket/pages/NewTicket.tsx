import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hook';
import { createTicket } from '../../redux/ticketSlice';
import Swal from 'sweetalert2';

export const NewTicket: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: '',
        requestDate: '',
        priority: '',
        status: ''
    });

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const ticketData = {
            title: formData.title,
            description: formData.description,
            type: formData.type,
            createdAt: formData.requestDate,
            priority: formData.priority,
            status: formData.status
        };
        try {
             await dispatch(createTicket(ticketData)).unwrap();
            Swal.fire({
                icon: 'success',
                title: 'Ticket creado',
                text: 'El ticket se ha creado correctamente',
            });
            setFormData({
                title: '',
                description: '',
                type: '',
                requestDate: '',
                priority: '',
                status: ''
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al crear el ticket. Inténtalo de nuevo.',
            });
        }
    };

    return (
        <div className=' p-6'>
            <div className='md:w-3/4 lg:w-1/2 mx-auto'>
                <div className='bg-white p-4 rounded-xl'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-xl text-center font-bold text-gray-700'>Nuevo ticket</h2>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="title">Título</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline hover:border-blue-500'
                                type="text"
                                placeholder='Ingrese el título del ticket'
                                id='title'
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="description">Descripción</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                                id="description"
                                placeholder='Ingrese la descripción del ticket'
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="type">Tipo</label>
                            <select
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline hover:border-blue-500'
                                id="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione el tipo</option>
                                <option value="technical">Técnico</option>
                                <option value="functional">Funcional</option>
                            </select>
                        </div>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="requestDate">Fecha/Hora de solicitud</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline hover:border-blue-500'
                                type="datetime-local"
                                id='requestDate'
                                value={formData.requestDate}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="priority">Prioridad</label>
                            <select
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline hover:border-blue-500'
                                id="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione la prioridad</option>
                                <option value="high">Alta</option>
                                <option value="medium">Media</option>
                                <option value="low">Baja</option>
                            </select>
                        </div>
                        
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="status">Estado del ticket</label>
                            <select
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline hover:border-blue-500'
                                id="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione el estado</option>
                                <option value="open">Abierto</option>
                                <option value="closed">Cerrado</option>
                            </select>
                        </div>
                        
                        <div className="mb-4">
                            <button
                                className="bg-blue-800 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Crear
                            </button>
                        </div>
                        
                 
                    </form>
                </div>
            </div>
        </div>
    );
};
