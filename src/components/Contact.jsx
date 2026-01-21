import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {


  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
    <motion.div className="mb-12">
      <p className={`${styles.sectionSubText} uppercase`}>
        Have Anything in mind?
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        Get in touch
      </h2>
    </motion.div>
    <div
      className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-12 overflow-hidden`}>

      {/* form section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-sm'
      >


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-sm outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-sm outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-sm outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit rounded-sm text-white font-bold shadow-md shadow-primary hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 hover:text-white'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* earth section */}

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
