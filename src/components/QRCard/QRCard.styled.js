import styled from 'styled-components'

const QRCodeWrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(100px, min-content);
  max-width: max-content;
  grid-gap: 20px;
  place-items: center;
  padding: 15px;
  text-align: center;

  background-color: var(--white);
  border-radius: 15px;
  border-color: var(--white);

  .image-div {
    img {
      border-radius: 15px;
    }
  }
  .subheader-1 {
    font-weight: 700;
    font-size: 22px;
    padding: 0px 10px;
  }
  .subheader-2 {
    color: var(--grayish-blue);
    padding: 0px 27px;
  }
`;

export default QRCodeWrapper;