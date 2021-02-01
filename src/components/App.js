import React from 'react';
import SignUp from './SignUp';
import { BrowserRouter, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/dashbord" component={Dashboard} />
                </BrowserRouter>
                {/* <SignUp /> */}
                {/* <LoginForm /> */}
            </div>
        );
    };
}

export default App;
