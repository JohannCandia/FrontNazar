import { useEffect, useRef, useState } from 'react'
// import { NewTicket } from '../pages/NewTicket'
import Swal from 'sweetalert2'
import "../index.css";
import { NewTicket } from '../ticket/pages/NewTicket';

export const NavBar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCancel = () => {
    setShowModal(false);
  }
  const handleSubmitTicket = () => {
    setShowModal(false);
    Swal.fire({
      icon: 'success',
      title: 'Ticket creado con éxito',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  useEffect(() => {
    if (showModal) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
    
    return () => {
        document.body.classList.remove('no-scroll');
    };
}, [showModal]);

  return (
    <>
      {showModal && <NewTicket onCancel={handleCancel} onSubmit={handleSubmitTicket} />}
      <div className={`fixed top-0 left-0 right-0 ml-56 z-10 bg-white shadow ${showModal ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  onClick={handleShowModal}
                > Agregar nuevo ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a href="/NewTicket" className="text-right bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"> Agregar nuevo ticket </a>
          </div>
        </div>
      </div>


    </>
  )
}