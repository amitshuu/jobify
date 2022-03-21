import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='error' />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
