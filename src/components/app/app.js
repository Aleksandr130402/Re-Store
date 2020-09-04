import React from 'react';

import { Switch, Route} from 'react-router-dom';
import withBookstoreService from '../hoc';
import Header from '../header';

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (

        <div>

            
            <Header/>
            
                <Switch>
                <Route path="/" render={() => <h3>Welcome at store!</h3>} exact/>
                <Route path="/card" render={() => <h3>Card!</h3>}/>
                </Switch>
           
            
                     
        </div>
    )
}

export default withBookstoreService()(App);