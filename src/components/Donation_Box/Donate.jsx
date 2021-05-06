import React from "react";
// import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import paytmkaro from "./imge/paytmkaro.png";

export const Donate = ({data}) => {

  return (
    <CommentWrapper>
      <h2>Other Donation Methods</h2>
      <CmntItem key={data.id}>
        <div>
          <h3>
            Transfer directly to the Bank account of this Fundraiser. Only INR
            transfers are allowed.
          </h3>
          <table>
            <tr>
              <td>Virtual A/C No</td>:<td>{data.acno}</td>
            </tr>
            <tr>
              <td>Virtual A/C Name</td>:<td>{data.first_name+" "+data.last_name}</td>
            </tr>
            <tr>
              <td>A/C Type</td>:<td>Current</td>
            </tr>
            <tr>
              <td>IFSC </td>:<td>YESB0CMSNOC</td>
            </tr>
          </table>
          <p>
            (The digit after B is Zero and the letter after N is O for orange.)
          </p>
        </div>
        <claiming>
          <h8>
            Claim your donation acknowledgement now! For payment done via{" "}
            <a>Bank Transfer</a>
          </h8>
        </claiming>
      </CmntItem>

      <CmnItem>
        <div>
          <h3>
            Transfer directly to the Bank account of this Fundraiser. Only INR
            transfers are allowed.
          </h3>
          <po>Scan the QR code from the aap and make payment.</po>
        </div>
      </CmnItem>
      <Content img={paytmkaro}>
        <btn1>
          <button>Generate QR</button>
        </btn1>
        <btn2>
          <button>Generate QR</button>
        </btn2>
      </Content>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  border: 1px solid #b9b9b9;
  width: 700px;
  height: 950px;
  margin: auto;
  border-radius: 10px;
  h2 {
    text-align: left;
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
  padding: 5px;
  width: 680px;
  height: 330px;
  margin: 20px auto;
  display: grid;
  justify-content: space-around;
  /* border: 1px solid #b9b9b9; */
  border-radius: 5px;
  background: rgb(247, 247, 247);

  p {
    color: #686767;
  }
  button {
    padding: 5px;
    height: 40px;
  }
  po {
    margin: 5px auto;
    float: left;
    color: #686767;
  }

  claiming {
    font-size: 17px;
    font-family: cursive;
    background: rgb(1, 191, 189);
    color: white;
    width: 675px;
    height: 57px;
    border-radius: 5px;
    a {
      color: rgb(1, 67, 191);
      text-decoration: underline;
    }
  }

  table{
    text-align:center;
    margin:auto;
    color: #686767;
  }
`;
const CmnItem = styled.div`
  padding: 5px;
  width: 680px;
  height: 100px;
  display: grid;
  justify-content: space-around;
  /* border: 1px solid #b9b9b9; */
  border-radius: 5px;
  background: rgb(247, 247, 247);
  po {
    margin: 5px auto;
    float: left;
    color: #686767;
  }
`;

const Content = styled.div`
  background-image: url(${(props) => props.img});
  width: 680px;
  height: 370px;

  button {
    margin: 198px 120px auto;
    color: white;
    background: rgb(1, 191, 189);
    width: 100px;
    border: transparent;
  }
`;
// const clame = styled.div`
//   font-size: 17px;
//   font-family: cursive;
//   background: rgb(1, 191, 189);
//   color: white;
//   width: 675px;
//   height: 169px;
//   border-radius: 5px;
//   a {
//     color: rgb(1, 67, 191);
//     text-decoration: underline;
//   }
// `;
