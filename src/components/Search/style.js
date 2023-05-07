import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 730px;
  margin-top: 20px;
  position: relative;
  text-align: center;
  margin-bottom: 24px;
  overflow-x: hidden;
  img {
    position: absolute;
    left: 25px;
    z-index: 1;
  }
  p {
    position: absolute;
    right: 140px;
    z-index: 1;
    color: #F74646;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
  }

  @media (max-width: 375px) {
   
    width: 50%;
    margin: 0 auto;

    position: relative;
    text-align: center;
    margin-bottom: 24px;
    overflow: hidden;
    img {
      position: absolute;
      left: 16px;
      z-index: 1;
      width: 20px;
      height: 20px;
  }
  p {
    position: absolute;
    font-size: 13px;
    
  }
  }
  @media (max-width: 475px) {
   
   width: 50%;
   margin: 0 auto;

   position: relative;
   text-align: center;
   margin-bottom: 24px;
   overflow: hidden;
   img {
     position: absolute;
     left: 16px;
     z-index: 1;
     width: 20px;
     height: 20px;
 }
 p {
   position: absolute;
   font-size: 13px;
   
 }
 }

  
`;

export const InputText = styled.input`
    width: 100%;
    height: 69px;
    background: ${props => props.theme.SearchBarColor};
    border-radius: 15px;
    border: none;
    padding-left: 80px;
    caret-color: #0079FF;
    font-weight: 400;
    font-size: 18px;  
    overflow-x: hidden;
    color: ${props => props.theme.TextTitleHeader};
   &::placeholder{
    color: ${props => props.theme.placeholderColor};
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
   }

    @media (max-width: 375px) {
      display: flex;
      height: 60px;
      padding-left: 50px;
     
    &::placeholder{
      font-size: 13px;
    }
  }

  
  @media (max-width: 475px) {
      display: flex;
      width: 100%;
      height: 60px;
      padding-left: 50px;
     
    &::placeholder{
      font-size: 13px;
    }
  }


`;

export const SubmitButton = styled.button`
    background: #0079FF;
    border-radius: 10px;
    height: 24px;
    cursor: pointer;
    border: none;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: absolute;
    right: 10px;

    @media (max-width: 375px) {
      position: absolute;
      right: 7px;
      font-size: 14px;
      
    }
    @media (max-width: 475px) {
      position: absolute;
      right: 7px;
      font-size: 14px;
      
    }

    
`;

