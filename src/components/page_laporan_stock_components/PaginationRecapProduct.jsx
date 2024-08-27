import { Box, Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function PaginationRecapProduct({ pagination, onPageChange }) {
    const currentPage = pagination?.current_page || 1;
    const lastPage = pagination?.last_page || 1;
    const links = pagination?.links || [];

    return (
            <Flex justifyContent="center" align="center">
                <Button
                    onClick={() => onPageChange(1)}
                    isDisabled={currentPage === 1}
                    size="sm"
                    w="70px"
                    h="30px"
                    p={2}
                    mr={2}
                >
                    First
                </Button>
                <Box>
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            onClick={() => onPageChange(link.url ? new URL(link.url).searchParams.get('page') : currentPage)}
                            isDisabled={!link.url}
                            colorScheme={link.active ? "blue" : "gray"}
                            size="sm"
                            w="50px"
                            h="25px"
                            m={3}
                        >
                            <Text dangerouslySetInnerHTML={{ __html: link.label }} />
                        </Button>
                    ))}
                </Box>
                <Button
                    onClick={() => onPageChange(lastPage)}
                    isDisabled={currentPage === lastPage}
                    size="sm"
                    w="70px"
                    h="30px"
                    p={2}
                    ml={2}
                >
                    Last
                </Button>
            </Flex>
    );
}

PaginationRecapProduct.propTypes = {
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        last_page: PropTypes.number,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                label: PropTypes.string.isRequired,
                active: PropTypes.bool.isRequired,
            })
        )
    }).isRequired,
    onPageChange: PropTypes.func.isRequired,
};
