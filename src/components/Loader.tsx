import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import loaderLogo from "@/assets/Loader_busimark.gif" // ✅ import your gif

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25) // adjust speed (ms per step)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo */}
      <motion.img
        src={loaderLogo}
        alt="Loading..."
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-40 h-40 object-contain mb-6"
      />

      {/* Progress Bar */}
      <div className="w-60 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      </div>

      {/* Progress Text */}
      {/* <p className="mt-3 text-sm font-medium text-blue-600">{progress}%</p> */}
    </div>
  )
}
