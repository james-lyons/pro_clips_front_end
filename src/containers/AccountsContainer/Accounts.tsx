import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import AccountSidebar from '../../components/AccountComponent/accountsSidebarComponent';
import ProfileEdit from '../ProfileEditingContainer/ProfileEdit';
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
                        <Route exact path="/accounts" component= { ProfileEdit } />
                        {/* <Route path="/accounts/password" component= { ProfileEdit } /> */}
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Accounts);
