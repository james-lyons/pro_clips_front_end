interface NewUser {
    username: string,
    email: string,
    password: string,
    password2: string,
};

interface User {
    email: string,
    password: string
};

export {
    User,
    NewUser
};
