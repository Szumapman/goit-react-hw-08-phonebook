import { Box, Button, Dialog } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";

const addContact = () => {
    return (
        <Box
            position="fixed"
            bottom="40px"
            left="20px"
            zIndex="999"
        >
            <Dialog.Root role="dialog">
                <Dialog.Trigger asChild>
                    <Button colorPalette={"blue"} size="sm">
                    Add Contact
                    </Button>
                </Dialog.Trigger>
                <ContactForm />  
            </Dialog.Root>
        </Box>
  )
};

export default addContact;