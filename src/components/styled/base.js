import styled, { css } from 'styled-components';

export const baseStyles = css`
  ${props => props['absolute'] && 'position: absolute;'}
  ${props => props['relative'] && 'position: relative;'}

  ${props => props['text-white'] && 'color: #ffffff;'}
  ${props => props['text-gray'] && 'color: #b3b3b3;'}

  ${props => props['text-xs'] && 'font-size: 1rem;'}
  ${props => props['text-sm'] && 'font-size: 1.2rem;'}
  ${props => props['text-lg'] && 'font-size: 1.6rem;'}

  ${props => props['m-top-xs'] && 'margin-top: .5rem;'}
  ${props => props['m-top-sm'] && 'margin-top: 1rem;'}
  ${props => props['m-top'] && 'margin-top: 2rem;'}
  ${props => props['m-top-lg'] && 'margin-top: 3rem;'}
  ${props => props['m-top-xl'] && 'margin-top: 4rem;'}

  ${props => props['m-bottom-xs'] && 'margin-bottom: .5rem;'}
  ${props => props['m-bottom-sm'] && 'margin-bottom: 1rem;'}
  ${props => props['m-bottom'] && 'margin-bottom: 2rem;'}
  ${props => props['m-bottom-lg'] && 'margin-bottom: 3rem;'}
  ${props => props['m-bottom-xl'] && 'margin-bottom: 4rem;'}

  ${props => props['m-top-bottom-xs'] && 'margin: .5rem 0;'}
  ${props => props['m-top-bottom-sm'] && 'margin: 1rem 0;'}
  ${props => props['m-top-bottom'] && 'margin: 2rem 0;'}
  ${props => props['m-top-bottom-lg'] && 'margin: 3rem 0;'}
  ${props => props['m-top-bottom-xl'] && 'margin: 4rem 0;'}

  ${props => props['p-top-xs'] && 'padding-top: .5rem;'}
  ${props => props['p-top-sm'] && 'padding-top: 1rem;'}
  ${props => props['p-top'] && 'padding-top: 2rem;'}
  ${props => props['p-top-lg'] && 'padding-top: 3rem;'}
  ${props => props['p-top-xl'] && 'padding-top: 4rem;'}

  ${props => props['p-bottom-xs'] && 'padding-bottom: .5rem;'}
  ${props => props['p-bottom-sm'] && 'padding-bottom: 1rem;'}
  ${props => props['p-bottom'] && 'padding-bottom: 2rem;'}
  ${props => props['p-bottom-lg'] && 'padding-bottom: 3rem;'}
  ${props => props['p-bottom-xl'] && 'padding-bottom: 4rem;'}

  ${props => props['p-left-xs'] && 'padding-left: .5rem;'}
  ${props => props['p-left-sm'] && 'padding-left: 1rem;'}
  ${props => props['p-left'] && 'padding-left: 2rem;'}
  ${props => props['p-left-lg'] && 'padding-left: 3rem;'}
  ${props => props['p-left-xl'] && 'padding-left: 4rem;'}

  ${props => props['p-right-xs'] && 'padding-right: .5rem;'}
  ${props => props['p-right-sm'] && 'padding-right: 1rem;'}
  ${props => props['p-right'] && 'padding-right: 2rem;'}
  ${props => props['p-right-lg'] && 'padding-right: 3rem;'}
  ${props => props['p-right-xl'] && 'padding-right: 4rem;'}
`;

export default styled.div`
  ${baseStyles}
`;