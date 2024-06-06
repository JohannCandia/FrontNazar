import React from "react";

interface TicketProps {
  _id: string;
  title: string;
  status: string;
  priority: string;
}

export const Ticket: React.FC<TicketProps> = ({
  _id,
  title,
  priority,
  status,
}) => {
  const priorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };
  const priorityColorBorder = (priority: string) => {
    switch (priority) {
      case "High":
        return "border-red-500";
      case "Medium":
        return "border-yellow-500";
      case "Low":
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
          )} ${priorityColor(priority)} `}
        >
          <div className="flex-1">
            <h1 className="text-xl font-semibold uppercase text-gray-800">
              {title} # <span className="font-normal"></span>
            </h1>
          </div>

          <div className="flex flex-col items-start md:items-end text-sm mt-4 md:mt-0">
            <span
              className={` rounded-full text-xs font-semibold ${priorityColor(
                priority
              )} capitalize`}
            >
              {priority} Priority
            </span>
            <h2 className="text-gray-400">{status}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
