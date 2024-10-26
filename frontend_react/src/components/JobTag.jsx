import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ["Developer", "Designer", "Freelancer", "Competitive Programmer"];
const JobTag = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];
        let speed = isDeleting ? 200 :300;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (text === currentWord) {
                    //currWord all-typed -->start deleting
                    setTimeout(()=>setIsDeleting(true),1000); 
                }else{
                    //type nxt Character
                    setText((prev)=>prev+currentWord[prev.length]); 
                }

            } else {
                //delete last character
                setText((prev)=>prev.slice(0, prev.length - 1));
                if (isDeleting && text === "") {
                    //currWord deleted--> start typing (nxt word)
                    setIsDeleting(false); 
                    setIndex((index)=>(index + 1) % words.length);
                }
            }
            
        }, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {text}
            <div className="cursor">&nbsp;</div>
        </motion.div>
    );
};

export default JobTag;
