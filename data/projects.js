const projects = [
    {
        id: 1,
        clientName: "AI Automated Facebook Marketplace Helper",
        link: "/",
        tags: "AWS S3, HTML, CSS",
        more: "Built a desktop-native automated facebook marketplace application for a client. In this application, the user inputs their requirements for products they'd like to purchase, the app finds listing that match the criteria, then it messages the seller and keeps the conversation going until a purchase is made or the conversation is ended manually. Can work on any OS. Reach out for a demo",
        features: [
            "Threading",
            "Automation",
            "Artificial Intelligence (AI)",
            "Chatbot",
            "Email"
        ],
        mainTag: "fullstack",
        tools: [
            
            "AWS S3",
            "AWS DynamoDB",
            "Python eel",
            "AWS EC2",
            "AWS Lambda",
            "AWS SQS"

        ],
        videoSrc: "https://fitwise-video.s3.amazonaws.com/fitwise.mov",
        thumbnail: "/images/fitwise.png",
    
    },
    {
        id: 2,
        clientName: "Fitwise Dashboard",
        link: "http://fitwise-app.s3-website-us-east-1.amazonaws.com/",
        tags: "AWS S3, HTML, CSS",
        more: "This is a demo of a dashboard for a fitness app.",
        features: [
            "AWS S3",
            "Vanilla JS",
            "HTML",
            "CSS",
        ],
        mainTag: "frontend",
        tools: [
            "HTML",
            "CSS"

        ],
        videoSrc: "https://fitwise-video.s3.amazonaws.com/fitwise.mov",
        thumbnail: "/images/fitwise.png",
    
    },
    {
        id: 3,
        clientName: "Smooth App Views",
        link: "http://babel-scroll-genos-digital.s3-website-us-east-1.amazonaws.com/",
        tags: "AWS S3, Babel, Vanilla JS, HTML, CSS",
        more: "This is a demo of a screen that could be your website or your mobile app",
        features: [
            "AWS S3",
            "Babel",
            "Vanilla JS",
            "HTML",
            "CSS",
            "SVG",
            "GSAP"
        ],
        mainTag: "cloud",
        tools: [
            "Babel",
            "GSAP"

        ],
        videoSrc: "https://babelscroll-video.s3.amazonaws.com/babelScroll.mov",
        thumbnail: "/images/babelScroll.png",
    
    },
    {
        id: 4,
        clientName: "Vanity Product Cards for your shop",
        link: "http://vanity-product-cards.s3-website-us-east-1.amazonaws.com/",
        tags: "AWS S3, HTML, CSS",
        more: "This is a demo of product cards (with a vanity twist) for an eCommerce website :)",
        features: [
            "AWS S3",
            "Vanilla JS",
            "HTML",
            "CSS",
        ],
        mainTag: "frontend",
        tools: [
            "HTML",
            "CSS"

        ],
        videoSrc: "https://shoes-video.s3.amazonaws.com/shoes.mov",
        thumbnail: "/images/shoes.png",
    
    },
    {
        id: 5,
        clientName: "Midjourney-style Carousel",
        link: "http://midjourney-style-carousel.s3-website-us-east-1.amazonaws.com/",
        tags: "AWS S3, HTML, CSS",
        more: "This is a demo of vanity carousel (a varousel if you will haha.) for your website :)",
        features: [
            "AWS S3",
            "Vanilla JS",
            "HTML",
            "CSS",
        ],
        mainTag: "frontend",
        tools: [
            "HTML",
            "CSS"

        ],
        videoSrc: "https://midjourney-video.s3.amazonaws.com/mid.mov",
        thumbnail: "/images/mid.png",
    
    },
    {
        id: 6,
        clientName: "AI Voice Assistant",
        link: "https://github.com/Gilbert-Adu/ai-voice-assistant",
        tags: "AI, Microservices, Containerization, Serverless, Python3",
        more: "This project exposes a voice assistant that performs and responds to queries. It can detect emotional intent built using AWS Polly & AWS Lambda for event support.",
        features: [
            "AI Voice Assistant",
            "Natural Language Processing",
            "Emotional Context Provider",
            "Text-To-Speech",
        ],
        mainTag: "cloud",
        tools: [
            "AWS Lambda",
            "AWS Polly",
            "Microservices",
            "AWS CloudFormation",
            "Python3",
            "React JS",
            "Docker",
            "AWS ECR",
            "AWS ECS",
            "Bash",
            "Pyttsx3"
            

        ],
        videoSrc: "https://voico-video.s3.amazonaws.com/voico.mov",
        thumbnail: "/images/logo.png",
    
    },
    {
        id: 7,
        clientName: "Stripe eCommerce",
        link: "https://ecomm-w-stripe.onrender.com/",
        tags: "Stripe API, eCommerce, Content Management",
        more: "This is a basic demo project showing the skeleton of an eCommerce website with Stripe payment API integration. Frontend is built with React JS and backend is built with Node JS.",
        features: [
            "Stripe API",
            "Search",
            "Content Management System",
            "eCommerce"
        ],
        tools: [
            "Node JS",
            "Vanilla JS",
            "GSAP",
            "EJS",
            "ReactJS",
            "Express",
            "Render", 
            "CSS",
            "dotenv",
            "Git"


        ],
        videoSrc: "https://stripe-video.s3.amazonaws.com/stripevid.mov",
        thumbnail: "/images/stripe-comm-2.png",
    
    },
    {
        id: 8,
        clientName: "Amhara Unity",
        link: "https://www.amharaunity.com/",
        tags: "Social media, Realtime chat, Blog CMS, Authentication",
        more: "This is a social media/CMS hybrid website for a community. Client documentation presented indicated the need for instant communications and blog submissions and maintenance. ",
        features: [
            "Real-time chat",
            "Blog CMS",
            "Multi visitor roles (Admin & Client)",
            "WYSIWYG Editor"
        ],
        tools: [
            "Node JS",
            "Vanilla JS",
            "Pusher",
            "EJS",
            "MongoDB",
            "Mongoose",
            "JSONWebToken",
            "Express",
            "Render"

        ],
        videoSrc: "https://amhara-video.s3.amazonaws.com/part1.mov",
        thumbnail: "/images/amhara.png",
    
    },
    
]

module.exports = projects;
