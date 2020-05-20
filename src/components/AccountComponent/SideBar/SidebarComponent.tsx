import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './config';

const AccountsSidebar: React.SFC<Props> = ({}) => {
    return (
        <>
            <ul style={ styles.ul }>
                {/* <li style={ styles.li }><a href="/accounts" style={ styles.a }>Profile Settings</a></li>
                <li style={ styles.li }><a href="/accounts/account_settings" style={ styles.a }>Account Settings</a></li>
                <li style={ styles.li }><a href="/accounts/delete" style={ styles.a }>Delete Account</a></li> */}
                <li style={ styles.li }>
                    <Link to="/accounts" style={ styles.a }>
                        Profile Settings
                    </Link>
                </li>
                <li style={ styles.li }>
                    <Link to="/accounts/account_settings" style={ styles.a }>
                        Account Settings
                    </Link>
                </li>
                <li style={ styles.li }>
                    <Link to="/accounts/delete" style={ styles.a }>
                        Delete Account
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default AccountsSidebar;