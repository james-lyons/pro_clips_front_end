import React from 'react';
import { styles } from './config';
import { RouteComponentProps } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import ProfileEdit from '../ProfileEditingContainer/ProfileEdit';
import AccountSettingsEdit from '../AccountSettings/AccountSettingsEdit';
import AccountSidebar from '../../../components/Accounts/SideBar/SidebarComp';
import AccountDelete from '../../../components/Accounts/AccountDelete/AccountDeleteComp';

class Accounts extends React.PureComponent<RouteComponentProps, {}> {

    render() {

        return (
            <>
                <div
                    className="col-lg-6 col-md-10 col-sm-12 mb-4"
                    style={ styles.wrapperDiv }
                >
                    <div style={{
                        borderTop: '1px solid grey',
                        borderLeft: '1px solid grey',
                        borderBottom: '1px solid grey'
                    }}>
                        <AccountSidebar />
                    </div>

                    <div style={{ border: '1px solid grey' }}>
                        <Route
                            exact path="/accounts"
                            component={ ProfileEdit }
                        />
                        <Route
                            path="/accounts/account_settings"
                            component={ AccountSettingsEdit }
                        />
                        <Route
                            path="/accounts/delete"
                            component={ AccountDelete }
                        />
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Accounts);
