import { useEffect, useState } from "react";

export const MouseMove = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0, 
    });

    // useEffect(() => {
    //     window.addEventListener('mousemove', (e) => {
    //         console.log(e.offsetX, e.offsetY);

    //         setMousePosition({
    //             x: e.offsetX,
    //             y: e.offsetY,
    //         })
    //     });
    // }, []);

    useEffect(() => {
        const mouseHandler = (e) => {
            setMousePosition({
                x: e.offsetX,
                y: e.offsetY,
            })
        }

        window.addEventListener('mousemove', mouseHandler);

        return () => {
            window.removeEventListener('mousemove', mouseHandler);
        }

    }, []);
    

    return (
        <>
            <div>Mouse</div>
            <div>Mouse Position: </div>
            <div>X: {mousePosition.x}</div>
            <div>Y: {mousePosition.y}</div>
        </>
    );
};