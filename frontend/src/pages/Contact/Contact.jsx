import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Instagram,
  Send,
  Users,
  Headphones,
  Globe,
  Star,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  // Custom styles object for complex animations and effects
  const customStyles = {
    heroBackground: {
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)',
      position: 'relative',
      padding: '5rem 0',
      overflow: 'hidden'
    },
    heroPattern: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      opacity: 0.3
    },
    gradientCard: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white'
    },
    glassCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    formInput: {
      width: '100%',
      padding: '1rem 1.25rem',
      borderRadius: '0.75rem',
      border: '2px solid #e5e7eb',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#ffffff',
      fontFamily: 'inherit'
    },
    formInputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
      transform: 'translateY(-1px)'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    submitButtonHover: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
    },
    contactCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid #f3f4f6'
    },
    contactCardHover: {
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(-8px)',
      borderColor: '#3b82f6'
    },
    iconContainer: {
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem auto',
      transition: 'all 0.3s ease'
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid #e5e7eb'
    },
    socialButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    floatingElement: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      opacity: 0.1,
      animation: 'float 6s ease-in-out infinite'
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Ground Floor, Block A', 'Boys Hostel Complex', 'University Campus', 'City - 123456'],
      color: '#dc2626',
      bgColor: '#fecaca',
      description: 'Come visit our canteen in person'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109', 'Emergency: +91 76543 21098', 'Landline: 0123-456789'],
      color: '#16a34a',
      bgColor: '#dcfce7',
      description: 'Speak directly with our team'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Breakfast: 6:00 AM - 10:00 AM', 'Lunch: 12:00 PM - 3:00 PM', 'Dinner: 7:00 PM - 10:00 PM', 'Snacks: 10:00 AM - 11:00 PM'],
      color: '#2563eb',
      bgColor: '#dbeafe',
      description: 'We\'re here when you need us'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['canteen@hostel.edu', 'feedback@hostel.edu', 'orders@hostel.edu', 'admin@hostel.edu'],
      color: '#9333ea',
      bgColor: '#f3e8ff',
      description: 'Send us your queries anytime'
    }
  ];

  const socialChannels = [
    {
      icon: MessageCircle,
      platform: 'WhatsApp',
      handle: '+91 98765 43210',
      description: 'Quick responses for urgent queries',
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      icon: Instagram,
      platform: 'Instagram',
      handle: '@hostelcanteen',
      description: 'Follow us for daily menu updates',
      color: '#ec4899',
      bgColor: '#fce7f3'
    },
    {
      icon: Globe,
      platform: 'Website',
      handle: 'www.hostelcanteen.edu',
      description: 'Complete information and online ordering',
      color: '#3b82f6',
      bgColor: '#dbeafe'
    }
  ];

  const quickServices = [
    {
      icon: Phone,
      title: 'Emergency Support',
      description: 'Available 24/7 for urgent matters',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant responses during operating hours',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses within 24 hours',
      action: 'Send Email'
    }
  ];

  const faqs = [
    {
      question: 'What are your operating hours?',
      answer: 'We operate from 6:00 AM to 10:00 PM daily, with different meal timings for breakfast, lunch, and dinner.'
    },
    {
      question: 'Do you accept digital payments?',
      answer: 'Yes, we accept UPI, credit/debit cards, and all major digital wallets for your convenience.'
    },
    {
      question: 'Can I place bulk orders for events?',
      answer: 'Absolutely! Contact us 24 hours in advance for bulk orders and special event catering.'
    },
    {
      question: 'Do you have vegetarian options?',
      answer: 'Yes, we have extensive vegetarian and vegan options available throughout the day.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .slide-in-up {
            animation: slideInUp 0.6s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={customStyles.heroBackground}>
        <div style={customStyles.heroPattern}></div>
        
        {/* Floating Elements */}
        <div style={{
          ...customStyles.floatingElement,
          width: '100px',
          height: '100px',
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}></div>
        <div style={{
          ...customStyles.floatingElement,
          width: '60px',
          height: '60px',
          top: '20%',
          right: '15%',
          animationDelay: '2s'
        }}></div>
        <div style={{
          ...customStyles.floatingElement,
          width: '80px',
          height: '80px',
          bottom: '15%',
          left: '20%',
          animationDelay: '4s'
        }}></div>

        <div style={{ 
          position: 'relative', 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '5rem',
              height: '5rem',
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              marginBottom: '2rem',
              boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.4)'
            }}>
              <MessageCircle style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 'bold', 
              color: '#1e293b', 
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Get in <span style={{ color: '#3b82f6' }}>Touch</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', 
              color: '#64748b', 
              maxWidth: '48rem', 
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Have questions, suggestions, or feedback? We'd love to hear from you! 
              Our team is here to help make your dining experience exceptional.
            </p>

            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <span style={{ color: '#3b82f6', fontWeight: '600' }}>📞 Quick Response</span>
              </div>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <span style={{ color: '#10b981', fontWeight: '600' }}>✅ 24/7 Support</span>
              </div>
              <div style={{
                backgroundColor: 'rgba(245, 101, 101, 0.1)',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                border: '1px solid rgba(245, 101, 101, 0.2)'
              }}>
                <span style={{ color: '#f56565', fontWeight: '600' }}>❤️ Student Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#1e293b', 
              marginBottom: '1rem' 
            }}>
              Contact Information
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#64748b', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                style={customStyles.contactCard}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, customStyles.contactCardHover);
                  const icon = e.currentTarget.querySelector('.icon-container');
                  if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.boxShadow = `0 10px 25px -5px ${info.color}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#f3f4f6';
                  const icon = e.currentTarget.querySelector('.icon-container');
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.boxShadow = 'none';
                  }
                }}
              >
                <div 
                  className="icon-container"
                  style={{ 
                    ...customStyles.iconContainer,
                    backgroundColor: info.bgColor,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <info.icon style={{ width: '2rem', height: '2rem', color: info.color }} />
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1e293b', 
                  marginBottom: '0.5rem', 
                  textAlign: 'center' 
                }}>{info.title}</h3>
                
                <p style={{ 
                  color: '#64748b', 
                  textAlign: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem'
                }}>{info.description}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {info.details.map((detail, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: '#f8fafc',
                      borderRadius: '0.5rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = info.bgColor;
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      <CheckCircle style={{ width: '1rem', height: '1rem', color: info.color }} />
                      <span style={{ 
                        color: '#374151', 
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Social Media */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div style={customStyles.glassCard}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1e293b', 
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Send style={{ width: '1.75rem', height: '1.75rem', color: '#3b82f6' }} />
                  Send us a Message
                </h3>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="firstName" style={{ 
                      display: 'block', 
                      fontSize: '0.95rem', 
                      fontWeight: '600', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      style={customStyles.formInput}
                      placeholder="Enter your first name"
                      onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" style={{ 
                      display: 'block', 
                      fontSize: '0.95rem', 
                      fontWeight: '600', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      style={customStyles.formInput}
                      placeholder="Enter your last name"
                      onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" style={{ 
                    display: 'block', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '0.5rem' 
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={customStyles.formInput}
                    placeholder="Enter your email address"
                    onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ 
                    display: 'block', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '0.5rem' 
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    style={customStyles.formInput}
                    placeholder="Enter your phone number"
                    onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" style={{ 
                    display: 'block', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '0.5rem' 
                  }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    style={customStyles.formInput}
                    onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="menu">Menu Suggestion</option>
                    <option value="complaint">Service Issue</option>
                    <option value="compliment">Compliment</option>
                    <option value="catering">Bulk Order/Catering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '0.5rem' 
                  }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    style={{
                      ...customStyles.formInput,
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="Tell us what's on your mind..."
                    onFocus={(e) => Object.assign(e.target.style, customStyles.formInputFocus)}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  style={customStyles.submitButton}
                  onMouseEnter={(e) => Object.assign(e.target.style, customStyles.submitButtonHover)}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Social Media and Quick Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Social Media */}
              <div style={customStyles.glassCard}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1e293b', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Users style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
                  Connect with Us
                </h3>
                <p style={{ 
                  color: '#64748b', 
                  marginBottom: '2rem',
                  fontSize: '1.05rem'
                }}>
                  Follow us on social media for updates, daily menus, and special offers
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {socialChannels.map((social, index) => (
                    <div 
                      key={index} 
                      style={customStyles.socialButton}
                      onMouseEnter={(e) => Object.assign(e.target.style, customStyles.socialButtonHover)}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                      }}
                    >
                      <div style={{ 
                        backgroundColor: social.bgColor, 
                        padding: '0.75rem', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <social.icon style={{ width: '1.25rem', height: '1.25rem', color: social.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ 
                          fontWeight: '600', 
                          color: '#1e293b',
                          marginBottom: '0.25rem'
                        }}>{social.platform}</h4>
                        <p style={{ 
                          color: '#3b82f6', 
                          fontWeight: '500',
                          fontSize: '0.9rem',
                          marginBottom: '0.25rem'
                        }}>{social.handle}</p>
                        <p style={{ 
                          color: '#64748b', 
                          fontSize: '0.85rem'
                        }}>{social.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Services */}
              <div style={customStyles.gradientCard}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Headphones style={{ width: '1.5rem', height: '1.5rem' }} />
                  Quick Support
                </h3>
                <p style={{ 
                  marginBottom: '2rem',
                  opacity: 0.9,
                  fontSize: '1.05rem'
                }}>
                  Need immediate assistance? Choose your preferred support channel
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {quickServices.map((service, index) => (
                    <div key={index} style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                      backdropFilter: 'blur(10px)',
                      borderRadius: '0.75rem', 
                      padding: '1.25rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        marginBottom: '0.75rem'
                      }}>
                        <div style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                          borderRadius: '50%', 
                          padding: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <service.icon style={{ width: '1.25rem', height: '1.25rem' }} />
                        </div>
                        <div>
                          <h4 style={{ 
                            fontWeight: '600',
                            marginBottom: '0.25rem'
                          }}>{service.title}</h4>
                          <p style={{ 
                            fontSize: '0.9rem',
                            opacity: 0.9
                          }}>{service.description}</p>
                        </div>
                      </div>
                      <button style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        color: 'white',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '0.9rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      }}>
                        {service.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#1e293b', 
              marginBottom: '1rem' 
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#64748b', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              Quick answers to common questions about our canteen services
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem',
            maxWidth: '60rem',
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#f8fafc',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '50%',
                    width: '1.5rem',
                    height: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '0.125rem'
                  }}>?</span>
                  {faq.question}
                </h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginLeft: '2.25rem'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        padding: '5rem 0', 
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 'bold', 
            marginBottom: '1rem' 
          }}>
            Ready to Experience Our Service?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '48rem',
            margin: '0 auto 2rem auto'
          }}>
            Visit our canteen today or get in touch with us. We're here to serve you the best meals 
            and create memorable dining experiences.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center', 
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              <MapPin style={{ width: '1.25rem', height: '1.25rem' }} />
              Visit Our Canteen
            </button>
            
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              border: '2px solid white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#1e293b';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}>
              <Phone style={{ width: '1.25rem', height: '1.25rem' }} />
              Call Us Now
            </button>
          </div>
          
          <div style={{ 
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {[
              { icon: Star, text: '4.8/5 Rating', desc: 'From 500+ reviews' },
              { icon: Users, text: '500+ Students', desc: 'Served daily' },
              { icon: Clock, text: '16 Hours', desc: 'Daily service' }
            ].map((stat, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                backdropFilter: 'blur(10px)'
              }}>
                <stat.icon style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{stat.text}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;