import React from 'react';
import {Container, ContainerHeader,ContainerBio,ContainerImageUser,
ContainerInfo,PersonalInfoContainer,LocationContainer,BlogContainer,
TwitterContainer,CompanyContainer} from './style';

import { LocationIcon,TwitterIcon, WebsiteIcon, CompanyIcon } from '../../assets/icons';
import moment from 'moment/moment';


export default function Main({ user }) {
  if (!user || Object.keys(user).length === 0) {
    return;
  }

  const formatDate = dateString => {
    const date = moment.utc(dateString);
    return `Joined ${date.format('DD MMM YYYY')}`;
  };

  return (
    <Container>

      <ContainerImageUser>
        <img src={user.avatar_url} alt={user.name} />
        </ContainerImageUser>

      <ContainerHeader>
        <div className='title'>
          <h1>{user.name}</h1>
          <p className='dateJoined'>{formatDate(user.created_at)}</p>
        </div>
        
        <ContainerBio>
          <small>@{user.login}</small>
          <p>{user.bio}</p>
        </ContainerBio>

        <ContainerInfo>
            <div>
            <p className='infoTitle'>Repos</p>
            <h2>{user.public_repos}</h2>
            </div>

            <div>
            <p className='infoTitle'>Followers</p>
            <h2>{user.followers}</h2>
            </div>

            <div>
            <p className='infoTitle'>following</p>
            <h2>{user.following}</h2>
            </div>
          
        </ContainerInfo>

        <PersonalInfoContainer>
          <div>
          <LocationContainer location={user.location}>
            <img src={LocationIcon}/>
            <p>{user.location ? user.location : "Not available"}</p>
          </LocationContainer>

          <BlogContainer blog={user.blog}>
            <img src={WebsiteIcon}/>
            <p>{user.blog ? user.blog : "Not available"}</p>
          </BlogContainer>
          </div>

          <div className='twitterCompanyContent'>
          <TwitterContainer twitter={user.twitter_username}>
            <img src={TwitterIcon}/>
            <p>{user.twitter_username ? user.twitter_username: "Not available"}</p>
          </TwitterContainer>

          <CompanyContainer company={user.company}>
            <img src={CompanyIcon}/>
            <p>{user.company ? user.company : "Not available"}</p>
          </CompanyContainer>
          </div>


        </PersonalInfoContainer>


      </ContainerHeader>
      
    </Container>
  );
}
