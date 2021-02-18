import { motion } from 'framer-motion';

export default function TestBox() {
  return (
    <div className="Test">
      <motion.div
        whileTap={{ rotate: 180, borderRadius: '50%' }}
        className="TestBox">
        Side Menu Template
      </motion.div>
    </div>
  );
}
