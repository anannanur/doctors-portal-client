import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
               <h2 className='text-3xl text-primary font-bold py-5 lg:ml-96'>Welcome to your Dashboard</h2>
               <Outlet/>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My Treatment History</Link></li>
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;