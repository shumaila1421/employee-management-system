import React, { useCallback, useEffect, useState } from "react";
import { dummyAttendanceData } from "../assets/assets";

const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = useCallback(async () => {
    setHistory(dummyAttendanceData);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return <div>Attandance</div>;
};

export default Attendance;
