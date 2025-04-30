import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css';

const Index = () => {
  const navigate = useNavigate();
  
  const moveToRegister = () => {
    navigate('/companyRegister');
  };
  
  const moveToLogin = () => {
    navigate('/signIn');
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  // Animation effect for the text
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="containerindex">
      <div className="overlay"></div>
      
      {/* Navigation */}
      <nav className="main-nav">
        <div className="logo">Office<span className="highlight">Pro</span></div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>
          <button onClick={moveToLogin} className="nav-btn">Login</button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero">
        <h1 className="animate-on-scroll">Complete Office Management <span className="highlight">Solution</span></h1>
        
        <p className="hero-text animate-on-scroll">
          Transform how you manage your workplace with our comprehensive office management system.
          From employee scheduling to resource allocation, document management to task tracking,
          OfficePro streamlines your entire operation in one unified platform.
        </p>
        
        <div className="cta-container animate-on-scroll">
          <button onClick={moveToLogin} className="btn btn-primary">
            LOGIN
          </button>
          <button onClick={moveToRegister} className="btn btn-secondary">
            REGISTER NOW
          </button>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section features-section">
        <h2 className="section-title animate-on-scroll">Powerful Features</h2>
        <p className="section-subtitle animate-on-scroll">Everything you need to manage your office efficiently</p>
        
        <div className="features-grid animate-on-scroll">
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Employee Management</h3>
            <p>Track attendance, manage schedules, handle leave requests, and maintain employee records</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Performance Tracking</h3>
            <p>Set goals, track progress, and measure performance with intuitive dashboards</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Financial Management</h3>
            <p>Track expenses, manage budgets, and generate financial reports</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📁</div>
            <h3>Document Management</h3>
            <p>Store, organize and share important documents securely</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">✅</div>
            <h3>Task Management</h3>
            <p>Create, assign and track tasks to ensure nothing falls through the cracks</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📆</div>
            <h3>Event Planning</h3>
            <p>Schedule and organize company events, meetings, and conferences</p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="section benefits-section">
        <div className="section-container">
          <div className="benefits-content">
            <h2 className="section-title animate-on-scroll">Why Choose Our Solution?</h2>
            <ul className="benefits-list animate-on-scroll">
              <li><span className="benefit-bullet">✓</span> <strong>Increased Productivity</strong> - Save up to 5 hours per week per employee</li>
              <li><span className="benefit-bullet">✓</span> <strong>Reduced Costs</strong> - Cut administrative expenses by up to 30%</li>
              <li><span className="benefit-bullet">✓</span> <strong>Improved Communication</strong> - Everything in one place, accessible by your entire team</li>
              <li><span className="benefit-bullet">✓</span> <strong>Enhanced Security</strong> - Role-based access control and data encryption</li>
              <li><span className="benefit-bullet">✓</span> <strong>Real-time Updates</strong> - Stay informed with instant notifications</li>
              <li><span className="benefit-bullet">✓</span> <strong>Scalable Solution</strong> - Grows with your business needs</li>
            </ul>
          </div>
          <div className="benefits-image animate-on-scroll">
            <div className="dashboard-preview">
              <div className="dashboard-header"></div>
              <div className="dashboard-sidebar"></div>
              <div className="dashboard-content">
                <div className="dashboard-widget"></div>
                <div className="dashboard-widget"></div>
                <div className="dashboard-widget"></div>
                <div className="dashboard-widget"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="contact-info">
            <h2 className="section-title animate-on-scroll">Get In Touch</h2>
            <p className="section-subtitle animate-on-scroll">Have questions about our office management system? We're here to help!</p>
            
            <div className="contact-details animate-on-scroll">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email Us</h4>
                  <p>info@officepro.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div className="contact-text">
                  <h4>Visit Us</h4>
                  <p>123 Business Avenue, Suite 500<br />Enterprise City, BZ 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="form-success">
                  <p>Thanks for reaching out! We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary form-submit">Send Message</button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">Office<span className="highlight">Pro</span></div>
          <p>© 2025 OfficePro. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;