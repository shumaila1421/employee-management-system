import Employee from "../models/Employee";

export const getEmployees = async (req, res) => {
  try {
    const { department } = req.query;

    const where = {};

    if (department) where.department = department;

    const employees = await Employee.find(where)
      .sort({ createdAt: -1 })
      .populate("userId", "email role")
      .lean();

    const result = employees.map((emp) => ({
      ...emp,
      id: emp._id.toString(),
      user: emp.userId
        ? { email: emp.userId.email, role: emp.userId.role }
        : null,
    }));
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch the employees" });
  }
};

export const createEmployees = async (req, res) => {};
export const updateEmployees = async (req, res) => {};
export const deleteEmployees = async (req, res) => {};
export const createEmployees = async (req, res) => {};
