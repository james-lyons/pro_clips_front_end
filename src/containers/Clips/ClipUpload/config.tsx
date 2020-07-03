interface State {
    clip: null | File,
    game: null | string,
    title: null | string,
    error: boolean,
    fileError: boolean,
    wasSubmitted: boolean,
    submitSuccess: boolean,
};

interface Props {
    uploadClip: (clip: File, title: string, game: string) => void
};

interface Event {
    target: Target
};

interface Target {
    value: string,
    name: TargetState,
    files: Array<File>
};

interface TargetState {
    clip: null | File,
    game: null | string,
    title: null | string
};

interface File {
    name: string,
    type: string,
    size: number,
    lastModified: number,
    slice: () => Blob,
    text: () => Promise<string>,
    stream: () => ReadableStream<any>,
    arrayBuffer: () => Promise<ArrayBuffer>
};

export {
    State,
    Props,
    Event
};
