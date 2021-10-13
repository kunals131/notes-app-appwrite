import React from 'react'
import { logoutUser } from '../../appwrite/config.appwrite'
import { Link } from 'react-router-dom';


class LogoutPage extends React.Component {

    componentDidMount() {
        logoutUser().then(response=>{
            console.log(response);
        },error=>{
            console.log(error);
        })
    }

    render() {
        return(
            <div className='logout'>
                <div className="container">
                    <h1 className='text-1'>Please Comeback Soon! :(</h1>
                    <p>You're not logged in <Link to='/signin'>Login Here!</Link></p>
                </div>
            </div>
        );
    }

}

export default LogoutPage;