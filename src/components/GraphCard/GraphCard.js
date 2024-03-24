import React from 'react';

const GraphCard = ({ title }) => {
    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">{title}</h3>
            {/* Graph content */}
        </div>
    );
};

export default GraphCard;
