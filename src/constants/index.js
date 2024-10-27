import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  LazyLoadedThreeJS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "NextJs",
    icon: "src/assets/tech/nextjs-icon.png",
  },
  {
    name: "Python",
    icon: "src/assets/tech/pythimg.png",
  },
  {
    name: "Canva",
    icon: "src/assets/tech/pngwing.com.png",
  },
  {
    name: "C++",
    icon: "src/assets/tech/pngcplus.png",
  },
  
];

const experiences = [
  {
    title: "AWS AI & ML Scholarship Recipient",
    company_name: "Udacity & AWS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Selected as one of 2,500 students worldwide for the prestigious AWS AI & ML Scholarship.",
      "Prequalified by scoring 80% or better on AWS DeepRacer Student assessments and achieving a lap time of under 2 minutes on the AWS DeepRacer leaderboard.",
      "Pursuing the AI Programming with Python Nanodegree, developing expertise in Python for AI, linear algebra with NumPy, and applied calculus for AI models, including gradient descent and backpropagation.",
      "Building and implementing transformer neural networks with PyTorch, and creating AI models like image classifiers through neural network training, backpropagation, and gradient descent.",
    ],
  },
  {
    title: "ML Summer School Participant",
    company_name: "Amazon",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023 & 2024",
    points: [
      "Selected for Amazon's prestigious ML Summer School program in consecutive years (2023 & 2024).",
      "Chosen from among 3,000 nationwide applicants each year.",
      "Gained in-depth knowledge of machine learning algorithms, model evaluation techniques, and real-world applications of ML",
      "Attended Amazon ML Summer School, an intensive learning program focused on machine learning topics such as Supervised Learning, Deep Neural Networks, Dimensionality Reduction, Unsupervised Learning, Generative AI, Large Language Models (LLMs), Sequential Learning, Causal Inference, and Reinforcement Learning.",
    ],
  },
  {
    title: "Coding Accomplishments",
    company_name: "Codeforces, Leetcode, CodeChef, HackerRank",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Successfully solved 700+ coding problems across competitive programming platforms.",
      "Achieved 5-star badge in C++ on HackerRank, demonstrating proficiency in algorithms and problem-solving.",
      "Myntra Hackathon Participant: Collaborated with a team to develop an innovative solution, utilizing skills in full-stack development, machine learning, and problem-solving under time constraints.",
    ],
  },
  {
    title: "Google Cloud Career Practitioner Campaign Participant",
    company_name: "Google",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022",
    points: [
      "Participated in the Google Cloud Career Practitioner Campaign alongside 30 selected students from my college.",
      "Successfully completed courses and quests focused on Google Cloud technologies, gaining hands-on experience with cloud computing services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Led environmental drives and designed awareness posters to promote sustainability.",
    name: "National Service Scheme (NSS)",
    designation: "",
    company: "IIT Patna",
    image: "https://nss.iitp.ac.in/images/mainNSS/logo.ico",
  },
  {
    testimonial:
      "Participated in competitive programming contests and increased peer involvement.",
    name: "NJack",
    designation: "Coding Club",
    company: "IIT Patna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrX5WUuBhKuFl5jghIvECTb6VEWfPVx5hQbw&s",
  },
  {
    testimonial:
      "Participated in stage acts for various programs and activities.",
    name: "Yavanika",
    designation: "Dramatics Club",
    company: "IIT Patna",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9akDefSd01pRorFaFUjU9Bmfk0plAZrWR6w&s",
  },
];

const projects = [
  {
    name: "Movie Portal",
    description:
      "Developed a web-based platform resembling Netflix using Next.js 13, MongoDB, and Tailwind CSS, featuring secure user authentication with NextAuth, PIN-based profile management, and a responsive, dynamic UI enhanced with Tailwind CSS and Framer Motion for an engaging user experience.",
    tags: [
      {
        name: "Next.js 13",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "NextAuth",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/HIMANSHIMANGLA/MoviePortal",
  },
  {
    name: "Product Recommendor",
    description:
      "Developed a web application that provides recommendations based on voice or text input using NLP techniques and BERT embeddings for accurate matching. Featuring a Flask backend and React frontend, the app supports voice queries through speech recognition and integrates input into a responsive UI. A recommendation algorithm suggests similar items, enhancing user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "BERT",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HIMANSHIMANGLA/product-recommendation-system",
  },
  {
    name: "IPL Score Predictor",
    description:
      "Developed a machine learning model to predict first-inning scores in IPL matches using various regression algorithms. Leveraged ball-by-ball match data from past IPL seasons and applied feature engineering to enhance model accuracy. After evaluating multiple models, deployed the RandomForest Regressor for optimal performance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "RandomForest Regressor",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/ipl.png",
    source_code_link: "https://github.com/HIMANSHIMANGLA/IPL-Score-Predictor",
  },
  {
    name: "Image Colorizer",
    description:
      "Developed a Python-based tool to colorize black-and-white images using a deep learning model, leveraging OpenCV’s DNN module to implement a colorization algorithm based on Richard Zhang et al.'s research. Optimized model integration to improve accuracy and the visual quality of the colorized images, showcasing strong proficiency in Python, computer vision, and deep learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/colorizer.png",
    source_code_link: "https://github.com/HIMANSHIMANGLA/ImageColorizer",
  },
  {
    name: "Easy Recipes Hub",
    description:
      "Developed a feature-rich web application using React.js to provide personalized recipe suggestions based on user-input ingredients. Leveraged external APIs with Axios to fetch and display a diverse range of recipes and images, while implementing advanced filtering options with React hooks to refine search results. Designed an engaging and responsive user interface with CSS3, ensuring optimal performance across all devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/HIMANSHIMANGLA/Easy-Recipes-Hub",
  },
  {
    name: "Snake-Safari",
    description:
      "Built an engaging Snake Game with smooth controls and grid-based mechanics, featuring real-time score tracking, high score display, and accurate collision detection. Designed a captivating user interface with visually appealing graphics, background images, and immersive sound effects. Enhanced the gameplay by integrating local storage functionality to save and retrieve high scores, fostering a competitive experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/snake.png",
    source_code_link: "https://github.com/HIMANSHIMANGLA/Snake-Safari",
  },
];

export { services, technologies, experiences, testimonials, projects };
