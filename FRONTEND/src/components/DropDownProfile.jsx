import React from 'react';
import './DropDownProfile.css'; // Assuming you have a CSS file for styles
function DropDownProfile(){
    return (
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
                <li><a href="#">View Profile</a></li>
                <li><a href="#">Edit Profile</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    );
}

export default DropDownProfile;