import React from 'react'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const SButton = styled(BaseButton)`
  background-color: #11999e;
`

export  const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <SButton onClick={onClick}>{ children }</SButton>
  )
}
