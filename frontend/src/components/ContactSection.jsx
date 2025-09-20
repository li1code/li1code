import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  Download,
  ExternalLink,
  Award
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dangkalash478@gmail.com",
      href: "mailto:dangkalash478@gmail.com",
      color: "amber"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 95607 97475",
      href: "tel:+919560797475",
      color: "teal"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "kalash-dang",
      href: "https://www.linkedin.com/in/kalash-dang/",
      color: "amber"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "li1code",
      href: "https://github.com/li1code",
      color: "teal"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Gurugram, India",
      href: null,
      color: "amber"
    }
  ];

  const achievements = [
    "Youth Peace Ambassadors Impact Award - 20th World Peace Congress",
    "1st Prize - National Space Day Quiz (Apeejay Stya University)",
    "President - Cultural Society (40% engagement increase)",
    "Google Vertex AI Certified Professional"
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Let's <span className="text-amber-400">Connect</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Ready to collaborate on innovative AI projects or discuss opportunities in data science? I'd love to hear from you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Send className="w-5 h-5 mr-2 text-amber-400" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-400 resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Achievements */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <div className={`p-2 rounded-lg ${contact.color === 'orange' ? 'bg-orange-500/10 text-orange-500' : 'bg-teal-400/10 text-teal-400'}`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className={`${contact.color === 'orange' ? 'text-orange-500 hover:text-orange-400' : 'text-teal-400 hover:text-teal-300'} transition-colors font-medium`}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                    {contact.href && contact.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-teal-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{achievement}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="flex space-x-4">
              <Button 
                className="flex-1 bg-teal-400 hover:bg-teal-500 text-gray-950 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/kalash-dang/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Something Amazing Together?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're looking for an AI generalist, a data science collaborator, or a passionate tech leader, 
            I'm excited to explore opportunities where we can create meaningful impact through technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="border-orange-500 text-orange-500 px-4 py-2">
              AI & Machine Learning
            </Badge>
            <Badge variant="outline" className="border-teal-400 text-teal-400 px-4 py-2">
              Data Science
            </Badge>
            <Badge variant="outline" className="border-orange-500 text-orange-500 px-4 py-2">
              Backend Development
            </Badge>
            <Badge variant="outline" className="border-teal-400 text-teal-400 px-4 py-2">
              Leadership
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;