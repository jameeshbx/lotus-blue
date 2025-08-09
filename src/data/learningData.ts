export interface LearningCourse {
  id: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  duration: string;
  level: string;
  lessons: number;
  price: number;
  curriculum: {
    week: string;
    lessons: number;
    duration: string;
    topics: string[];
  }[];
  keyPoints: string[];
  mode: string;
  seatsLeft: number;
  nextBatch: string;
}

export const learningData: LearningCourse[] = [
  {
    id: "1",
    category: "Coding",
    title: "MERN Stack Development",
    rating: 4.5,
    reviews: 500,
    description:
      "Master The Most In-Demand Full-Stack Technologies With Our MERN Program. From Creating APIs To Deploying Responsive Web Apps, You'll Gain End-To-End Development Experience.",
    duration: "8 Weeks",
    level: "All levels",
    lessons: 34,
    price: 29.0,
    curriculum: [
      {
        week: "Week 1: HTML, CSS, Git Basics",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Introduction to HTML and Web Development",
          "HTML5 Semantic Elements and Structure",
          "CSS Fundamentals and Styling",
          "CSS Flexbox and Grid Layouts",
          "Git Version Control Basics",
          "GitHub Repository Management",
          "Responsive Design Principles",
          "CSS Media Queries and Breakpoints",
        ],
      },
      {
        week: "Week 2: JavaScript Fundamentals",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "JavaScript Syntax and Variables",
          "Data Types and Type Coercion",
          "Control Flow: Conditionals and Loops",
          "Functions: Declaration, Expression, and Arrow Functions",
          "Scope and Closures",
          "Arrays and Array Methods",
          "Objects and Object-Oriented Programming",
          "DOM Manipulation and Event Handling",
        ],
      },
      {
        week: "Week 3: React Basics",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Introduction to React and JSX",
          "Components and Props",
          "State Management with useState",
          "Event Handling in React",
          "Conditional Rendering",
          "Lists and Keys",
          "Component Lifecycle",
          "React Hooks Fundamentals",
        ],
      },
      {
        week: "Week 4: React Advanced",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "useEffect Hook and Side Effects",
          "Custom Hooks Development",
          "Context API for State Management",
          "React Router for Navigation",
          "Form Handling and Validation",
          "Error Boundaries",
          "Performance Optimization",
          "React Best Practices",
        ],
      },
      {
        week: "Week 5: Node.js & Express",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "Introduction to Node.js and NPM",
          "Express.js Framework Setup",
          "Middleware and Request Processing",
          "Routing and API Endpoints",
          "Error Handling and Validation",
          "Authentication and Authorization",
          "File Upload and Processing",
          "Environment Variables and Configuration",
        ],
      },
      {
        week: "Week 6: MongoDB & Database Design",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "Introduction to MongoDB and NoSQL",
          "MongoDB Atlas Setup and Connection",
          "CRUD Operations with Mongoose",
          "Schema Design and Data Modeling",
          "Indexing and Query Optimization",
          "Aggregation Pipeline",
          "Data Validation and Relationships",
          "Database Security Best Practices",
        ],
      },
      {
        week: "Week 7: API Development",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "RESTful API Design Principles",
          "API Authentication with JWT",
          "Input Validation and Sanitization",
          "Error Handling and Status Codes",
          "API Documentation with Swagger",
          "Testing APIs with Postman",
          "Rate Limiting and Security",
          "API Versioning Strategies",
        ],
      },
      {
        week: "Week 8: Deployment & Final Project",
        lessons: 4,
        duration: "2 Hours",
        topics: [
          "Frontend Deployment with Vercel/Netlify",
          "Backend Deployment with Heroku/Railway",
          "Database Deployment and Connection",
          "Environment Configuration",
          "Final Project: Full-Stack MERN Application",
          "Code Review and Optimization",
          "Performance Testing and Monitoring",
          "Project Presentation and Portfolio",
        ],
      },
    ],
    keyPoints: [
      "Next Batch: Starts: August 5, 2025",
      "Installment Option Available",
      "Create real-time apps",
      "Internship support",
      "Certificate of Completion",
    ],
    mode: "Offline (Live + Recorded)",
    seatsLeft: 12,
    nextBatch: "August 5, 2025",
  },
  {
    id: "2",
    category: "Testing",
    title: "QA / Testing (Manual + Automation)",
    rating: 4.5,
    reviews: 500,
    description:
      "Build A Strong Foundation In Software Testing With Hands-On Practice in Both Manual And Automation Testing, Bug Tracking, And Test Management Tools.",
    duration: "4 Weeks",
    level: "All levels",
    lessons: 20,
    price: 29.0,
    curriculum: [
      {
        week: "Week 1: Manual Testing Basics",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Introduction to Software Testing",
          "Software Development Life Cycle (SDLC)",
          "Testing Fundamentals and Principles",
          "Types of Testing: Functional vs Non-Functional",
          "Test Planning and Strategy",
          "Requirement Analysis and Test Case Design",
          "Bug Life Cycle and Defect Management",
          "Test Documentation and Reporting",
        ],
      },
      {
        week: "Week 2: Test Case Design",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Test Case Design Techniques",
          "Equivalence Partitioning and Boundary Value Analysis",
          "Decision Table Testing",
          "State Transition Testing",
          "Use Case Testing",
          "Test Data Management",
          "Test Environment Setup",
          "Manual Testing Tools and Best Practices",
        ],
      },
      {
        week: "Week 3: Automation Testing",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Introduction to Test Automation",
          "Selenium WebDriver Setup and Configuration",
          "Web Element Locators and Interactions",
          "Page Object Model (POM) Design Pattern",
          "TestNG Framework for Test Execution",
          "Data-Driven Testing",
          "Cross-Browser Testing",
          "Automation Best Practices and Guidelines",
        ],
      },
      {
        week: "Week 4: Advanced Automation",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Cucumber BDD Framework",
          "API Testing with Rest Assured",
          "Mobile Testing with Appium",
          "Performance Testing with JMeter",
          "Continuous Integration with Jenkins",
          "Test Reporting and Analytics",
          "Test Automation Framework Design",
          "Real-World Project Implementation",
        ],
      },
    ],
    keyPoints: [
      "Next Batch: Starts: September 1, 2025",
      "Installment Option Available",
      "Real project experience",
      "Job placement support",
      "Certificate of Completion",
    ],
    mode: "Offline (Live + Recorded)",
    seatsLeft: 8,
    nextBatch: "September 1, 2025",
  },
  {
    id: "3",
    category: "Designing",
    title: "UI/UX Design Bootcamp",
    rating: 4.5,
    reviews: 500,
    description:
      "Learn The Complete UI/UX Design Process—From User Research To Interactive Prototyping. Get Hands-On With Figma And Create Projects That Stand Out.",
    duration: "3 Weeks",
    level: "All levels",
    lessons: 15,
    price: 29.0,
    curriculum: [
      {
        week: "Week 1: Design Fundamentals",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "Introduction to UI/UX Design",
          "Design Principles and Visual Hierarchy",
          "Color Theory and Typography",
          "User Psychology and Behavior",
          "Design Systems and Component Libraries",
          "Accessibility and Inclusive Design",
          "Design Tools Overview: Figma, Sketch, Adobe XD",
          "Design Thinking Methodology",
        ],
      },
      {
        week: "Week 2: User Research & Wireframing",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "User Research Methods and Techniques",
          "User Personas and Journey Mapping",
          "Information Architecture and Site Maps",
          "Wireframing and Low-Fidelity Prototypes",
          "User Flow and Task Analysis",
          "Competitive Analysis and Benchmarking",
          "Usability Testing Planning",
          "Design Brief and Project Scope",
        ],
      },
      {
        week: "Week 3: Prototyping & Testing",
        lessons: 5,
        duration: "2 Hours",
        topics: [
          "High-Fidelity Prototyping in Figma",
          "Interactive Prototypes and Animations",
          "User Testing and Feedback Collection",
          "Design Iteration and Refinement",
          "Design Handoff to Development",
          "Design Systems and Style Guides",
          "Portfolio Building and Presentation",
          "Industry Best Practices and Trends",
        ],
      },
    ],
    keyPoints: [
      "Next Batch: Starts: October 1, 2025",
      "Installment Option Available",
      "Portfolio building",
      "Industry mentorship",
      "Certificate of Completion",
    ],
    mode: "Offline (Live + Recorded)",
    seatsLeft: 15,
    nextBatch: "October 1, 2025",
  },
];
