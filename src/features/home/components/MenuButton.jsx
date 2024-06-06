import { motion } from 'framer-motion';

export default function MenuButton({ isActive, toggleMenu }) {
  return (
    <motion.div
      className="relative w-14 h-14 cursor-pointer rounded-full overflow-hidden z-20"
      animate={{ width: isActive ? "80px" : "56px" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full bg-accent-dark/10 flex items-center justify-center"
          onClick={() => toggleMenu()}
        >
          <PerspectiveText label="Menu" className="text-black" />
        </div>
        <div
          className="w-full h-full bg-accent-dark/30 flex items-center justify-center"
          onClick={() => toggleMenu()}
        >
          <PerspectiveText label="Close" className="text-black" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function PerspectiveText({ label, className }) {
  return (
    <div className="flex flex-col">
      <p className={`m-0 ${className} text-xs`}>{label}</p>
    </div>
  );
}
