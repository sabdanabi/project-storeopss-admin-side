import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import IconTrash from '../../components_reused/Icon/DeleteIcon';
import PropTypes from "prop-types"; // Import your delete icon

export function BtnDeleteNew({ id, handleDelete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    return (
        <>
            <Button
                colorScheme='red'
                onClick={onOpen}
                width='10px'     
                height='10px'
                p={3}
                variant='ghost'
                aria-label='Delete'
                _hover={{}}  
                _focus={{}}  
            >
                <IconTrash/>
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Item
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can&apos;t undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => handleDelete(id)} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

BtnDeleteNew.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleDelete: PropTypes.func,
};
