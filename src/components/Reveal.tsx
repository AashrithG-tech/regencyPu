
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

function Reveal({
                    children,
                    delay = 0,
                    className = "",
                }: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={
                shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                    }
            }
            whileInView={
                shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                    }
            }
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export default Reveal;
