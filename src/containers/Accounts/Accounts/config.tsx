interface Props {
    setActiveItem: (activeItem: string) => void,
    history: { push: () => void }
}

interface Event {
    target: { text: string }
};

const styles = {
    wrapperDiv: {
        display: 'grid',
        gridTemplateColumns: '25% 75%',
        margin: '3rem auto'
    }
};

export {
    Props,
    Event,
    styles
};
