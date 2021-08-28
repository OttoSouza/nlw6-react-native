import React, { ReactNode } from "react";

import { ModalProps, Modal, TouchableWithoutFeedback } from "react-native";

import { OverLay, Content, Bar } from "./styles";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

const ModalView: React.FC<Props> = ({ children, closeModal, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <OverLay>
          <Content>
            <Background>
              <Bar />
              {children}
            </Background>
          </Content>
        </OverLay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
