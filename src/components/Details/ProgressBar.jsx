import React from 'react';
export const ProgressBar = props => {
    const { sliderColor, completed } = props;
  
    const containerStyles = {
      height: "13px",
      width: "100%",
      backgroundColor: "#b2eceb",
      borderRadius: 50,
      margin: "auto",
      marginLeft:0,
      marginTop: 0,
      marginBottom: "25px"
    };
  
    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: sliderColor,
      transition: "width 1s ease-in-out",
      borderRadius: "inherit",
      textAlign: "right"
    };
  
    // const labelStyles = {
    //   padding: 5,
    //   color: "white",
    //   fontWeight: "bold"
    // };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/*<span style={labelStyles}>{`${completed}%`}</span>*/}
        </div>
      </div>
    );
  };
  