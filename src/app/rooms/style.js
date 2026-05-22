import styled from "styled-components";
export const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 600px;
  }

  .input {
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    width: 100%;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #1a1a1a;
    color: #858585;
    box-shadow: 0 0 5px 2px #d97757;
    transition: 0.7s ease;
  }

  .input::placeholder {
    color: #777;
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #777;
    width: 1rem;
    height: 1rem;
  }
`;
