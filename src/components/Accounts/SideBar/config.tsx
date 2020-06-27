interface Props {
    activeItem: string,
    handleSelect: (event: Event) => void
};

interface Event {
    target: { text: string }
};

const styles = {
    ul: {
        padding: '1rem',
        listStyle: 'none'
    },
    li: {
        marginTop: '1rem',
    },
    a: {
        color: 'black'
    }
};

export {
    Props,
    styles
};
