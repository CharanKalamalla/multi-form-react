import Styled from 'styled-components';
import React, { useState } from 'react';
import ApplicationPage from '../Website';
import WebsitePage from '../Website';
import SoftwarePage from "../Software";

function MainPage() {
  const [currentPage, setCurrentPage] = useState("website");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <ButtonCon>
      <ActiveButton onClick={() => handleButtonClick('website')}>Website</ActiveButton>
      <div>
        <Buttonel onClick={() => handleButtonClick('application')}>Application</Buttonel>
        <Butt onClick={() => handleButtonClick('software')}>Software</Butt>
      </div>
      <FormContainer>
        {currentPage === 'application' && <ApplicationPage />}
        {currentPage === 'website' && <WebsitePage />}
        {currentPage === 'software' && <SoftwarePage />}
      </FormContainer>
    </ButtonCon>
  );
}



export default MainPage;

const ActiveButton = Styled.button`
background-color: ${props => props.active ? '#2B459B' : '#d9d9d9'};
color: ${props => props.active ? '#FFFFFF' : '#263238'};
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
font-size: 20px;
padding: 10px;
color: #ffffff;
height:45px;
`;

const Buttonel =    Styled.button`
font-size: 20px;
background-color: ${props => props.active ? '#2B459B' : '#d9d9d9'};
  color: ${props => props.active ? '#FFFFFF' : '#263238'};
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
padding: 10px;
margin-left: -10px;
border-right: 1px solid #9e9898;
height:45px;
`;

const Butt = Styled.button`
background-color: ${props => props.active ? '#2B459B' : '#d9d9d9'};
  color: ${props => props.active ? '#FFFFFF' : '#263238'};
padding: 10px;
font-size: 20px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
height:45px;
`;
const ButtonCon = Styled.div`
display: flex;
flex-direction: row;
margin-top: -30px;
padding: 60px;
`;
const FormContainer = Styled.div`
margin-top:10%;
`
