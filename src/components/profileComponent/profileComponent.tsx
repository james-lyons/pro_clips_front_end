import React from 'react';
import { connect } from 'react-redux';
import { Props, styles } from './profile.config';

const ProfileComponent: React.SFC<Props> = ({
    user
}) => {

    return (
        <>
            <div>
                <header className="col-lg-6 col-md-10 col-sm-12 mb-4" style={ styles.headerWrapper }>
                    <div style={{ height: '100%', border: '1px solid red' }}>
                        <a>
                            <img />
                        </a>
                    </div>
                    <section style={{ border: '1px solid blue', height: '100%' }}>
                        <div>
                            <h1>UserName</h1>
                            <a>
                                <button>
                                    Edit Button
                                </button>
                            </a>
                        </div>
                        <ul>

                        </ul>
                        <div>
                            <h1>Bio</h1>
                        </div>
                    </section>
                </header>
            </div>
            <div>
                <button onClick={ () => console.log(user)}>button</button>
            </div>
        </>
    );
};

const mapStateToProps = (state:any) => {
    return {
        user: state.authReducer.user
    };
};

export default connect(mapStateToProps, null)(ProfileComponent);
