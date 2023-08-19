import { motion } from "framer-motion";
function PopUpmessage({ setPopup }) {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "tween", ease: "linear" }}
        className="bg-black h-60 w-72"
      >
        <h1>iam good</h1>
        <button
          onClick={() => {
            setPopup(false);
          }}
          className="text-white"
        >
          click me
        </button>
      </motion.div>
    </div>
  );
}
export default PopUpmessage;
