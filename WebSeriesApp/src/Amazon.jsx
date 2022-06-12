import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const Amazon = () => {
    return (
        <Card 
                key = {Sdata[2].id}
                imgsrc={Sdata[2].imgsrc}
                title={Sdata[2].title}
                sname={Sdata[2].sname}
                link={Sdata[2].link}
            />
    );
}
export default Amazon;