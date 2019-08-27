/** @jsx jsx */

import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
// Styles
import { ButtonStyle, opened } from './styles';

const CustomButton = ({
  children, icon, open, ...props
}) => (
  <ButtonStyle
    data-testid="button"
    css={[open && opened]}
    {...props}
  >
    {!open && <p data-testid="button-closed">{children}</p>}
  </ButtonStyle>
);
CustomButton.propTypes = {
  children: PropTypes.isRequired,
  icon: PropTypes.isRequired,
  open: PropTypes.isRequired,
};


export default CustomButton;
