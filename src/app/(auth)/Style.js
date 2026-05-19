import styled from "styled-components";

export const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #ffffff;
    border: 1px solid #333333;
  }

  .title {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -1px;
    color: #d97757;
  }

  .title::before,
  .title::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #d97757;
  }

  .title::after {
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: #d97757;
    text-decoration: none;
  }

  .signin a:hover {
    text-decoration: underline;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
    width: 100%;
  }

  .form label .input {
    width: 100%;
    padding: 20px 10px 5px;
    border: 1px solid rgba(105, 105, 105, 0.4);
    border-radius: 10px;
    outline: none;
    background-color: #333333;
    color: #ffffff;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .form label .input::placeholder {
    color: transparent;
  }

  .form label span {
    position: absolute;
    left: 10px;
    top: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.1em;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .form label .input:focus + span,
  .form label .input:not(:placeholder-shown) + span {
    top: 4px;
    font-size: 0.75em;
    font-weight: 600;
    color: #d97757;
  }

  .submit {
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: #d97757;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit:hover {
    background-color: #c46649;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  @media (max-width: 576px) {
    .form {
      width: 100%;
    }

    .title {
      font-size: 36px;
    }

    .flex {
      flex-direction: column;
    }
  }
`;
