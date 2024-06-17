"use client";
import React, {useState} from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import TODOHero from "../components/TODOHero";
import TODOList from "../components/TODOList";

function Home() {
  const [todos, setTodos] = React.useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
    return(
        <div className="wrapper">
            <Header/>
            <TODOHero todos_completed={0} total_todos={0} />
            <Form todos={todos} setTodos={setTodos} />
            <TODOList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Home;