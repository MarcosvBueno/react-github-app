import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 730px;
  align-items: center;
  margin-bottom: 30px;
  overflow-x: hidden;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h1 {
    font-size: 26px;
    font-weight: 700;
    color: ${props => props.theme.TextTitleHeader};
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    p{
      font-size: 13px;
      font-weight: 600;
      color:${props => props.theme.TextTitleHeader};
      line-height: 19px;
      cursor: pointer;
    }
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .imgToggleTheme{
        color: ${props => props.theme.TextTitleHeader};
      
      }
    }
  }
  div:hover{
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }


  @media (max-width: 475px) {
    width: 50%;
    max-width: 475px;
    margin: 0 auto;
    padding: 0 20px;
    align-items: center;
    
    h1{
      font-size: 26px;
    }
    div{
      width: 80px;
      align-items: center;
      p{
        font-size: 15px;
      }
    }
  }

  @media (max-width: 375px) {
    width: 50%;
    margin: 0 auto;
    padding: 0 20px;
    h1{
      font-size: 26px;
    }
    div{
      width: 80px;
      align-items: center;
      p{
        font-size: 15px;
      }
    }
  }


`;
