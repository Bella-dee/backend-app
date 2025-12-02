import { uuidv7 } from "uuidv7";
import { TodosModel } from "../models/todosModel.js";

export const createNewTodos= async (req, res) => {
  try {
    const {
      type,
      description,
      isCompleted,
    } = req.body;

    const newTodos = new TodosModel({
      id: uuidv7(),
      type,
      description,
      isCompleted,
      createdAt: new Date(),
    });

    await newTodos.save();

    return res
      .status(201)
      .json({ message: " New Todos created succesfully", house: newTodos });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getTodos = async (_, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    return res.status(200).json({
      success: true,
      message: "todos fetched successfully",
      comment: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to fetch todos",
      error: error.message,
    });
  }
};



export const getTodosTitle = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await response.json();

  return res.status(200).json({
    success: true,
    message: " todos title successfully fetched",
    todos: {
      id: data?.id,
      todosTitle: data?.title,
    },
  });
};

export const getTodosCompleted = async (req, res) => {
  const id = req.params?.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const data = await response.json();

  return res.status(200).json({
    success: true,
    message: "todos completed successfully fetched",
    todos: {
      id: data?.id,
      todosCompleted: data?.completed,
    },
  });
};

