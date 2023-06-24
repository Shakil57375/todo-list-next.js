"use client";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

export default function Home() {
  const [Todo, setTodo] = useState({ title: "", description: "" });
  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (
        todosJson.filter((value) => {
          return value.title == Todo.title;
        }).length > 0
      ) {
        toast.error("You have already added this item to the list.");
      } else {
        todosJson.push(Todo);
        localStorage.setItem("todos", JSON.stringify(todosJson));
        toast.success("todos has been added");
        setTodo({ title: "", description: "" });
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([Todo]));
    }
  };
  const onChange = (event) => {
    setTodo({ ...Todo, [event.target.name]: event.target.value });
  };
  return (
    <div className="py-10 px-20 bg-gray-100 mt-16 rounded-xl">
      <h1 className="text-center font-bold text-5xl mb-4">Add Your Todo</h1>
      <div className="w-full mb-5">
        <label className="text-lg  font-semibold">Todo Title :</label>
        <input
          placeholder="Type title here"
          onChange={onChange}
          value={Todo.title}
          name="title"
          className="input mt-2 mr-6 input-bordered input-accent w-full border border-blue-500 transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg  px-5 py-2.5 mb-2"
        />
      </div>
      <div className="w-full">
        <label className="text-lg  font-semibold">Todo Description :</label>
        <input
          placeholder="Type description here"
          onChange={onChange}
          value={Todo.description}
          name="description"
          className="input mt-2 mr-6 border border-blue-500 input-bordered input-accent w-full  transition duration-300 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg  px-5 py-2.5 mb-2"
        />
      </div>
      <div className="w-full text-center my-5">
        <input
          onClick={addTodo}
          className="my-btn"
          value="Add Todo"
          type="submit"
        />
      </div>
      <Toaster/>
    </div>
  );
}
