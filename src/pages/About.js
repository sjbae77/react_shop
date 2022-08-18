import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h4>회사소개 페이지입니다.</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default About;
