import React from 'react';
import { Props } from './config';
import { Grid } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import ProfileEdit from '../../../containers/Accounts/EditProfile/ProfileEdit';
import AccountDelete from '../../../containers/Accounts/AccountDelete/DeleteAccount';
import AccountSettingsEdit from '../../../containers/Accounts/AccountSettings/AccountSettingsEdit';
import MobileSidebarComp from '../SideBar/MobileSidebarComp';

const MobileAccountsComp: React.SFC<Props & RouteComponentProps> = ({ handleSelect }) => {
    return (
        <>
            <Grid centered>
                <Grid.Row>
                    <MobileSidebarComp
                        handleSelect={ handleSelect }
                    />
                </Grid.Row>

                <Grid.Row>
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
                </Grid.Row>
            </Grid>
        </>
    );
};

export default withRouter(MobileAccountsComp);