import { deleteContact } from "@/redux/contacts/operations";
import { Button, CloseButton, Dialog, Portal, Strong } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const DeleteButtonWithConfirmation = ({ name, id }: { name: string, id: string }) => {
    const dispach = useDispatch();

    return (
        <Dialog.Root role="alertdialog">
            <Dialog.Trigger asChild>
                <Button size="sm" colorPalette="red">
                    Delete
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Are you sure?</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                This action cannot be undone. This will permanently delete <Strong>{name}</Strong> from your phonebook.
                            </p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button colorPalette="red" onClick={() => (dispach as any)(deleteContact(id))}>Delete</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};
 
export default DeleteButtonWithConfirmation;