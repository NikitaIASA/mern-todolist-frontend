import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("/tasks");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createTask = async (task) => {
  const response = await axios.post("/tasks", task);
  return response.data;
};

export const deleteTask = async (taskId) => {
  await axios.delete(`/tasks/${taskId}`);
};
