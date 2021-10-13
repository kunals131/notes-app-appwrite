import React from 'react' 

import ScrollableTabsButtonForce from '../../components/CategoryNavigation/categorynavigation';


class NotesPage extends React.Component {

    state = {
        Categories : ['tabs 1' , 'tabs 2', 'tabs 3', 'tabs 4'],
        Posts : ['']
    }

    render() {
      return(
          <div className="home">
              <ScrollableTabsButtonForce/>
          </div>
      );
    }
}

export default NotesPage