import React from 'react'
import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`

export const UserCard = (props) => {

  const { user, isAdmin } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
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
    </Card>
  )
}
