const projects = [
    {
        id: 1,
        clientName: "AI Voice Assistant",
        link: "https://github.com/Gilbert-Adu/ai-voice-assistant",
        tags: "AI, Voice Assistant, Cloud Computing, Microservices, Containerization, Serverless, Python3",
        more: "This project exposes a voice assistant that performs and responds to Google Search queries. It can detect emotional intent and responds to a wake command.",
        features: [
            "AI Voice Assistant",
            "Wake Command",
            "Natural Language Processing",
            "Emotional Context Provider",
            "Text-To-Speech",
            "Google Search"
        ],
        tools: [
            "AWS Lambda",
            "Microservices",
            "AWS CloudFront",
            "Python3",
            "React JS",
            "Docker",
            "AWS EC2",

        ],
        videoSrc: "/images/voiceo.mov",
        thumbnail: "/images/logo.png",
    
    },
    {
        id: 2,
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
        videoSrc: "/images/stripevid.mov",
        thumbnail: "/images/stripe-comm-2.png",
    
    },
    {
        id: 3,
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
        videoSrc: "/images/part1.mov",
        thumbnail: "/images/amhara.png",
    
    },
    
]

module.exports = projects;