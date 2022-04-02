import { useEffect, useState } from "react";

export const MouseMove = () => {
useEffect(() => {
    window.addEventListener('mousemove', (e) => {
        console.log(e);
    });
}, []);

    return <div>Mouse</div>
};