import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { deleteWine } from '../../../api/wineService';

interface Props {
  visible: boolean;
  onCancel: () => void;
  itemId: number;         // 👈 Novo: ID do item
  itemName?: string;
  onSuccess?: () => void; // 👈 Opcional: callback após sucesso
}

export default function ConfirmDeleteModal({
  visible,
  onCancel,
  itemId,
  itemName = 'este item',
  onSuccess,
}: Props) {
  const handleDelete = async () => {
    try {
      await deleteWine(itemId);
      Alert.alert('Sucesso', 'Item excluído com sucesso!');
      onCancel();       // fecha o modal
      onSuccess?.();    // chama o callback, se existir (ex: navegar de volta)
    } catch (error) {
      Alert.alert('Erro', 'Erro ao excluir o item.');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirmar Exclusão</Text>
          <Text style={styles.text}>Deseja realmente excluir {itemName}?</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.confirmButton}>
              <Text style={styles.confirmText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#800020',
    borderRadius: 6,
    alignItems: 'center',
  },
  cancelText: {
    color: '#800020',
    fontWeight: 'bold',
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#800020',
    borderRadius: 6,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
