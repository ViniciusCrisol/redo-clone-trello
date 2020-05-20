import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #f6f7fb;
  width: 100%;
  padding: 12px;
  margin: 12px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const ContainerItem = styled.div`
  max-width: 300px;
  width: 100%;
  height: 220px;
  padding: 22px;
  margin: 12px;

  box-shadow: 2px 2px 12px -4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  background-color: white;

  h1 {
    font-size: 22px;
  }

  button {
    background: none;
    border: 0;
  }

  > div {
    border-top: 1px solid #eee;
    margin-top: 6px;
    padding-top: 6px;
    height: 76%;
    flex: 1;

    p {
      font-size: 16px;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 8px 32px;

  background-color: white;
  box-shadow: 0 0 12px -4px rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 22px;
    color: #c5c5c5;
  }

  button {
    border: 0;
    width: 180px;
    height: 34px;

    background-color: #3aafae;
    border-radius: 32px;
    box-shadow: 0px 4px 5px -3px rgba(58, 175, 174, 0.4);

    text-transform: uppercase;
    font-size: 13px;
    color: white;

    transition: 200ms;

    &:hover {
      background-color: ${darken(0.04, '#3aafae')};
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.2);

  form {
    max-width: 350px;
    width: 90%;

    margin: 128px auto 0;
    padding: 8px 32px;

    background-color: white;
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 40px;

      margin: 6px auto;
      padding: 6px;

      background-color: transparent;
      border: 0;
      border-bottom: 1px solid #eee;
    }

    textarea {
      padding: 6px;

      border: 0;
      resize: none;
      height: 120px;
    }

    div {
      display: flex;
      justify-content: space-evenly;

      button {
        width: 120px;
        height: 30px;

        background-color: #3aafae;
        border: 0;
        border-radius: 15px;
        transition: 200ms;

        color: white;
        text-transform: uppercase;

        &:first-child {
          background-color: #ff5151;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
