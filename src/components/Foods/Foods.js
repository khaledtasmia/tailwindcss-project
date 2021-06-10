import React from 'react';
import food1 from '../../images/food1.jpg';
import food2 from '../../images/food2.jpg';

const Foods = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={food1} alt="eggvocado" srcset="" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Eggvocado</h2>
                    <p className="mb-2">Yummy and Nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={food2} alt="taepano" srcset="" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Taepano</h2>
                    <p className="mb-2">Japanese Cuisine</p>
                    <span>$20</span>
                </div>
            </div>
        </>
    );
};

export default Foods;