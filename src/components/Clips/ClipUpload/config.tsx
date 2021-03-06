interface Props {
    title: string,
    isLoading: boolean,
    gameError: boolean,
    fileError: boolean,
    titleError: boolean,
    submitSuccess: boolean,
    handleUploadClip: () => void,
    handleChange: (event: Event) => void,
    handleSelect: (event: Event) => void
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
    Props
};
