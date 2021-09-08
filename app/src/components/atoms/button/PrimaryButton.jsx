import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 100px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export  const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <SButton>{ children }</SButton>
  )
}
