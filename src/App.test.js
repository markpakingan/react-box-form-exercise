import React from "react";
import App from "./App";
import { render, fireEvent} from "@testing-library/react";
import BoxList from "./Boxlist";
import NewToDoForm from "./NewTodoForm";



it("renders without crashing", () =>{
  render(<App/>)
});


// snapshot for App.js
it("matches snapshot for App.js", ()=>{
  const {asFragment} = render(<App/>)
  expect(asFragment()).toMatchSnapshot();
})

// snapshot for BoxList.js
it("matches snapshot for boxlist", ()=>{
  const {asFragment} = render(<BoxList/>)
  expect(asFragment()).toMatchSnapshot();
})

test("input field updates state correctly", () => {
  const { getByPlaceholderText } = render(<NewToDoForm addTask={() => {}} />);

  const input = getByPlaceholderText("task");

  fireEvent.change(input, { target: { value: "Task 1" } });

  expect(input.value).toBe("Task 1");
});

