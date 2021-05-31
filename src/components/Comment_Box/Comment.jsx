import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { get_comment } from "../../Redux/commentBox/action";
import { CommentForm } from "./CommentForm";
import {add_comment} from "../../Redux/commentBox/action"

export const Comment = ({id}) => {
  const dispatch = useDispatch();
  let [isLoading, setIsLoading] = useState(false);
  const getComment = () => {
    setIsLoading(false);
    dispatch(get_comment(id));
  };
  let { comment } = useSelector((state) => state.Comment, shallowEqual);
  useEffect(() => {
    getComment();
    add_comment();
      //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return isLoading ? (
    <h1>..Loading</h1>
  ) : (
    <CommentWrapper>
      <h3 style={{textAlign:"center",padding:"2%"}}>Supporter's Comments</h3>
      <CommentForm comment={comment} id={id} getData={getComment} />
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
  width: 700px;
  margin: auto;
  border-radius: 10px;
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
