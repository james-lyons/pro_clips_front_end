import React from 'react';
import { styles } from './config';

const AccountsSidebar: React.SFC<Props> = ({}) => {
    return (
        <>
            <ul style={ styles.ul }>
                <li><a href="/accounts">Profile Settings</a></li>
                <li><a href="/accounts/account_settings">Account Settings</a></li>
                <li><a href="/accounts/delete">Delete Account</a></li>
            </ul>
        </>
    );
};

export default AccountsSidebar;