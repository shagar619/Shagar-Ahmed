// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const Cursor = () => {

//     const [ position, setPosition ] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const mouseMove = (e) => {
//             setPosition({ x:e.clientX, y:e.clientY })
//         }
//         window.addEventListener("mousemove", mouseMove)

//         return () => {
//             window.removeEventListener("mousemove", mouseMove);
//         }
//     }, [])

//     console.log(position);

//     return (
//         <motion.div 
//         className='h-[50px] w-[50px] rounded-full border border-white fixed z-[999]'
//         animate={{ x:position.x+10, y:position.y+10 }}>
            
//         </motion.div>
//     );
// };

// export default Cursor;








import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Cursor = ({  isHovering, variants }) => {
    const [ mousePosition, setPosition ] = useState({ x: 0, y: 0 });

    const [clickEffect, setClickEffect] = useState(false);
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {

        const mouseMove = (e) => {
            setPosition({ x:e.clientX, y:e.clientY })
        }

        const handleClick = () => {
            setClickEffect(true);
            setTimeout(() => setClickEffect(false), 300); // Reset effect after 300ms
        };

        const handleMouseLeave = () => setIsCursorVisible(false);
        const handleMouseEnter = () => setIsCursorVisible(true);

        window.addEventListener("mousemove", mouseMove)

        window.addEventListener("mousedown", handleClick);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("click", handleClick);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    if (!isCursorVisible) return null; // Cursor Hide when out of window

    return (
        <>
            {/* Static Inner Cursor (No Animation) */}
            <div
                className="fixed top-0 left-0 pointer-events-none rounded-full bg-white"
                style={{
                    height: "10px",
                    width: "10px",
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: "none", // No transition for inner cursor
                    zIndex: 1000, // Ensure cursor is above other elements
                }}
            />

            {/* Animated Outer Cursor (Chasing & Bounce Effect) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none rounded-full border border-white"
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    scale: clickEffect ? 2 : 1,
                    opacity: clickEffect ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400, // Adjust stiffness for spring effect
                    damping: 15, // Adjust damping for spring effect
                    mass: 0.5
                }}
                style={{
                    height: "30px",
                    width: "30px",
                    zIndex: 1000, // Ensure cursor is above other elements
                }}
            />
        </>
    );
};

export default Cursor;