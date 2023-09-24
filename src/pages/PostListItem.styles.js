import styled from '@emotion/styled';

export const PostListItemStyles = styled.div`
  border: 1px solid black;
  padding: 5px;

  h3, p {
    padding: 0;
    margin: 0;
  }
`;

export const Btn = styled.div`
  background: green;
  padding: 2px;
  border-radius: 10px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.4s linear;
  margin-bottom: 5px;
  cursor: pointer;

  a {
    color: white;
    font-size: 15px;
    text-decoration: none;
    text-transform: uppercase
  }

  &:hover {
    opacity: 0.7;
  }
`;
