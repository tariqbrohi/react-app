import React from 'react';
import {Link} from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            Dashboard
            <Link to="/" className="btn btn-primary">Login</Link>
        </div>
    );
}

export default Dashboard;