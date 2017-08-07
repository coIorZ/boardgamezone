import Base from './base';

export const Input = Base.withComponent('input').extend`
  width: 28rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  color: #ffffff;
  background-color: #333333;
  transition: background-color .2s;
  &:focus {
    background-color: #404040;
  }
  ${props => props.block && 'display: block;'}
`;