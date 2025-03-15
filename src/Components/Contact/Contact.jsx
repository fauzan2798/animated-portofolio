import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../AboutSection/animations";
import { useState } from "react";
import Title from "../reusable/Title";
import Button from "../reusable/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fields = [
    { id: "name", label: "Name", type: "text", value: formData.name },
    { id: "email", label: "Email", type: "email", value: formData.email },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      value: formData.message,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative z-[999] py-20 px-6 sm:px-8 lg:px-12 xl:px-16 "
    >
      <Title label={"Contact Me"} />

      <div className="flex justify-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-20 shadow-lg"
        >
          <motion.form
            onSubmit={handleSubmit}
            variants={staggerContainer}
            className="space-y-6"
          >
            {fields.map((field) => (
              <motion.div
                key={field.id}
                variants={fadeInUp}
                className="relative"
              >
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    value={field.value}
                    className="w-full px-4 py-3 bg-transparent border border-white border-opacity-20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-pink-500 peer  resize-none"
                    required
                    placeholder=""
                    onChange={handleChange}
                    rows={5}
                  />
                ) : (
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    className="w-full px-4 py-3 bg-transparent border border-white border-opacity-20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-pink-500 peer"
                    required
                    placeholder=""
                    onChange={handleChange}
                  />
                )}
                <label
                  htmlFor={field.id}
                  className="absolute left-4 -top-3 bg-secondary rounded px-1 text-sm text-white transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-white"
                >
                  {field.label}
                </label>
              </motion.div>
            ))}

            {/* Submit Button */}
            <Button>Send Message</Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
