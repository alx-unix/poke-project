import { useState,useEffect } from "react";

function Time(){
    const [dateState, setDateState] = useState(new Date());

    const t = new Date();
    const c = t.getHours() - 12;
    useEffect(() => {
        setInterval(() => {
            setDateState(new Date());
        }, 1000);
    }, []);

    return (
        <>
            <h6 className="md:mx-10 text-md text-white-900 md:text-xl lg:text-xl dark:text-white">
                {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "2-digit",
                hour12: true,
                })}
            </h6> 
        </>
    );
};

export default Time