import * as C from "./styles";
import { useState } from "react";
import { Modal, Portal, Text, Provider } from "react-native-paper";
export default () => {
  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);
  const containerStyle = {
    backgroundColor: "#fff",
    padding: 20,
    width: 350,
    alignSelf: "center",
    overFlow: "scroll",
    maxHeight: 400,
    height: "100%",
    justifyContent: "flex-start",
  };
  return (
    <C.Container>
      <C.Text>Refeições</C.Text>
      <C.Button>
        <C.leftIcon
          alt="plusicon"
          source={require("../../../assets/plusicon.png")}
        />
        <C.TextButton
          onPress={() => {
            showModal();
          }}
        >
          Nova refeição
        </C.TextButton>
      </C.Button>
      {visible && (
        <Portal>
          <Modal
            visible={visible}
            dismissable={true}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>Refeições</Text>
          </Modal>
        </Portal>
      )}
    </C.Container>
  );
};
