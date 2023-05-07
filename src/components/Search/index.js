import React, { useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import { FormContainer, InputText, SubmitButton } from './style';
import api from '../../services/api';
import Main from '../Main';
export default function Search() {
  const [username, setUsername] = useState('');
  const [ApiResponseProps, setApiResponseProps] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [responsePlaceholder, setResponsePlaceholder] = useState('Search GitHub username...');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  async function Search (){
    if(username.trim() === '' ){
    setUsername('');
    return
    }
    try{
      const response = await api.get(`${username}`);
      console.log(response.data)
      setApiResponseProps(response.data);
      setErrorMessage('');
    }catch(error){
      console.log(error)
      setErrorMessage('No results');
      setUsername('');
    }
    
  }

  function handleSubmit (e) {
    e.preventDefault();
    Search();
  }

  return (
    <>
    <FormContainer onSubmit={handleSubmit} >
      <img src={searchIcon} />
      <InputText
        type="text"
        value={username}
        onChange={handleChange}
        placeholder={errorMessage ? "" : responsePlaceholder}
      />
      <p>{errorMessage}</p>
      <SubmitButton type="button" onClick={Search}>Search</SubmitButton>
    </FormContainer>
    <Main user={ApiResponseProps}/>
    </>

  );
}
