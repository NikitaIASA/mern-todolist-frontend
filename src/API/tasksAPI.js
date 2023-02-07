import axios from "../axios";

export const getTasks = async () => {
  try {
    const {data} = await axios.get("/tasks");
    return data;
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
