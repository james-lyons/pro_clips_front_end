import { MouseEvent } from 'react';

interface State {
    search: string,
    searchResults: null | Array<Result>
};

interface Props {
    history: History,
    userSearch: (search: string) => Promise<Response>
};

interface History {
    location: { pathname: string },
    push: (search: string) => void
}

interface Event {
    target: { value: string },
    preventDefault: () => void
};

interface Response {
    status: number,
    data: Array<Result>
};

interface Result {
    result: { title: string, image: string }
};

export {
    State,
    Props,
    Event,
    Result,
    Response
};
