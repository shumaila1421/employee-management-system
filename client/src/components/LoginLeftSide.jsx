const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-950 relative overflow-hidden border-r border-slate-700">
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col justify-center p-12 lg:p-20 w-full h-full">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug tracking-tight">
          Welcome to <br /> Employee Management Hub
        </h1>

        <p className="text-indigo-200 text-lg max-w-md leading-relaxed">
          Monitor tasks, leaves, payroll, and team performance efficiently from
          a single dashboard.
        </p>
      </div>
    </div>
  );
};

export default LoginLeftSide;
