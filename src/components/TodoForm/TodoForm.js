import React, { useState } from "react";
import Styled from "styled-components";
import { Context } from "../../context/index";

const Form = Styled.form`
  width: 90%;
  max-width: 300px;
  background-color: #fff;
  padding: 33px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > label {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #1E1E1F;
  margin-bottom: 26px;
  }

  & > textarea {
  background-color: #F9FBFC;
  border: 2px solid #202329;
  border-radius: 2px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  color: #1E1E1F;
  font-size: 20px;
  text-align: center;
  padding: 12px;
  height: 96px;
  width: calc(100% - 25px);
  }

  & > textarea::placeholder {
    color: #A5A5A5;
    font-family: 'Montserrat';
    font-weight: 400;
  }

  & > textarea:focus {
    outline-color: #61DAFA;
  }

  & > div{
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > button{
      cursor: pointer;
      display: inline-block;
      font-size: 20px;
      color: #202329;
      font-weight: 400;
      width: 120px;
      height: 48px;
      border-radius: 2px;
      border: none;
      font-family: 'Montserrat';
    }
    & > button:first-child{
      background: transparent;
    }
    & > button:last-child{
      background: #61DAFA;
      box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
    }
  }
`;

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(Context);

  const [newTodo, setNewTodo] = useState("");

  const onChange = (e) => {
    setNewTodo(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setOpenModal(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>Escribe un nuevo ToDo</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder="new ToDo item"
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Añadir</button>
      </div>
    </Form>
  );
}

export { TodoForm };
