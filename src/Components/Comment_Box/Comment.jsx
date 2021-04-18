import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { get_comment } from "../../Redux/commentBox/action";
import { CommentForm } from "./CommentForm";
import {add_comment} from "../../Redux/commentBox/action"

export const Comment = () => {
  const dispatch = useDispatch();
  let [isLoading, setIsLoading] = useState(false);

  let { comment } = useSelector((state) => state.Comment, shallowEqual);
  const getComment = () => {
    setIsLoading(false);
    dispatch(get_comment());
  };
  useEffect(() => {
    getComment();
    add_comment()
  }, [dispatch]);

  console.log(comment);
  return isLoading ? (
    <h1>..Loading</h1>
  ) : (
    <CommentWrapper>
      <h4>Suppoter's Comments</h4>
      <CommentForm getData={getComment} />
      {comment?.map((item) => (
        <CmntItem key={item.id}>
          <div>
            <h6>
              {item.first_name.charAt(0) + " " + item.last_name.charAt(0)}
            </h6>
            <h3>{item.first_name + " " + item.last_name}</h3>
            <p>{item.content}</p>
          </div>
        </CmntItem>
      ))}
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  border: 1px solid #b9b9b9;
  width: 750px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px grey ;
  h4 {
    color: #4e4e4e;
    border-bottom: 1px solid grey;
  }
  h6 {
    border-radius: 50%;
    font-size: 17px;
    background-color: #d4d4d4;
    width: 40px;
    height: 40px;
    float: left;
    margin: -5px -70px auto;
    font-weight: bold;
    color: rgb(1, 191, 189);
    text-align: center;
  }
  h3 {
    color: #686767;
    text-align: left;
    margin: -5px auto;
  }
`;

const CmntItem = styled.div`
  width: 750px;
  height: 120px;
  margin: 10px auto;
  display: grid;
  justify-content: space-around;
  /* border: 1px solid #b9b9b9; */
  border-radius: 5px;

  p {
    width: 550px;
    height: 120px;
    color: #686767;
  }

  > * {
    margin: 10px;
  }

  button {
    padding: 5px;
    height: 40px;
  }
`;
