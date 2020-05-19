import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AccountSidebar from '../../../components/AccountComponent/SideBar/SidebarComponent';
import AccountDelete from '../../../components/AccountComponent/AccountDelete/AccountDeleteComponent';
import ProfileEdit from '../../ProfileEditingContainer/ProfileEdit';
import PasswordEdit from '../PasswordEdit/PasswordEdit';
import { styles } from './config';

class Accounts extends React.PureComponent<{}, {}> {

    render() {

        return (
            <>
                <div className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.wrapperDiv }>
                    <div>
                        <AccountSidebar />
                    </div>
                    <div>
                        <Route exact path="/accounts" component={ ProfileEdit } />
                        <Route path="/accounts/password" component={ PasswordEdit } />
                        <Route path="/accounts/account_settings" component={ AccountDelete } />
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Accounts);
