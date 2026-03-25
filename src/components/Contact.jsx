import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiLoader, FiCheckCircle, FiX } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { toast } from 'react-hot-toast'
import emailjs from 'emailjs-com'

const SuccessModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 max-w-sm w-full relative shadow-2xl overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              >
                <FiCheckCircle className="text-4xl text-green-500" />
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 mb-8">
              Thank you for reaching out, Prashant. I'll get back to you as soon as possible!
            </p>
            
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-300"
            >
              Close
            </button>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={20} />
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Initialize with public key for redundancy
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key')

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        to_email: 'prashantgzp2601@gmail.com', // Explicitly pass the recipient email
        subject: formData.subject,
        message: formData.message,
      }

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id', 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id', 
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
      )

      if (result.status === 200) {
        setShowSuccessModal(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Full EmailJS Error Object:', error)
      const errorMessage = error?.text || error?.message || 'Failed to send message. Please try again later.'
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'prashantguptagzp2708@gmail.com', link: 'mailto:prashantguptagzp2708@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 73092 11871', link: 'tel:+917309211871' },
    { icon: <FiMapPin />, label: 'Location', value: 'Ghazipur, India', link: 'https://maps.google.com/?q=Ghazipur,India' },
  ]

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', link: 'https://github.com/prashantgupta2601' },
    { icon: <FiLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/prashant-gupta-6577a8371/' },
    { icon: <SiGmail />, name: 'Gmail', link: 'mailto:prashantguptagzp2708@gmail.com' },
  ]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link}
                  className="flex items-center space-x-6 p-6 rounded-2xl glass border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{info.label}</p>
                    <p className="text-lg font-medium text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6 text-white">Social Profiles</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-3xl border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?" 
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea 
                  required
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..." 
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all duration-300 flex items-center justify-center space-x-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-[0.98]' : 'hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-[1.02]'}`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <FiLoader className="text-xl" />
                    </motion.div>
                    <span className="animate-pulse">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
