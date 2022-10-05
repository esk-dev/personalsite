import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import ModalForm from "./form";
import { useRef } from "react";
export default function ModalFormDialog(props) {
  const { isOpen, onClose } = props;

  const formRef = useRef(null);

  const handleSubmit = () => {
    formRef.current.triggerSubmit();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalForm ref={formRef}/>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit} >Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
