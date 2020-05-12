import React from 'react';

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    logout: (userId: string) => void
};

const NavBar: React.SFC<Props> = ({
    currentUser,
    setCurrentUser,
    logout
}: Props) => {

    return (
        <>
            <h1>Hi from Navbar</h1>
        </>
    );
};

export default NavBar;
