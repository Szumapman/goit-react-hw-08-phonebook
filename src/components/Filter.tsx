import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../redux/contacts/selectors';
import { setFilter } from '../redux/contacts/filterSlice';
import { Box, defineStyle, Field, Input } from '@chakra-ui/react';
import { MdPersonSearch } from "react-icons/md";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(event.target.value));
    }

    return (
        <Field.Root width={{ lg: "90%", md: "80%", sm: "sm" }} minW="300px">
            <Box pos="relative" w="full">
                <Input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onFilterChange}
                    className="peer"
                    placeholder=""
                    width={"full"}
                />
                <Field.Label css={floatingStyles}>
                    <MdPersonSearch color='#2196F3' size={"1.5em"} />
                    Find contacts by name or number
                </Field.Label>
            </Box>
        </Field.Root>
    
    );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
    },
});
