import { Box, Button, Flex, Text } from '@chakra-ui/react';
import PropTypes from "prop-types";

export function PaginationPersediaanProduk({meta, onPageChange}) {
    const { current_page, last_page, links } = meta || {};

    return (
        <Flex justifyContent="center"  align="center" mt={4}>
            <Button
                onClick={() => onPageChange(1)}
                isDisabled={current_page === 1}
            >
                First
            </Button>
            <Box>
                {links && links.map((link, index) => (
                    <Button
                        key={index}
                        mx={1}
                        onClick={() => onPageChange(link.url ? new URL(link.url).searchParams.get('page') : current_page)}
                        isDisabled={!link.url}
                        colorScheme={link.active ? "blue" : "gray"}
                    >
                        <Text dangerouslySetInnerHTML={{ __html: link.label }} />
                    </Button>
                ))}
            </Box>
            <Button
                onClick={() => onPageChange(last_page)}
                isDisabled={current_page === last_page}
            >
                Last
            </Button>
        </Flex>
    )
}

PaginationPersediaanProduk.propTypes = {
    meta: PropTypes.shape({
        current_page: PropTypes.number.isRequired,
        last_page: PropTypes.number.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                label: PropTypes.string.isRequired,
                active: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onPageChange: PropTypes.func.isRequired,
};