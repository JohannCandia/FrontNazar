import { Route, Routes, Navigate } from "react-router-dom";
import { SideBar } from "../../layout/Sidebar";
import { TicketsPage } from "./TicketPage";
import { NewTicket } from "./NewTicket";

const HomePage: React.FC = () => {
  return (
    <>
      <SideBar />
      <div className="flex-1 ml-56 overflow-y-auto bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/tickets" />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/newTicket" element={<NewTicket />} />
        </Routes>
      </div>
    </>
  );
};

export default HomePage;
