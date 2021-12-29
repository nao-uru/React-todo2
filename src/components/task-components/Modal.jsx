import React from 'react';
import ReactDOM from 'react-dom';
import { Container,ModalContainer,ButtonWrapper,Button } from "../../css/modal"

const modalRoot = document.getElementById('modal-root');

export const Modal = ({cancel,confirm}) => {


  return ReactDOM.createPortal (
    <>
    <Container>
      <ModalContainer>
        <div className="text-center">削除してよろしいですか？</div>
        <ButtonWrapper>
          <Button onClick={cancel}>CAECEL</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </ModalContainer>
    </Container>
    </>,
    modalRoot
  )
}

