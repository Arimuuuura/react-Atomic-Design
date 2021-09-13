import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from "recoil";
import { SecondaryButton } from '../atoms/button/SecondaryButton'
import { userState } from '../../store/userState';

const SContainer = styled.div`
  text-align: center;
`

export const Top = () => {

  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" })
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" })
  }

  return (
    <SContainer>
      <h2>Topページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}
