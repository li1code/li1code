import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Database, Zap, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Data Extraction and Analysis Tool",
      description: "Designed an automated tool to extract, process, and analyze large datasets from multiple sources, improving decision-making efficiency by 35% through advanced data cleaning and visualization techniques.",
      technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib"],
      highlights: [
        "Automated data processing pipeline reducing manual effort by 60%",
        "Real-time data visualization dashboard with interactive charts",
        "Improved decision-making efficiency by 35% for stakeholders"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "teal"
    },
    {
      title: "Flight Tracking System",
      description: "Developed a real-time flight tracking system using Python to analyze live flight data, integrating multiple APIs and reducing response time by 30% through optimized data processing.",
      technologies: ["Python", "REST APIs", "Real-time Processing", "Data Security"],
      highlights: [
        "Real-time flight data integration from multiple sources",
        "Weather condition analysis and delay prediction",
        "Reduced response time by 30% through optimization",
        "Enhanced data security with encryption protocols"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "orange"
    },
    {
      title: "Multilingual AI Prototype",
      description: "Designed an innovative translation prototype using AI prompts and APIs for the Google Gen AI Exchange Hackathon, exploring voice recognition and local language NLP to make AI tools more inclusive.",
      technologies: ["AI/ML", "Google Gen AI", "Voice Recognition", "NLP", "APIs"],
      highlights: [
        "Seamless voice recognition for multiple languages",
        "Local language NLP integration for inclusivity",
        "Participated in Google Gen AI Exchange Hackathon",
        "Innovative approach to cross-language communication"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "teal"
    },
    {
      title: "AI-Enhanced Web Scraper",
      description: "Built during MAI Labs internship using Golang for automated data extraction and classification, reducing manual research effort and improving data accuracy through intelligent categorization.",
      technologies: ["Golang", "Web Scraping", "AI Classification", "Automation"],
      highlights: [
        "Intelligent data classification using AI algorithms",
        "Automated extraction from multiple web sources",
        "Reduced manual research effort significantly",
        "Production-ready with error handling and logging"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    return color === 'orange' 
      ? 'text-orange-500 border-orange-500/50' 
      : 'text-teal-400 border-teal-400/50';
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical expertise in AI, data science, and backend development with quantifiable results and real-world impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-800 ${getColorClasses(project.color)}`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-teal-400">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-950 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-orange-500 hover:bg-orange-600 text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 transition-all"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;