import { MouseEvent } from 'react';

interface Props {
    search: string,
    searchResults: null | Array<Result>
    handleChange: (event: Event) => void,
    handleSelect: (event: MouseEvent<HTMLDivElement, MouseEvent>, result: Result) => void,
};

interface Event {
    target: { value: string },
    preventDefault: () => void
};

interface Result {
    result: { title: string, image: string }
};

export {
    Props,
    Event
};
