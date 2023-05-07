import styled from "styled-components";

export const Container = styled.main`
  background: ${props => props.theme.CardsBackground};
  width: 730px;
  border-radius: 15px;
  padding: 48px;
  display: flex;
  overflow: hidden;
  @media ( max-width: 475px ) {
    max-width: 475px;
    width: 50%;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    margin: 0 auto;

  }

`;

export const ContainerImageUser = styled.div`
  img {
    height: 120px;
    width: 120px;
    border-radius: 100%;
  }
  @media ( max-width: 475px ) {
    position: absolute;
    img {
      height: 70px;
      width: 70px;
      border-radius: 100%;
      
    }
  }
`;

export const ContainerHeader = styled.div`
  margin-left: 37px;
  width: 100%;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  h1 {
    font-weight: 700;
    font-size: 26px;
    margin-right: 10px;
    padding-right: 95px;
    color: ${props => props.theme.nameHeaderColor};
  }
  p {
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.theme.descriptionsColor};
  }

  @media ( max-width: 475px ) {
    margin-left: 37;
    .title {
      flex-direction: column;
      align-items: flex-start;

  }
  h1 {
    font-weight: 700;
    font-size: 16px;
    margin-left: 50px;
    padding-right: 0px;
  }
  .dateJoined {
    font-weight: 400;
    font-size: 13px;
    color: ${props => props.theme.descriptionsColor};
    margin-left: 50px;

  }
}
`;




export const ContainerBio = styled.div`
  
  display: flex;
  flex-direction: column;
  width: 100%;
  small {
    font-weight: 400;
    font-size: 16px;
    color: #0079FF;
    margin-bottom: 15px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    color: ${props => props.theme.descriptionsColor};
    margin-bottom: 20px;
     
  }

  @media ( max-width: 475px ) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;

    small {
      font-weight: 400;
      font-size: 13px;
      color: #0079FF;
      margin-bottom: 15px;
      margin-left: 50px;
    }
    p {
      width: 100%;
      font-size: 13px;
      margin-left: -30px;
      margin-top: 10px;
    }
  }

`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: ${props => props.theme.backgroundInfoColor};
  border-radius: 10px;
  width: 480px;
  height: 85px;
  padding: 0px 50px; 
  h2{
    color: ${props => props.theme.nameHeaderColor};
  }

  @media ( max-width: 475px ) {
    padding: 0px 20px;
    width: 300px;
    margin: 0 auto;
    margin-left: -35px;
    
    h2{
      font-size: 16px;
    }
    .infoTitle{
      font-size: 13px;
    }
  }
  
`;


export const PersonalInfoContainer = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.descriptionsColor};
  
  .twitterCompanyContent{
    padding-right: 70px;
  }
  img{
    margin-right: 20px;
    
  }

  @media ( max-width: 475px ) {
    margin-top: 27px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.descriptionsColor};
    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: -30px;

  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: ${props => props.location ? 1 : 0.5};
  margin-bottom: 20px;
    img{
      fill: ${props => props.theme.descriptionsColor} !important;
    }

    @media ( max-width: 475px ) {
      margin-bottom: 10px;
    }
    
`;

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;

  opacity: ${props => props.blog ? 1 : 0.5};

  @media ( max-width: 475px ) {
    margin-bottom: 10px;
  }
  
`;

export const TwitterContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: ${props => props.twitter ? 1 : 0.5};
  margin-bottom: 20px;

  @media ( max-width: 475px ) {
    margin-bottom: 10px;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: ${props => props.company ? 1 : 0.5};

`;