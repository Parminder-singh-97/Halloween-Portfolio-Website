// src/Drag.jsx

"use client"

import { frame, motion, useSpring } from "motion/react"
import { useEffect, useRef } from "react"

export default function DragBall() {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () => window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}


const ball = {
    width: 100,
    height: 100,
    backgroundImage: "url('../../../icons/pumpkin.png')",// Replace with your image path
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundPosition: "center", // Centers the image
    borderRadius: "50%", // Keeps the circular shape
    position: "fixed", // Fixed position to follow the scroll
    top: "50%", // Adjust the initial position
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 11, // Adjust z-index if needed
    opacity: 1, // Adjust opacity to allow blending
    mixBlendMode: "multiply", // Blends the image with the content behind it
    pointerEvents: "none", // Optional: Makes the image not interfere with other interactions
  }