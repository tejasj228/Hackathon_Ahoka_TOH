import { useState } from 'react'
import './App.css'

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="app">
      {/* Header */}
      <header className="header glass-header">
        <div className="header-inner">
          <div className="header-logo">
            <img src="/tohk.webp" alt="TOH Logo" className="toh-logo" />
          </div>
          <button className="btn-register">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          {/* Translucent card with ALL content inside */}
          <div className="translucent-card">
            <div className="badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              Youth Innovation Hackathon
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Build for Rural India</span><br />
              <span className="subtitle-text">Reimagining Innovation. Reconnecting Roots.</span>
            </h1>
            <div className="hero-meta">
              <span className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                26-28 December 2025
              </span>
              <span className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                IIT Delhi campus
              </span>
            </div>
            <div className="hero-actions">
              <button className="btn-apply">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Apply Now
              </button>
              <button className="btn-learn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2 className="about-title">
              About the <span className="gradient-text-about">Hackathon</span>
            </h2>
            <div className="about-description">
              <p>
                <strong>Square Hacks</strong> is a national hackathon that challenges college students to use the power of AI to reimagine rural India. It's not just about coding, it's about purpose-driven creation, a space to design, prototype, and pitch bold ideas that make technology work for everyone. From digital agriculture to last-mile education, students are free to explore challenges that matter most, building solutions that bridge the gap between India's roots and its rapidly evolving AI era.
              </p>
            </div>
          </div>

          <div className="about-cards">
            {/* Eligibility Card */}
            <div className="info-card eligibility-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="card-title">Eligibility</h3>
              <div className="card-content">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <span>College students from any discipline across India</span>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <span>Age: 18–22 years</span>
                </div>
              </div>
            </div>

            {/* Deadline Card */}
            <div className="info-card deadline-card">
              <div className="card-icon-wrapper">
                <svg className="card-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="card-title">Last Date to Apply</h3>
              <div className="card-content deadline-content">
                <div className="date-display">
                  <div className="date-left">
                    <div className="date-number">25</div>
                    <div className="date-details">
                      <div className="date-month">November</div>
                      <div className="date-year">2025</div>
                    </div>
                  </div>
                  <div className="time-display">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>11:59 PM (IST)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Flow Chart */}
          <div className="hackathon-flow">
            <h3 className="flow-title">How It Works</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h4>Apply</h4>
                <p>Submit your application</p>
              </div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h4>Get Selected</h4>
                <p>Receive confirmation</p>
              </div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h4>Build</h4>
                <p>Create your solution</p>
              </div>
              <div className="flow-step">
                <div className="step-number">4</div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>Win</h4>
                <p>Claim prizes & recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section id="objectives" className="objectives-section">
        <div className="objectives-container">
          <div className="objectives-header">
            <h2 className="objectives-title">
              Key <span className="gradient-text-objectives">Objectives</span>
            </h2>
          </div>

          <div className="objectives-grid">
            {/* Objective 1 */}
            <div className="objective-card">
              <div className="objective-number">01</div>
              <div className="objective-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="objective-title">Empowering young innovators</h3>
              <p className="objective-description">
                Inspiring youth to leverage AI for solving rural challenges.
              </p>
              <div className="objective-glow"></div>
            </div>

            {/* Objective 2 */}
            <div className="objective-card">
              <div className="objective-number">02</div>
              <div className="objective-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="objective-title">Promoting human-centered design</h3>
              <p className="objective-description">
                Encouraging equitable, community-driven innovation for real impact.
              </p>
              <div className="objective-glow"></div>
            </div>

            {/* Objective 3 */}
            <div className="objective-card">
              <div className="objective-number">03</div>
              <div className="objective-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="objective-title">Building connections</h3>
              <p className="objective-description">
                Connecting students with mentors and leaders from the tech and changemaking ecosystem.
              </p>
              <div className="objective-glow"></div>
            </div>

            {/* Objective 4 */}
            <div className="objective-card">
              <div className="objective-number">04</div>
              <div className="objective-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </div>
              <h3 className="objective-title">Prototyping for change</h3>
              <p className="objective-description">
                Nurturing ideas that hold real-world potential for rural transformation.
              </p>
              <div className="objective-glow"></div>
            </div>

            {/* Objective 5 */}
            <div className="objective-card">
              <div className="objective-number">05</div>
              <div className="objective-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="objective-title">Celebrating youth innovation</h3>
              <p className="objective-description">
                Celebrating young minds driving India's inclusive AI revolution.
              </p>
              <div className="objective-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicative Themes Section */}
      <section id="themes" className="themes-section">
        <div className="themes-container">
          <div className="themes-header">
            <h2 className="themes-title">
              Indicative <span className="gradient-text-themes">Themes</span>
            </h2>
          </div>

          <div className="themes-grid">
            {/* Theme 1 - AgriTech & Water */}
            <div className="theme-card">
              <div className="theme-icon-bg">
                <svg className="theme-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="theme-title">AgriTech & Water</h3>
              <p className="theme-description">
                Soil health, smart irrigation, agri-supply chains, and sustainable farming systems.
              </p>
            </div>

            {/* Theme 2 - Rural Health */}
            <div className="theme-card">
              <div className="theme-icon-bg">
                <svg className="theme-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="theme-title">Rural Health</h3>
              <p className="theme-description">
                Accessible care, telemedicine, nutrition awareness, and AI-powered early diagnosis.
              </p>
            </div>

            {/* Theme 3 - Education & Skills */}
            <div className="theme-card">
              <div className="theme-icon-bg">
                <svg className="theme-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="theme-title">Education & Skills</h3>
              <p className="theme-description">
                Digital learning, vocational training, teacher empowerment, and rural youth innovation.
              </p>
            </div>

            {/* Theme 4 - Livelihoods & Inclusion */}
            <div className="theme-card">
              <div className="theme-icon-bg">
                <svg className="theme-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                  <path d="M16 11l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="theme-title">Livelihoods & Inclusion</h3>
              <p className="theme-description">
                Empowering artisans, supporting microenterprises, and boosting rural entrepreneurship networks.
              </p>
            </div>

            {/* Theme 5 - Sustainability */}
            <div className="theme-card">
              <div className="theme-icon-bg">
                <svg className="theme-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/>
                  <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/>
                  <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3 className="theme-title">Sustainability</h3>
              <p className="theme-description">
                Waste management, renewable energy, circular economy, and eco-conscious community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Process Section */}
      <section id="process" className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="process-title">
              Challenge <span className="gradient-text-process">Process</span>
            </h2>
          </div>

          <div className="process-flowchart">
            {/* Round 1 - Left */}
            <div className="process-step left">
              <div className="step-content">
                <div className="step-badge">Round 1</div>
                <h3 className="step-title">Online Idea Submission</h3>
                <p className="step-date">Upto 25th Nov 2025</p>
                <ul className="step-details">
                  <li>Teams submit their innovative AI-driven ideas addressing rural challenges.</li>
                  <li>Submissions are reviewed based on creativity, feasibility, and impact.</li>
                </ul>
              </div>
            </div>

            {/* Round 2 - Right */}
            <div className="process-step right">
              <div className="step-content">
                <div className="step-badge">Round 2</div>
                <h3 className="step-title">Online Design Sprint</h3>
                <p className="step-date">1st Dec 2025</p>
                <ul className="step-details">
                  <li>Shortlisted teams submit a presentation deck detailing their proposed solution.</li>
                  <li>Final presentations submitted within a 24-hour window.</li>
                </ul>
              </div>
            </div>

            {/* Round 3 - Left */}
            <div className="process-step left">
              <div className="step-content">
                <div className="step-badge">Round 3</div>
                <h3 className="step-title">On-Ground Hackathon, IIT Delhi campus</h3>
                <p className="step-date">26th-28th Dec 2025</p>
                <ul className="step-details">
                  <li>Selected teams prototype and develop their solutions over a 24-hours hack.</li>
                  <li>Mentors guide participants through technical and design challenges.</li>
                </ul>
              </div>
            </div>

            {/* Round 4 - Right */}
            <div className="process-step right">
              <div className="step-content">
                <div className="step-badge">Round 4</div>
                <h3 className="step-title">Final Pitching & Showcase</h3>
                <p className="step-date">28th Dec 2025</p>
                <ul className="step-details">
                  <li>Teams pitch their solutions to a jury of experts and industry leaders.</li>
                  <li>Winning teams announced and awarded for innovation and impact.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="expect" className="expect-section">
        <div className="expect-container">
          <div className="expect-header">
            <h2 className="expect-title">
              What to <span className="gradient-text-expect">Expect</span>
            </h2>
          </div>

          <div className="expect-grid">
            {/* Expectation 1 */}
            <div className="expect-card">
              <div className="expect-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="expect-card-title">24 Hours. Limitless Innovation</h3>
              <p className="expect-card-description">
                Turn real rural challenges into breakthrough tech-powered solutions.
              </p>
            </div>

            {/* Expectation 2 */}
            <div className="expect-card">
              <div className="expect-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="expect-card-title">Mentorship That Matters</h3>
              <p className="expect-card-description">
                Work 1-on-1 with changemakers, industry experts, and design thinkers.
              </p>
            </div>

            {/* Expectation 3 */}
            <div className="expect-card">
              <div className="expect-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="expect-card-title">Workshops & Learning</h3>
              <p className="expect-card-description">
                Upskill fast with hands-on sessions in AI, problem-solving, and pitching.
              </p>
            </div>

            {/* Expectation 4 */}
            <div className="expect-card">
              <div className="expect-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </div>
              <h3 className="expect-card-title">Prototype. Pitch. Impact</h3>
              <p className="expect-card-description">
                Transform your ideas into tangible prototypes and showcase them live.
              </p>
            </div>

            {/* Expectation 5 */}
            <div className="expect-card">
              <div className="expect-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="expect-card-title">Collaboration & Fun</h3>
              <p className="expect-card-description">
                Network, collaborate, and be part of India's next wave of youth innovators!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Guidelines Section */}
      <section id="guidelines" className="guidelines-section">
        <div className="guidelines-container">
          <div className="guidelines-header">
            <h2 className="guidelines-title">
              Important <span className="gradient-text-guidelines">Guidelines</span>
            </h2>
          </div>

          <div className="guidelines-grid">
            {/* Guideline 1 */}
            <div className="guideline-card">
              <div className="guideline-number">01</div>
              <div className="guideline-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h3 className="guideline-title">Ideas must be original, practical, and impact-driven focused on real rural challenges.</h3>
              <div className="guideline-glow"></div>
            </div>

            {/* Guideline 2 */}
            <div className="guideline-card">
              <div className="guideline-number">02</div>
              <div className="guideline-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="guideline-title">Team Size: 4 members (preferably from the same college).</h3>
              <div className="guideline-glow"></div>
            </div>

            {/* Guideline 3 */}
            <div className="guideline-card">
              <div className="guideline-number">03</div>
              <div className="guideline-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="guideline-title">Open to all undergraduate students across disciplines and years.</h3>
              <div className="guideline-glow"></div>
            </div>

            {/* Guideline 4 */}
            <div className="guideline-card">
              <div className="guideline-number">04</div>
              <div className="guideline-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="guideline-title">Round 2 submissions will be open for only 24 hours – be prepared to submit within the deadline.</h3>
              <div className="guideline-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Support Section */}
      <section id="logistics" className="logistics-section">
        <div className="logistics-container">
          <div className="logistics-grid">
            <div className="logistics-header">
              <h2 className="logistics-title">
                Logistics <span className="gradient-text-logistics">Support</span>
              </h2>
              <p className="logistics-subtitle">
                We want you to focus on what matters most: building impactful solutions. Leave the rest to us!
              </p>
            </div>

            <div className="logistics-cards-wrapper">
              {/* Travel */}
              <div className="logistics-card">
                <div className="logistics-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="8" width="18" height="12" rx="2"/>
                    <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                    <path d="M12 14h.01"/>
                    <path d="M9 14h.01"/>
                    <path d="M15 14h.01"/>
                  </svg>
                </div>
                <h3 className="logistics-card-title">Travel</h3>
                <p className="logistics-card-description">
                  Participants will receive travel reimbursement* for their journey to and from Delhi.
                </p>
              </div>

              {/* Accommodation */}
              <div className="logistics-card">
                <div className="logistics-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3 className="logistics-card-title">Accommodation</h3>
                <p className="logistics-card-description">
                  Free on-campus accommodation will be provided for all finalists during the hackathon.
                </p>
              </div>

              {/* Meals */}
              <div className="logistics-card">
                <div className="logistics-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                </div>
                <h3 className="logistics-card-title">Meals</h3>
                <p className="logistics-card-description">
                  Meals and snacks will be served throughout the event.
                </p>
              </div>

              {/* Wi-Fi & Workspace */}
              <div className="logistics-card">
                <div className="logistics-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <line x1="12" y1="20" x2="12.01" y2="20"/>
                  </svg>
                </div>
                <h3 className="logistics-card-title">Wi-Fi & Workspace</h3>
                <p className="logistics-card-description">
                  Enjoy high-speed internet and collaborative working spaces to keep your innovation flowing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section id="evaluation" className="evaluation-section">
        <div className="evaluation-container">
          <div className="evaluation-header">
            <h2 className="evaluation-title">
              <span className="gradient-text-evaluation">Evaluation</span>
            </h2>

          </div>

          <div className="evaluation-timeline">
            {/* Design - Top */}
            <div className="evaluation-item top">
              <div className="evaluation-card">
                <div className="evaluation-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                </div>
                <h3 className="evaluation-card-title">Design</h3>
                <p className="evaluation-card-description">
                  User interface, experience design, and visual appeal of the solution
                </p>
              </div>
              <div className="evaluation-connector"></div>
            </div>

            {/* Originality - Bottom */}
            <div className="evaluation-item bottom">
              <div className="evaluation-connector"></div>
              <div className="evaluation-card">
                <div className="evaluation-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                  </svg>
                </div>
                <h3 className="evaluation-card-title">Originality</h3>
                <p className="evaluation-card-description">
                  Innovation, creativity, and uniqueness of the proposed solution
                </p>
              </div>
            </div>

            {/* Technical Depth - Top */}
            <div className="evaluation-item top">
              <div className="evaluation-card">
                <div className="evaluation-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="evaluation-card-title">Technical Depth</h3>
                <p className="evaluation-card-description">
                  Complexity of implementation, code quality, and technical expertise
                </p>
              </div>
              <div className="evaluation-connector"></div>
            </div>

            {/* Usability - Bottom */}
            <div className="evaluation-item bottom">
              <div className="evaluation-connector"></div>
              <div className="evaluation-card">
                <div className="evaluation-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="evaluation-card-title">Usability</h3>
                <p className="evaluation-card-description">
                  Ease of use, accessibility, and user-friendliness of the solution
                </p>
              </div>
            </div>

            {/* Impact - Top */}
            <div className="evaluation-item top">
              <div className="evaluation-card">
                <div className="evaluation-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 className="evaluation-card-title">Impact</h3>
                <p className="evaluation-card-description">
                  Potential to solve rural challenges and create meaningful change
                </p>
              </div>
              <div className="evaluation-connector"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">
              <span className="gradient-text-faq">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="faq-list">
            {[
              {
                question: "What is Square Hacks 2025?",
                answer: "Square Hacks 2025 is a national-level hackathon for college students to design AI-powered solutions that bridge the digital and rural divide."
              },
              {
                question: "Who can participate?",
                answer: "Undergraduate students in India aged 18-22, from any discipline, can form teams and apply."
              },
              {
                question: "How many rounds are there?",
                answer: "There are four rounds: (1) Idea Submission (online), (2) Online Sprint (24-hour), (3) On-Ground Hackathon at IIT Delhi campus, (4) Final Pitch & Awards."
              },
              {
                question: "Does travel or accommodation get covered?",
                answer: "Yes, selected finalist teams receive travel reimbursement* and free on-campus accommodation & meals during the on‐ground event."
              },
              {
                question: "Are participants required to have technical skills in AI?",
                answer: "Yes, teams should be diverse in skills. They are encouraged to have complimentary skills like coding, design, AI-knowledge, problem-solving, and communication to build balanced, innovative solutions."
              },
              {
                question: "How will my idea be evaluated?",
                answer: "Ideas are evaluated on the basis of design, originality, technical depth, usability and impact."
              },
              {
                question: "Can teams from different colleges or years form together?",
                answer: "Yes, though a same college team is advisable; cross‐college, mixed-year, and interdisciplinary teams of 4 members are allowed."
              },
              {
                question: "What do winners receive?",
                answer: "Top teams will win cash prizes, mentorship from industry and social innovation leaders, exposure via TOH/Ashoka platforms, and access to alumni networks for future opportunities."
              },
              {
                question: "Will my idea be made public?",
                answer: "Your ideas will remain confidential during evaluation. Only shortlisted or winning teams' work may be featured publicly for learning and impact-sharing purposes."
              },
              {
                question: "Is there any registration or participation fee?",
                answer: "No, Square Hacks is completely free to join. There are no hidden or participation charges at any stage of the competition."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`faq-icon ${expandedFAQ === index ? 'expanded' : ''}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`faq-answer ${expandedFAQ === index ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Left Column - About Organisers */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="/logo/tohk.webp" alt="TOH Logo" className="toh-logo" />
                  <span className="logo-text"></span>
                </div>
              </div>
              <p className="footer-description">
                Empowering youth to be changemakers.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Website">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </a>
              </div>
              <div className="footer-contact">
                <p>Contact: hello@toh.org • Partners: TOH & Ashoka</p>
              </div>
            </div>

            {/* Middle Column - Legal */}
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Code of Conduct</a></li>
                <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Right Column - Explore */}
            <div className="footer-column">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
                <li><button onClick={() => scrollToSection('objectives')} className="footer-link">Objectives</button></li>
                <li><button onClick={() => scrollToSection('themes')} className="footer-link">Themes</button></li>
                <li><button onClick={() => scrollToSection('process')} className="footer-link">Process</button></li>
                <li><button onClick={() => scrollToSection('expect')} className="footer-link">What to Expect</button></li>
                <li><button onClick={() => scrollToSection('guidelines')} className="footer-link">Guidelines</button></li>
                <li><button onClick={() => scrollToSection('logistics')} className="footer-link">Logistics</button></li>
                <li><button onClick={() => scrollToSection('evaluation')} className="footer-link">Evaluation</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="footer-link">FAQ</button></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 TOH & Ashoka. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              IIT-Delhi is not responsible for design & delivery of the program.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
