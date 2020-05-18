import React from 'react';
import { styles } from './editProfile.config';

const AccountsSidebar: React.SFC<Props> = ({}) => {
    return (
        <>
            <ul style={ styles.ul }>
                <li><a href="/accounts">Profile Settings</a></li>
                <li><a href="/accounts/password">Change Password</a></li>
                <li><a href="/accounts/account_settings">Account Settings</a></li>
            </ul>
        </>
    );
};

export default AccountsSidebar;