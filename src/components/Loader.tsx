import { Spinner, Text, VStack } from "@chakra-ui/react";

const Loader = () => {
    return (
        <div>
            <VStack colorPalette="blue" gap="4" alignItems="center" justifyContent="center" height="100vh">
                <Spinner size="xl" color="colorPalette.600" />
                <Text color="colorPalette.600">Loading...</Text>
            </VStack>
        </div>
    );
}

export default Loader;