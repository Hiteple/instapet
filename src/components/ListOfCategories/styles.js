import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props =>
    props.fixed &&
    css`
      ${fadeIn({ time: '.5s' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      top: -20px;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      transform: scale(0.5);
      z-index: 500;
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
