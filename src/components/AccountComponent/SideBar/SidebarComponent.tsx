import React from 'react';
import { styles } from './config';

const AccountsSidebar: React.SFC<Props> = ({}) => {
    return (
        <>
            <ul style={ styles.ul }>
                <li style={ styles.li }><a href="/accounts" style={ styles.a }>Profile Settings</a></li>
                <li style={ styles.li }><a href="/accounts/account_settings" style={ styles.a }>Account Settings</a></li>
                <li style={ styles.li }><a href="/accounts/delete" style={ styles.a }>Delete Account</a></li>
            </ul>
        </>
    );
};

export default AccountsSidebar;