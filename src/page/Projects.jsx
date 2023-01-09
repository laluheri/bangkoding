import React from "react";

const Projects = ({ user }) => {
  if (!user) {
    return <div>For access this menu please login</div>;
  }
  return <div>Project Page Hallo 😍😀 {user.name}</div>;
};

export default Projects;
