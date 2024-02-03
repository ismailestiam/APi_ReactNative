// components/CustomModal.js
import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native-paper';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <View>
      <Button onPress={showModal}>Afficher le Modal</Button>

      <Modal visible={modalVisible} onDismiss={hideModal}>
        <View style={{ margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <Text>Contenu du Modal</Text>
          <Button onPress={hideModal}>Fermer</Button>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
