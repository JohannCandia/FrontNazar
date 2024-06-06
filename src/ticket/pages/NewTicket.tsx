
export const NewTicket = ({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: () => void; }) => {



    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <>
            <div className=' fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center p-6' onClick={handleModalClick} >
                <div className='w-3/4  modal-content overflow-auto max-h-screen scroll-block '>
                    <div className='bg-white p-16 rounded-xl  mt-10'>
                        <form>
                            <h2 className='text-xl text-center font-bold text-gray-700'>Nuevo ticket</h2>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="affair">Asunto</label>
                                <input
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    type="text"
                                    placeholder='Ingrese el asunto del ticket'
                                    id='affair'
                                />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="type">Tipo</label>
                                <select
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    name=""
                                    id="type"
                                    defaultValue=""
                                >
                                    <option value="">Seleccione el tipo</option>
                                    <option value="option1">Opción 1</option>
                                    <option value="option2">Opción 2</option>
                                    <option value="option3">Opción 3</option>
                                </select>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="state">Estado</label>
                                <select
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    name=""
                                    id="state"
                                    defaultValue=""
                                >
                                    <option value="">Seleccione el estado</option>
                                    <option value="open">Abierto</option>
                                    <option value="close">Cerrado</option>
                                </select>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="priority">Prioridad</label>
                                <select
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    name=""
                                    id="priority"
                                    defaultValue=""
                                >
                                    <option value="">Seleccione la prioridad</option>
                                    <option value="high">Alto</option>
                                    <option value="medium">intermedio</option>
                                    <option value="low">Bajo</option>
                                </select>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="group">Grupo</label>
                                <select
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    name=""
                                    id="group"
                                    defaultValue=""
                                >
                                    <option value="">Seleccione un grupo</option>
                                    <option value="group1">Grupo 1</option>
                                    <option value="group2">Grupo 2</option>
                                    <option value="group3">Grupo 3</option>
                                </select>
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label htmlFor="agent">Agente</label>
                                <select
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigth focus:shadow-outline hover:border-blue-500'
                                    name=""
                                    id="agent"
                                    defaultValue=""
                                >
                                    <option value="">Seleccione un agente</option>
                                    <option value="agent1">agente 1</option>
                                    <option value="agent2">agente 2</option>
                                    <option value="agent3">agente 3</option>
                                </select>
                            </div>
                            
                        <div className="flex flex-col mb-4">
                            <label
                                className=""
                                htmlFor="description"
                            >
                                Descripción
                            </label>
                            <textarea
                                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                                name="description"
                                id="description"
                                cols={+ "30"}
                                rows={+ "3"}
                            >
                            </textarea>
                        </div>
                            <div className="mb-4">
                                <button
                                    className="bg-blue-800 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Crear
                                </button>
                            </div>
                            <div className="mb-4">
                                <button
                                    className="bg-red-700 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={onCancel}
                                > Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}