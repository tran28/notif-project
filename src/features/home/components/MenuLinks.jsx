import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MenuLinks() {
    const perspective = {
        initial: {
            opacity: 0,
            rotateX: 90,
            translateY: 80,
            translateX: -20,
        },
        enter: (i) => ({
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.65,
                delay: 0.5 + (i * 0.1),
                ease: [.215, .61, .355, 1],
                opacity: { duration: 0.35 }
            }
        }),
        exit: {
            opacity: 0,
            transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
        }
    }

    const navigate = useNavigate();

    const links = [
        {
            title: "Login",
            onClick: function () {
                navigate('/auth');
            }
        }
    ]

    const footerLinks = [
        {
            title: "FAQ",
            onClick: function () {
                navigate('/faq');
            }
        },
        {
            title: "Dev Corner",
            onClick: function () {
                navigate('/dev');
            }
        },
    ]

    return (
        <div className="flex flex-col justify-between px-12 pt-20 pb-10 h-full">
            <div className="flex flex-col gap-3">
                {
                    links.map((link, i) => {
                        const { title } = link;
                        return (
                            <motion.div
                                key={`b_${i}`}
                                custom={i}
                                variants={perspective}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <motion.button
                                    whileHover={{ x: 10, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.9, x: 30, transition: { duration: 0.1 } }}
                                    className="font-semibold italic tracking-tighter text-4xl"
                                    onClick={link.onClick}
                                >
                                    {title}
                                </motion.button>
                            </motion.div>
                        )
                    })
                }
            </div>

            <div className="flex gap-8 items-end">
                {
                    footerLinks.map((link, i) => {
                        const { title } = link;
                        return (
                            <motion.div
                                key={`b_${i}`}
                                custom={i}
                                variants={perspective}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <motion.button
                                    whileHover={{ y: -6, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                    className={`text-lg tracking-tighter font-medium italic`}
                                    onClick={link.onClick}
                                >
                                    {title}
                                </motion.button>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
