import React from 'react' 
import './mynotes.scss'
import ScrollableTabsButtonForce from '../../components/CategoryNavigation/categorynavigation';


function NotesPage(props) {


    return(
        <div className="home">
            <ScrollableTabsButtonForce categories={props.categories} user={props.user} notes={props.notes} />
        </div>
    );

}


export default NotesPage