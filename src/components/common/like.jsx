import React from "react";

const Like = ({ liked, onClick }) => {
  //or use props instead of destracturing
  let classes = "clickable fa fa-heart";
  if (!liked) classes += "-o";
  return <i onClick={onClick} className={classes}></i>;
};

export default Like;
