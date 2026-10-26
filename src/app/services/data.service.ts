import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        company: 'E2logy Software Solutions Pvt. Ltd.',
        title: 'Software Engineer',
        startDate: 'Apr 2025',
        endDate: 'Present',
        current: true,
        responsibilities: [
          'Built scalable backend services using Node.js and NestJS, supporting production-grade web apps',
          'Designed and executed secure RESTful APIs for frontend communication and third-party integrations',
          'Built modern frontend components using Angular and React.js for responsive web applications',
          'Streamlined MongoDB and SQL queries, improving API response time and overall system performance',
          'Enforced structured error handling, data validation, and modular backend architecture patterns'
        ],
        technologies: ['Node.js', 'NestJS', 'Angular', 'React.js', 'MongoDB', 'SQL', 'REST APIs']
      },
      {
        id: 2,
        company: 'Capermint Technologies Pvt. Ltd.',
        title: 'Junior Software Engineer',
        startDate: 'Jan 2024',
        endDate: 'Mar 2025',
        current: false,
        responsibilities: [
          'Engineered scalable multiplayer game backend services using Node.js and Express.js',
          'Designed REST APIs for player profiles, leaderboards, matchmaking, and in-game transactions',
          'Managed MongoDB and SQL databases to store player data and persistent game sessions',
          'Delivered real-time communication using Socket.io to support multiplayer gameplay and live game events',
          'Boosted system performance through Redis caching and targeted database query tuning'
        ],
        technologies: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'SQL', 'Redis', 'REST APIs']
      },
      {
        id: 3,
        company: 'TatvaSoft Pvt. Ltd.',
        title: 'Software Engineer Intern',
        startDate: 'May 2023',
        endDate: 'Jun 2023',
        current: false,
        responsibilities: [
          'Contributed to development of an Angular.js based platform, delivering reusable UI components',
          'Enhanced frontend performance and improved cross-device UI responsiveness'
        ],
        technologies: ['Angular.js', 'JavaScript', 'HTML', 'CSS']
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'AI Virtual Assistant',
        description: 'AI-powered personal assistant built with MERN stack and Google Gemini API integration',
        longDescription: 'An intelligent virtual assistant that understands natural language requests and performs actions. Built with MongoDB, Express.js, React.js, and Node.js, integrating Google Gemini API for context-aware responses. Currently extending support for file and image uploads.',
        image: 'assets/images/ai-assistant/A1.png',
        images: [
          'assets/images/ai-assistant/A2.png',
          'assets/images/ai-assistant/A3.png'
        ],
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API'],
        features: [
          'AI-powered natural language understanding',
          'Context-aware intelligent responses',
          'Session persistence for chat history',
          'File and image upload support (in progress)',
          'RESTful API for chat management'
        ],
        githubUrl: 'https://github.com/viral-limbani/ai-assistant',
        category: 'ai',
        isFeatured: true
      },
      {
        id: 2,
        title: 'Real-Time Chat Application',
        description: 'WhatsApp-inspired real-time messaging platform with private and group chat',
        longDescription: 'A real-time chat application supporting individual and group conversations. Built with Node.js, Socket.io, and WebSockets for instant messaging. Features event-driven architecture for private and group chat functionality.',
        image: 'assets/images/chat-app/chat1.png',
        images: [
          'assets/images/chat-app/chat2.png',
          'assets/images/chat-app/chat3.png'
        ],
        technologies: ['Node.js', 'Socket.io', 'WebSockets', 'Event-Driven Architecture'],
        features: [
          'Real-time messaging with WebSockets',
          'Private one-on-one conversations',
          'Group chat rooms',
          'Event-driven architecture',
          'User presence indicators'
        ],
        githubUrl: 'https://github.com/viral-limbani/chat-app',
        category: 'real-time',
        isFeatured: true
      },
      {
        id: 3,
        title: 'NewsPanda News Platform',
        description: 'Category-based news application with daily news updates',
        longDescription: 'A responsive news platform built with Angular.js that fetches and displays daily news organized by categories. Features dynamic data rendering and optimized UI performance for a smooth user experience.',
        image: 'assets/images/news-panda/n1.png',
        images: [
          'assets/images/news-panda/n2.png',
          'assets/images/news-panda/n3.png'
        ],
        technologies: ['Angular.js', 'News API', 'REST APIs', 'Responsive Design'],
        features: [
          'Category-wise news browsing',
          'Daily news updates',
          'Previous/older news access',
          'Responsive design for all devices',
          'Optimized performance and smooth transitions'
        ],
        githubUrl: 'https://github.com/viral-limbani/news-panda',
        category: 'content',
        isFeatured: true
      },
      {
        id: 4,
        title: 'E-Commerce Backend System',
        description: 'Full-featured e-commerce backend with Razorpay payment integration',
        longDescription: 'A complete e-commerce backend system built with Node.js, Express.js, and MongoDB. Features product catalog management, order processing, user authentication, and Razorpay payment gateway integration for secure transactions.',
        image: 'assets/images/ecommerce/e1.png',
        images: [
          'assets/images/ecommerce/e2.png',
          'assets/images/ecommerce/e3.png'
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay API', 'JWT Authentication'],
        features: [
          'Product catalog management',
          'Order processing and management',
          'User authentication with JWT',
          'Razorpay payment gateway integration',
          'RESTful API architecture'
        ],
        githubUrl: 'https://github.com/viral-limbani/ecommerce-backend',
        category: 'ecommerce',
        isFeatured: true
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // Frontend
      { id: 1, name: 'JavaScript', category: 'frontend', icon: 'fab fa-js', proficiency: 90 },
      { id: 2, name: 'TypeScript', category: 'frontend', icon: 'fab fa-js', proficiency: 85 },
      { id: 3, name: 'Angular', category: 'frontend', icon: 'fab fa-angular', proficiency: 85 },
      { id: 4, name: 'React.js', category: 'frontend', icon: 'fab fa-react', proficiency: 75 },
      { id: 5, name: 'Next.js', category: 'frontend', icon: 'fab fa-react', proficiency: 70 },
      { id: 6, name: 'Vue.js', category: 'frontend', icon: 'fab fa-vuejs', proficiency: 65 },
      { id: 7, name: 'HTML5', category: 'frontend', icon: 'fab fa-html5', proficiency: 90 },
      { id: 8, name: 'CSS3', category: 'frontend', icon: 'fab fa-css3-alt', proficiency: 85 },

      // Backend
      { id: 9, name: 'Node.js', category: 'backend', icon: 'fab fa-node-js', proficiency: 90 },
      { id: 10, name: 'Express.js', category: 'backend', icon: 'fas fa-server', proficiency: 85 },
      { id: 11, name: 'NestJS', category: 'backend', icon: 'fas fa-server', proficiency: 75 },
      { id: 12, name: 'REST APIs', category: 'backend', icon: 'fas fa-code-branch', proficiency: 90 },
      { id: 13, name: 'JWT Authentication', category: 'backend', icon: 'fas fa-lock', proficiency: 85 },
      { id: 14, name: 'Microservices', category: 'backend', icon: 'fas fa-project-diagram', proficiency: 70 },

      // Databases
      { id: 15, name: 'MongoDB', category: 'database', icon: 'fas fa-database', proficiency: 85 },
      { id: 16, name: 'MySQL', category: 'database', icon: 'fas fa-database', proficiency: 80 },

      // Cloud & Tools
      { id: 17, name: 'Google Cloud Platform', category: 'cloud', icon: 'fab fa-google', proficiency: 70 },
      { id: 18, name: 'Redis', category: 'cloud', icon: 'fas fa-memory', proficiency: 75 },
      { id: 19, name: 'Git', category: 'tools', icon: 'fab fa-git-alt', proficiency: 85 },
      { id: 20, name: 'Docker', category: 'tools', icon: 'fab fa-docker', proficiency: 65 },
      { id: 21, name: 'Postman', category: 'tools', icon: 'fas fa-flask', proficiency: 85 },
      { id: 22, name: 'WebSockets', category: 'other', icon: 'fas fa-bolt', proficiency: 80 },
      { id: 23, name: 'Socket.io', category: 'other', icon: 'fas fa-comments', proficiency: 80 },
    ];
  }

  getTotalExperience(): string {
    return '3+ years';
  }

  getEducation() {
    return {
      degree: 'Bachelor of Technology (B.Tech) - Computer Engineering',
      institution: 'Chorusat University',
      cgpa: '7.94 / 10'
    };
  }
}
