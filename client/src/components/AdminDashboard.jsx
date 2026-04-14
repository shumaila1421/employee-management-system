import {
  Building2Icon,
  Calendar1Icon,
  CalendarIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      label: "Total Employees",
      description: "Active workforce",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      label: "Departments",
      description: "Organization units",
    },
    {
      icon: CalendarIcon,
      value: data.todayAttendance,
      label: "Todays's Attendance",
      description: "Checked in today",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      label: "Pending Leaves",
      description: "Awaiting approval",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="text-slate-500 mt-1 text-sm sm:text-base">
          Welcome back, Admin - here's your overview{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 ">
        {stats.map((s) => (
          <div
            key={s.label}
            className="shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300  relative flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 group overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 rounded-r-full opacity-70 group-hover:opacity-100" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">{s.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {s.value}
              </p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
              <s.icon className="w-6 h-6" />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
