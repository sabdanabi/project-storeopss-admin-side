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
import IconTrash from '../../components_reused/Icon/DeleteIcon'; // Import your delete icon

export function BtnDeleteNew({ id, handleDelete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    return (
        <>
            <Button
                colorScheme='red'
                onClick={onOpen}
                width='10px'     // Sesuaikan lebar tombol
                height='10px'
                p={3}
                variant='ghost'
                aria-label='Delete'
                _hover={{}}  
                _focus={{}}  
            >
                <IconTrash boxSize={1}/>
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
