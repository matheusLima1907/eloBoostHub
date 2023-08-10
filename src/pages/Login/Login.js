import Header from './components//Header/Header';
import Footer from './components/Footer/Footer';
import Footer from './components/pages/Home/Home';
import Footer from './components/pages/LeagueOfLegends/LeagueOfLegends';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Login() {
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
            {/* Conteúdo da página de Login*/}
            <Footer />
        </div>
    );
}


export default Login;