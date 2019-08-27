import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ButtonStyle = styled.button`
  padding: 8px 12px;
  color: #020600;
  border: none;
  display: flex;
  background-color: ${({ primary }) => (primary ? '#FFC16F' : ' #F4F4F4')};
  &:disabled {
    fill: #c5c5c5;
    color: #c5c5c5;
    background-color: #eaeaea;
    svg {
      fill: #c5c5c5;
    }
  }

  svg {
    margin-left: 9px;
    fill: #404040;
  }
`;

export const opened = css`
  svg {
    fill: #0078d7;
  }
`;
