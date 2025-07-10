import React from 'react';
import { 
  Heart, 
  Users, 
  Award, 
  Utensils, 
  Wifi, 
  CreditCard, 
  Shield, 
  Clock, 
  MapPin, 
  ChefHat,
  Coffee,
  Star,
  Quote,
  Phone,
  Mail,
  MessageCircle,
  Instagram
} from 'lucide-react';

const About = () => {
  // Custom styles object for complex animations and effects
  const customStyles = {
    heroBackground: {
      background: 'linear-gradient(135deg, #fff7ed 0%, #fef2f2 100%)',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    heroImage: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.2
    },
    gradientCard: {
      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
      borderRadius: '1rem',
      padding: '2rem',
      color: 'white',
      textAlign: 'center'
    },
    statsGradient: {
      background: 'linear-gradient(135deg, #fff7ed 0%, #fef2f2 100%)',
      padding: '5rem 0'
    },
    glassCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    hoverCard: {
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    teamMemberBadge: {
      position: 'absolute',
      bottom: '-0.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#f97316',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem'
    },
    quoteIcon: {
      position: 'absolute',
      top: '-0.5rem',
      left: '-0.5rem',
      width: '2rem',
      height: '2rem',
      color: '#fed7aa'
    },
    formInput: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    formInputFocus: {
      borderColor: '#f97316',
      boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.1)'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    submitButtonHover: {
      background: 'linear-gradient(135deg, #ea580c 0%, #b91c1c 100%)',
      transform: 'translateY(-1px)'
    }
  };

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Students Served Daily',
      color: '#2563eb',
      bgColor: '#dbeafe'
    },
    {
      icon: Coffee,
      value: '1000+',
      label: 'Meals Prepared Daily',
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      icon: Star,
      value: '4.8',
      label: 'Average Rating',
      color: '#ca8a04',
      bgColor: '#fef3c7'
    },
    {
      icon: Clock,
      value: '16',
      label: 'Hours of Service',
      color: '#9333ea',
      bgColor: '#f3e8ff'
    }
  ];

  const features = [
    {
      icon: Utensils,
      title: 'Diverse Menu',
      description: 'North Indian, South Indian, Chinese, and Continental cuisines available daily',
      color: '#dc2626',
      bgColor: '#fecaca'
    },
    {
      icon: CreditCard,
      title: 'Digital Payments',
      description: 'Accept UPI, cards, and digital wallets for convenient transactions',
      color: '#2563eb',
      bgColor: '#dbeafe'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet access while you dine and study',
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      icon: Shield,
      title: 'Food Safety',
      description: 'FSSAI certified with regular quality and hygiene inspections',
      color: '#9333ea',
      bgColor: '#f3e8ff'
    },
    {
      icon: Clock,
      title: 'Extended Hours',
      description: 'Open from early morning to late night for all your meal needs',
      color: '#ea580c',
      bgColor: '#fed7aa'
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Centrally located in the hostel for easy access from all blocks',
      color: '#0d9488',
      bgColor: '#ccfbf1'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Head Chef',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg',
      specialty: 'North Indian Cuisine'
    },
    {
      name: 'Priya Sharma',
      role: 'Kitchen Manager',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      specialty: 'Operations Management'
    },
    {
      name: 'Mohammed Ali',
      role: 'Assistant Chef',
      experience: '5 years',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg',
      specialty: 'South Indian Cuisine'
    },
    {
      name: 'Anjali Patel',
      role: 'Nutritionist',
      experience: '6 years',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      specialty: 'Meal Planning'
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Mehta',
      year: 'Final Year, Computer Science',
      content: 'The canteen has been my second home for the past 4 years. The food quality is exceptional and the staff treats us like family. The variety in menu keeps things interesting!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
    },
    {
      name: 'Vikram Singh',
      year: 'Third Year, Mechanical Engineering',
      content: 'Being from North India, I was worried about finding good food. But this canteen serves authentic North Indian dishes that remind me of home. The dal and chapati are perfect!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg'
    },
    {
      name: 'Rohit Sharma',
      year: 'Second Year, Electronics',
      content: 'The late-night snacks have been a lifesaver during exam season. The canteen staff is always helpful and the prices are very reasonable for students.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
    },
    {
      name: 'Karan Joshi',
      year: 'First Year, Civil Engineering',
      content: 'As a fresher, the canteen helped me settle in quickly. The food is hygienic, tasty, and nutritious. The breakfast options are particularly good!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Ground Floor, Block A', 'Boys Hostel Complex', 'University Campus'],
      color: '#dc2626',
      bgColor: '#fecaca'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109', 'Emergency: +91 76543 21098'],
      color: '#16a34a',
      bgColor: '#dcfce7'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Breakfast: 6:00 AM - 10:00 AM', 'Lunch: 12:00 PM - 3:00 PM', 'Dinner: 7:00 PM - 10:00 PM'],
      color: '#2563eb',
      bgColor: '#dbeafe'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['canteen@hostel.edu', 'feedback@hostel.edu', 'orders@hostel.edu'],
      color: '#9333ea',
      bgColor: '#f3e8ff'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section style={customStyles.heroBackground}>
        <div style={customStyles.heroOverlay}></div>
        <div style={customStyles.heroImage}></div>
        
        <div style={{ 
          position: 'relative', 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem 5rem 1rem' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '2rem' 
            }}>
              <div style={{ 
                backgroundColor: '#fed7aa', 
                padding: '1.5rem', 
                borderRadius: '50%' 
              }}>
                <ChefHat style={{ width: '4rem', height: '4rem', color: '#ea580c' }} />
              </div>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Welcome to Our
              <span style={{ color: '#ea580c', display: 'block' }}>Hostel Canteen</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
              color: '#374151', 
              marginBottom: '2rem', 
              maxWidth: '48rem', 
              margin: '0 auto 2rem auto' 
            }}>
              Where comfort meets cuisine. Serving delicious, nutritious meals to fuel your academic journey.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem', 
              maxWidth: '64rem', 
              margin: '0 auto' 
            }}>
              <div style={customStyles.glassCard}>
                <Clock style={{ width: '2rem', height: '2rem', color: '#ea580c', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Open Daily</h3>
                <p style={{ color: '#6b7280' }}>6:00 AM - 10:00 PM</p>
              </div>
              
              <div style={customStyles.glassCard}>
                <MapPin style={{ width: '2rem', height: '2rem', color: '#ea580c', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Location</h3>
                <p style={{ color: '#6b7280' }}>Ground Floor, Block A</p>
              </div>
              
              <div style={customStyles.glassCard}>
                <ChefHat style={{ width: '2rem', height: '2rem', color: '#ea580c', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Fresh Daily</h3>
                <p style={{ color: '#6b7280' }}>Made with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1rem' 
            }}>
              About Our Canteen
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              More than just a place to eat, we're the heart of our hostel community
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '3rem', 
            alignItems: 'center' 
          }}>
            <div>
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Canteen interior"
                style={{ 
                  borderRadius: '1rem', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '1rem' 
                }}>Our Story</h3>
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '1.5rem', 
                  lineHeight: '1.6' 
                }}>
                  Established in 2015, our canteen has been serving as the culinary backbone of our hostel community. 
                  We understand that being away from home can be challenging, which is why we strive to create meals 
                  that remind you of home while introducing you to new flavors and experiences.
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6' 
                }}>
                  Our dedicated team of chefs and staff work tirelessly to ensure every meal is prepared with care, 
                  using fresh ingredients and traditional cooking methods that preserve both nutrition and taste.
                </p>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1.5rem' 
              }}>
                {[
                  { icon: Heart, title: 'Made with Love', desc: 'Every dish prepared with care and attention' },
                  { icon: Users, title: 'Community First', desc: 'Building connections over shared meals' },
                  { icon: Award, title: 'Quality Assured', desc: 'Maintaining highest standards of hygiene' },
                  { icon: Utensils, title: 'Diverse Menu', desc: 'Catering to all tastes and preferences' }
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ 
                      backgroundColor: '#fed7aa', 
                      padding: '1rem', 
                      borderRadius: '50%', 
                      width: '4rem', 
                      height: '4rem', 
                      margin: '0 auto 1rem auto', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <item.icon style={{ width: '2rem', height: '2rem', color: '#ea580c' }} />
                    </div>
                    <h4 style={{ 
                      fontWeight: '600', 
                      color: '#111827', 
                      marginBottom: '0.5rem' 
                    }}>{item.title}</h4>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#6b7280' 
                    }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={customStyles.statsGradient}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1rem' 
            }}>
              Our Impact in Numbers
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280' 
            }}>
              Proud to serve our hostel community with dedication and excellence
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '1rem', 
                padding: '2rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  backgroundColor: stat.bgColor, 
                  padding: '1rem', 
                  borderRadius: '50%', 
                  width: '4rem', 
                  height: '4rem', 
                  margin: '0 auto 1.5rem auto', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <stat.icon style={{ width: '2rem', height: '2rem', color: stat.color }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.875rem', 
                    fontWeight: 'bold', 
                    color: '#111827', 
                    marginBottom: '0.5rem' 
                  }}>{stat.value}</div>
                  <div style={{ color: '#6b7280' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem', 
              padding: '2rem', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
              maxWidth: '64rem', 
              margin: '0 auto' 
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '1.5rem' 
              }}>Our Commitment</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem' 
              }}>
                {[
                  { title: 'Nutritious Meals', desc: 'Balanced nutrition to support your academic performance' },
                  { title: 'Affordable Pricing', desc: 'Quality food at student-friendly prices' },
                  { title: 'Hygienic Environment', desc: 'Clean and safe dining experience for all' }
                ].map((item, index) => (
                  <div key={index}>
                    <h4 style={{ 
                      fontWeight: '600', 
                      color: '#ea580c', 
                      marginBottom: '0.5rem' 
                    }}>{item.title}</h4>
                    <p style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1rem' 
            }}>
              Why Students Choose Us
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              We go beyond just serving food - we create an experience that makes your hostel life comfortable and convenient
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{ 
                backgroundColor: '#f9fafb', 
                borderRadius: '1rem', 
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  backgroundColor: feature.bgColor, 
                  padding: '1rem', 
                  borderRadius: '50%', 
                  width: '4rem', 
                  height: '4rem', 
                  marginBottom: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <feature.icon style={{ width: '2rem', height: '2rem', color: feature.color }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#111827', 
                  marginBottom: '1rem' 
                }}>{feature.title}</h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6' 
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '4rem', 
            ...customStyles.gradientCard 
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>Special Services</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {[
                { title: 'Tiffin Service', desc: 'Monthly meal plans available' },
                { title: 'Birthday Specials', desc: 'Complimentary cake on birthdays' },
                { title: 'Group Orders', desc: 'Bulk ordering for events' },
                { title: '24/7 Snacks', desc: 'Vending machines available' }
              ].map((service, index) => (
                <div key={index}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    marginBottom: '0.5rem' 
                  }}>{service.title}</h4>
                  <p style={{ color: '#fed7aa' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1rem' 
            }}>
              Meet Our Team
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              The passionate people behind every delicious meal you enjoy
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '1rem', 
                padding: '1.5rem', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                  <img 
                    src={member.image}
                    alt={member.name}
                    style={{ 
                      width: '8rem', 
                      height: '8rem', 
                      borderRadius: '50%', 
                      margin: '0 auto', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={customStyles.teamMemberBadge}>
                    {member.experience}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#111827', 
                    marginBottom: '0.5rem' 
                  }}>{member.name}</h3>
                  <p style={{ 
                    color: '#ea580c', 
                    fontWeight: '500', 
                    marginBottom: '0.5rem' 
                  }}>{member.role}</p>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '0.875rem' 
                  }}>{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '4rem', 
            backgroundColor: 'white', 
            borderRadius: '1rem', 
            padding: '2rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#111827', 
              textAlign: 'center', 
              marginBottom: '2rem' 
            }}>Our Team Excellence</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem' 
            }}>
              {[
                { icon: ChefHat, title: 'Experienced Chefs', desc: 'Our chefs bring decades of culinary expertise from renowned restaurants' },
                { icon: Users, title: 'Dedicated Staff', desc: 'Friendly and helpful staff members who care about your dining experience' },
                { icon: Award, title: 'Certified Professionals', desc: 'Food safety certified team ensuring highest quality standards' }
              ].map((item, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    backgroundColor: '#fed7aa', 
                    padding: '1rem', 
                    borderRadius: '50%', 
                    width: '4rem', 
                    height: '4rem', 
                    margin: '0 auto 1rem auto', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <item.icon style={{ width: '2rem', height: '2rem', color: '#ea580c' }} />
                  </div>
                  <h4 style={{ 
                    fontWeight: '600', 
                    color: '#111827', 
                    marginBottom: '0.5rem' 
                  }}>{item.title}</h4>
                  <p style={{ color: '#6b7280' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '1rem' 
            }}>
              What Our Students Say
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              Real feedback from students who make our canteen their daily dining destination
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem' 
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ 
                backgroundColor: '#f9fafb', 
                borderRadius: '1rem', 
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem' 
                }}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ 
                      width: '4rem', 
                      height: '4rem', 
                      borderRadius: '50%', 
                      objectFit: 'cover', 
                      marginRight: '1rem' 
                    }}
                  />
                  <div>
                    <h3 style={{ 
                      fontWeight: '600', 
                      color: '#111827' 
                    }}>{testimonial.name}</h3>
                    <p style={{ 
                      color: '#6b7280', 
                      fontSize: '0.875rem' 
                    }}>{testimonial.year}</p>
                  </div>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <Quote style={customStyles.quoteIcon} />
                  <p style={{ 
                    color: '#374151', 
                    fontStyle: 'italic', 
                    marginBottom: '1rem', 
                    position: 'relative', 
                    zIndex: 10,
                    lineHeight: '1.6'
                  }}>{testimonial.content}</p>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      color: '#fbbf24', 
                      fill: '#fbbf24' 
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '4rem', 
            ...customStyles.gradientCard 
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>Join the Satisfied Students</h3>
            <p style={{ 
              fontSize: '1.125rem', 
              marginBottom: '1.5rem' 
            }}>Experience the best hostel canteen dining in the city</p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '1rem' 
            }}>
              {[
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '4.8/5', label: 'Average Rating' },
                { value: '500+', label: 'Daily Visitors' }
              ].map((stat, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  backdropFilter: 'blur(10px)', 
                  borderRadius: '0.5rem', 
                  padding: '0.75rem 1.5rem' 
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold' 
                  }}>{stat.value}</div>
                  <div style={{ fontSize: '0.875rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
    </div>
  );
};

export default About;