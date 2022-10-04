import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Form } from './form';
export default function ModalFormDialog(props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
