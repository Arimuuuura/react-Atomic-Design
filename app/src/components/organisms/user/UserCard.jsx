import React from 'react'
import styled from 'styled-components';

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`

export const UserCard = (props) => {

  const { user } = props;

  return (
    <div>
      <img height={160} width={160} src={user.image} alt={user.name} />
      <p>名前</p>
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>tell</dt>
        <dd>{user.tell}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  )
}
