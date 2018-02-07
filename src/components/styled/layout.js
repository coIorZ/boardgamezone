import Base from './base';

export const Flex = Base.withComponent('div').extend`
  display: flex;
  ${props => props.column && 'flex-direction: column;'}
  ${props => props.center && (props.column ? 'align-items: center;' : 'justify-content: center;')}
  ${props => props.middle && (props.column ? 'justify-content: center;' : 'align-items: center;')}
  ${props => props.between && 'justify-content: space-between;'}
`;

export const Placeholder = Base.withComponent('div').extend`
  background-color: transparent;
  height: 6rem;
  ${props => props.xs && 'height: 1rem;'}
  ${props => props.sm && 'height: 3rem;'}
  ${props => props.lg && 'height: 10rem;'}
  ${props => props.xl && 'height: 15rem;'}
`;

export const Main = Base.withComponent('div').extend`
  ${props => props.dark && 'background-color: #111113;'}
  color: #ffffff;
  min-height: 100vh;
  cursor: default;
`;
