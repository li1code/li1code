import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Download,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Brain,
  ChevronDown
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">Kalash Dang</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors duration-300 hover:text-amber-400 ${
                    activeSection === id ? 'text-amber-400' : 'text-gray-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Kalash <span className="text-amber-400">Dang</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-teal-400 font-light">
                AI Generalist & Data Science Student
              </h2>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Building the future with AI-powered solutions. Passionate about transforming data into insights and creating scalable backend systems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-950 px-8 py-3 rounded-lg transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="mailto:dangkalash478@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kalash-dang/" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/li1code" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-teal-400/20 rounded-full blur-2xl"></div>
              <Avatar className="w-80 h-80 border-4 border-gray-800 relative z-10">
                <AvatarImage 
                  src="https://customer-assets.emergentagent.com/job_data-portfolio-47/artifacts/1newjduy_Screenshot%202025-09-20%20230905.png" 
                  alt="Kalash Dang"
                  className="object-cover object-top"
                />
                <AvatarFallback className="text-4xl bg-gray-800">KD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-amber-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate third-year Computer Science Engineering student specializing in Data Science & AI at Apeejay Stya University. My journey in technology is driven by a deep curiosity about how AI can solve real-world business problems and create meaningful impact.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With demonstrated expertise in Python, SQL, and modern backend technologies, I've successfully developed AI-powered prototypes that reduced manual effort in research tasks and built production-style APIs with scalable architectures.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond technical skills, I'm a proven leader who increased student engagement by 40% as President of our Cultural Society and mentored peers on integrating emerging technologies into innovative projects.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-amber-400">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-white">B.Tech Computer Science Engineering</h3>
                    <p className="text-gray-400">Specialization: Data Science & AI</p>
                    <p className="text-gray-500">Apeejay Stya University • 2023-2027</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-400">
                    <Award className="w-5 h-5 mr-2" />
                    Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-300">Youth Peace Ambassadors Impact Award</p>
                  <p className="text-gray-300">1st Prize - National Space Day Quiz</p>
                  <p className="text-gray-300">Google Vertex AI Certified</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional <span className="text-amber-400">Experience</span>
          </h2>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-amber-400/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-amber-400" />
                      Technical Lead
                    </CardTitle>
                    <CardDescription className="text-teal-400">E-Cell, Apeejay Stya University</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-amber-400 text-amber-400">Jul 2025 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300">Spearheading entrepreneurship and innovation projects focused on data and AI adoption across student-led initiatives.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Mentored peers on integrating emerging technologies into business solutions</li>
                  <li>Guided development of AI-powered prototypes for real-world applications</li>
                  <li>Fostered innovation culture among student entrepreneurs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-teal-400/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white flex items-center">
                      <Code className="w-5 h-5 mr-2 text-teal-400" />
                      Technical Intern
                    </CardTitle>
                    <CardDescription className="text-teal-400">MAI Labs</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-teal-400 text-teal-400">Jun 2025 - Aug 2025</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300">Developed enterprise-grade solutions using Golang and Node.js, reducing manual effort in research tasks.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Built AI-enhanced web scraper in Golang for automated data extraction and classification</li>
                  <li>Developed production-style REST API using Node.js and PostgreSQL with MVC architecture</li>
                  <li>Implemented centralized error handling and comprehensive Swagger documentation</li>
                  <li>Applied scalable backend principles for high-performance systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-amber-400/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">President - Cultural Society</CardTitle>
                    <CardDescription className="text-amber-400">Panache Club, ASU</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-amber-400 text-amber-400">Sep 2024 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300">Led a team of 50+ members, increasing student engagement by 40% and organizing major university events.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Spearheaded event planning and execution for ELAAN 2025</li>
                  <li>Managed cross-functional teams and enhanced community involvement</li>
                  <li>Strengthened stakeholder relationships and university partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-gray-800" />
    </div>
  );
};

export default Portfolio;