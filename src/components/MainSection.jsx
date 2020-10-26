import React from 'react';
import '../assets/styles/components/MainSection.scss';
import Simon from './Simon';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="main-section-wrapper">
                <Simon />
            </div>
        </div>
    );
}

export default MainSection;