import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Database, Brain, Cloud, BarChart3, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      color: "orange",
      skills: [
        { name: "Python", level: 90, proficiency: "Expert" },
        { name: "SQL", level: 85, proficiency: "Advanced" },
        { name: "Golang", level: 75, proficiency: "Proficient" },
        { name: "C/C++", level: 80, proficiency: "Advanced" },
        { name: "JavaScript", level: 70, proficiency: "Proficient" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      color: "teal",
      skills: [
        { name: "Google Vertex AI", level: 85, proficiency: "Certified" },
        { name: "NLP", level: 80, proficiency: "Advanced" },
        { name: "Data Science", level: 85, proficiency: "Advanced" },
        { name: "AI Prototyping", level: 75, proficiency: "Proficient" },
        { name: "Prompt Engineering", level: 80, proficiency: "Advanced" }
      ]
    },
    {
      title: "Databases & Backend",
      icon: <Database className="w-5 h-5" />,
      color: "orange",
      skills: [
        { name: "PostgreSQL", level: 85, proficiency: "Advanced" },
        { name: "MySQL", level: 80, proficiency: "Advanced" },
        { name: "Node.js", level: 75, proficiency: "Proficient" },
        { name: "Express.js", level: 75, proficiency: "Proficient" },
        { name: "REST APIs", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "teal",
      skills: [
        { name: "Pandas", level: 90, proficiency: "Expert" },
        { name: "NumPy", level: 85, proficiency: "Advanced" },
        { name: "Matplotlib", level: 80, proficiency: "Advanced" },
        { name: "Power BI", level: 75, proficiency: "Proficient" },
        { name: "Tableau", level: 70, proficiency: "Proficient" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-5 h-5" />,
      color: "orange",
      skills: [
        { name: "Jupyter Notebook", level: 90, proficiency: "Expert" },
        { name: "PyCharm", level: 85, proficiency: "Advanced" },
        { name: "Visual Studio Code", level: 85, proficiency: "Advanced" },
        { name: "Git/GitHub", level: 80, proficiency: "Advanced" },
        { name: "SQLite", level: 75, proficiency: "Proficient" }
      ]
    },
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="w-5 h-5" />,
      color: "teal",
      skills: [
        { name: "Team Leadership", level: 95, proficiency: "Expert" },
        { name: "Project Management", level: 90, proficiency: "Expert" },
        { name: "Problem Solving", level: 90, proficiency: "Expert" },
        { name: "Communication", level: 85, proficiency: "Advanced" },
        { name: "Mentoring", level: 80, proficiency: "Advanced" }
      ]
    }
  ];

  const certifications = [
    "Google Vertex AI Prompt Design (2025)",
    "Data Science & AI Training - PyNet Labs (2025)",
    "Python Programming - RedHat, NSDC (2024)",
    "Internship & Job Training - Internshala (2024)"
  ];

  const getColorClasses = (color) => {
    return {
      text: color === 'orange' ? 'text-amber-400' : 'text-teal-400',
      border: color === 'orange' ? 'border-amber-400/50' : 'border-teal-400/50',
      bg: color === 'orange' ? 'bg-amber-400/10' : 'bg-teal-400/10'
    };
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-300">
          Technical <span className="text-amber-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional competencies, built through hands-on projects and continuous learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <Card 
                key={index} 
                className={`bg-gray-900 border-gray-800 hover:${colors.border} transition-all duration-300 hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center ${colors.text}`}>
                    <div className={`p-2 rounded-lg ${colors.bg} mr-3`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`${colors.border} ${colors.text} text-xs`}
                        >
                          {skill.proficiency}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-800"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-center text-white flex items-center justify-center">
              <div className="p-2 rounded-lg bg-teal-400/10 mr-3">
                <BarChart3 className="w-5 h-5 text-teal-400" />
              </div>
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-amber-400">15+</h3>
              <p className="text-gray-400">Programming Languages & Technologies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-teal-400">4+</h3>
              <p className="text-gray-400">Professional Certifications</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-amber-400">50+</h3>
              <p className="text-gray-400">Team Members Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;