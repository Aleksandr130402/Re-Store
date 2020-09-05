import React from 'react';

import { Switch, Route} from 'react-router-dom';
import Header from '../header';
import { HomePage, CardPage } from '../pages';

const App = () => {
    
    return (

        <div>
            <main role="main" className="container">
            
            <Header/>
            
                <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/card" component={CardPage}/>
                </Switch>
            </main>
            
                     
        </div>
    )
}

export default App;