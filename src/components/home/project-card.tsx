'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <motion.div
      className="w-full max-w-4xl flex gap-5 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Triggers when the card is 30% in view
      transition={{ duration: 0.5 }}
    >
      <Image src={imageUrl} alt={title} width={400} height={400} className="w-full object-cover" />
      {/* <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div> */}
    </motion.div>
  );
};

export default ProjectCard;
