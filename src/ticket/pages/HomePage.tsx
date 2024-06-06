import { Route, Routes } from "react-router-dom";
import { SideBar } from "../../layout/Sidebar";
import { TicketsPage } from "./TicketPage";
import { NavBar } from "../../layout/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex">
        
      </div>
      <SideBar />
      <NavBar />
      <div className="flex-1 ml-56 overflow-y-auto bg-gray-50  ">
      <Routes>
          <Route path="/tickets" element={<TicketsPage />} />

      </Routes>
      </div>
    </>
  );
};

export default HomePage;
