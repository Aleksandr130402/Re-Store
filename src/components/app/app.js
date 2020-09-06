import React from 'react';

import { Switch, Route} from 'react-router-dom';
import Header from '../header';
import { HomePage, CardPage } from '../pages';

const App = () => {
    
    return (

        <div className="container">
            
            <Header numItems={1} total={217}/>

            <main role="main">
                <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/card" component={CardPage}/>
                </Switch>
            </main>
            
                     
        </div>
    )
}

export default App;