import {motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp } from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});


export default MotionBox
