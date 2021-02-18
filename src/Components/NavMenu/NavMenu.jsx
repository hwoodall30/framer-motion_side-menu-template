import * as React from 'react';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsmenu = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    pointerEvents: 'all',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const itemIds = [
  { text: 'Work', key: 1 },
  { text: 'Services', key: 2 },
  { text: 'About', key: 3 },
  { text: 'Contact', key: 4 },
  { text: 'Get A Quote', key: 5 }
];

export default function NavMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const style = { border: `2px solid #0055ff` };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={'100vh'}
      className="NavMenu">
      <motion.div className="background" variants={sidebar} />
      <motion.ul variants={variants}>
        {itemIds.map((item) => (
          <motion.li
            key={item.key}
            variants={variantsmenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <div className="iconplaceholder" style={style} />
            <div className="textplaceholder" style={style}>
              {item.text}
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <button onClick={toggleOpen}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
}
