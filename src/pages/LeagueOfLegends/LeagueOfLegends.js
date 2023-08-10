import Header from './components//Header/Header';
import Footer from './components/Footer/Footer';
import Footer from './components/pages/Home/Home';
import Footer from './components/pages/Login/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function LeagueOfLegends() {
    return (
        <div className="App">
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/league-of-legends" component={LeagueOfLegends} />
                </Switch>
            </div>
        </Router>
        {/* Conteúdo da página de League*/}
        <Footer />
    </div>
    );
  }
  
  export default LeagueOfLegends;