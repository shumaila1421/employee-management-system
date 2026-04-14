import React from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeDashboard = ({ data }) => {
  const emp = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This Month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Welcome, <span className="text-indigo-600"> {emp?.firstName}!</span>
        </h1>
        <p className="text-slate-500 mt-1 text-sm sm:text-base">
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300  relative flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 group overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 rounded-r-full opacity-70 group-hover:opacity-100" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">{card.title}</p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {card.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{card.subtitle}</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
              <card.icon className="w-6 h-6" />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to={"/attendance"}
          className=" w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          Mark Attendance
          <ArrowRightIcon className="w-4 h-4" />
        </Link>

        <Link
          to={"/leave"}
          className=" w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold bg-white hover:bg-slate-100 hover:shadow-md transition-all duration-200 active:scale-95"
        >
          Apply for Leave
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
