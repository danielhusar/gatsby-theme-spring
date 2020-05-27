// https://emotion.sh/docs/typescript#define-a-theme

import styled, { CreateStyled } from '@emotion/styled';
import theme from '../gatsby-plugin-theme-ui';

export default styled as CreateStyled<typeof theme>;
