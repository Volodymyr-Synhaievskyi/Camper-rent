import React from 'react';
import { Oval } from 'react-loader-spinner';
import './Loader.css'


const Loader = () => (
    <div className="loader">
        <Oval
            height={80}
            width={80}
            color="#E44848"
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#CC3232FF"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
    </div>
);

export { Loader };
