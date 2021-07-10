import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { add_comment } from "../../Redux/CommentBox/action";
import styled from "styled-components";

export const CommentForm = ({ id, getData }) => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  let { comment } = useSelector((state) => state.Comment, shallowEqual);

  const submit = (e) => {
    e.preventDefault();

    // console.log(dispatch)
    dispatch(
      add_comment(
        id,
        {
          id: 20+((Math.random())*20),
          first_name: "Well",
          last_name: "Wisher",
          content: item,
        },
        comment
      )
    );
  };
  React.useEffect(() => {
    getData();
    add_comment();
  }, [dispatch]);

  return (
    <form onSubmit={submit}>
      <Form>
        <input
          type="text"
          value={item}
          placeholder="Write Something..."
          onChange={(e) => setItem(e.target.value)}
        />
        <button>POST</button>
      </Form>
    </form>
  );
};

const Form = styled.div`
  margin: 10px auto;
  input {
    width: 620px;
    height: 50px;
    border-radius: 30px;
    border-color: transparent;
    background-color: #f5f5f5;
  }
  button {
    height: 50px;
    border-radius: 30px;
    background-color: white;
    border-color: transparent;
    cursor: pointer;
  }
`;
