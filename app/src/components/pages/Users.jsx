import React from 'react'
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `arimura${val}`,
    image: 'https://source.unsplash.com/7AIDE8PrvA0',
    email: 'abc@abc.com',
    tell: '080-1234-1234',
    company: {
      name: 'aaa株式会社',
    },
    website: 'https://google.com',
  }
}))

export const Users = () => {

  const { state } = useLocation();

  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {
          users.map((user) => (
            <UserCard key={user.id} user={user} isAdmin={isAdmin} />
          ))
        }
      </SUserArea>
    </SContainer>
  )
}
