const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Team Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "Next.js",
      imgPath: "/images/logos/nextjs.png",
    },
    {
      name: "Java",
      imgPath: "/images/logos/javaa.svg",
    },
    {
      name: "C#",
      imgPath: "/images/logos/csharplogo.png",
    },
    {
      name: "SQL",
      imgPath: "/images/logos/sqllogo.png",
    },
    {
      name: "Embedded Systems/IoT",
      imgPath: "/images/logos/embe.png",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Node.js",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Git",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Kurt’s contributions to Springboot web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/sblogo2.png",
      logoPath: "/images/sblogo.png",
      title: "CIT-U Software Development 3 (Full Stack Developer)",
      date: "August - December 2024",
      responsibilities: [
        "Full Stack Developer (Spring Boot) with a focus on Front-end development, E-Commerce website.",
        "Built comprehensive web applications integrating Spring Boot for backend and utilized Thymeleaf.",
        "Optimized code for performance and maintainability.",
      ],
    },
    {
      review: "Kurt brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/alliance.svg",
      logoPath: "/images/csharplogo.png",
      title: "Alliance Software Inc. (Frontend Web Developer - Intern)",
      date: "June - August 2024",
      responsibilities: [
        "Developed a Ticketing System and maintained Front-end components using C# ASP.NET MVC",
        "Collaborated with the team to design and implement user-friendly interfaces.",
        "Participated in code reviews and contributed to improving UI/UX standards.",
      ],
    },
    {
      review: "Kurt’s work on Frontend brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/mernlogo.png",
      logoPath: "/images/citulogo.png",
      title: "CIT-U Software Development 2 (Frontend Developer)",
      date: "January - April 2024",
      responsibilities: [
        "Front-End Developer (MERN Stack), Ticketing System website.",
        "Developed dynamic web applications using React and Node.js.",
        "Enhanced user experience through effective UI/UX design practices.",
      ],
    },
    {
      review: "Kurt's work on Flutterflow brought a high level of quality and efficiency. He delivered solutions that enhanced our product goals.",
      imgPath: "/images/flogo.svg",
      logoPath: "/images/citulogo.png",
      title: "CIT-U Software Development 1 (UI/UX Designer)",
      date: "August - December 2023",
      responsibilities: [
        "UI/UX Designer, Frontend Developer, QA Tester.",
        "Designed and implemented user interfaces and conducted thorough testing for quality assurance",
        "Flutter Flow based Note System.",
        "Enhanced user experience through effective UI/UX design practices.",
        "Project Link and Documentation: https://app.flutterflow.io/project/tek-notes-5qzjtu?",
      ],
    },

    {
      review: "Kurt demonstrated strong technical skills in networking by implementing VLAN segmentation, DHCP configuration, and ACL policies, significantly improving system security and organization.",
      imgPath: "/images/cisco-color.svg",
      logoPath: "/images/cisco.png",
      title: "CPE364 (Computer Networks and Security)",
      date: "January - April 2024",
      responsibilities: [
        "Designed and implemented a Smart Home network using VLANs to segment IoT devices for improved security and traffic control.",
        "Configured DHCP to enable dynamic IP addressing across segmented networks.",
        "Applied Access Control Lists (ACLs) to restrict access between VLANs and enforce network security policies.",
        "Project Link and Documentation: https://drive.google.com/drive/folders/1ztVLFdnlUBvvPTyKqcbJQQtXIWfb9Wtz?usp=sharing",
      ],
    },

    {
      review: "Kurt applied embedded systems and IoT principles to develop innovative hardware prototypes and monitoring solutions, demonstrating strong technical and problem-solving skills.",
      imgPath: "/images/emb.png",
      logoPath: "/images/logos/embedded.png",
      title: "Embedded Systems and IoT",
      date: "3rd Year & 4th Year",
      responsibilities: [
        "Developed an Arduino-powered firefighting robot prototype equipped with an ESP32 camera for real-time fire detection and remote monitoring.",
        "Built an anti-theft motion sensor detector using passive components, effectively triggering alerts without a microcontroller.",
        "Designed and prototyped a thesis boat project: a water-monitoring boat with IoT sensors (pH, turbidity, temperature, TDS) and a web-based system for real-time data visualization.",
        "Project Link and Documentation: https://drive.google.com/drive/folders/1a4MiCDEzAv33fEo7c1udOq2WK6oJ_YKg?usp=drive_link",
      ],
    },

    {
      review: "Kurt demonstrated low-level programming proficiency by developing a functional ping pong game using assembly language, showcasing attention to detail and optimization skills.",
      imgPath: "/images/assembly2.png",
      logoPath: "/images/assembly.png",
      title: "Assembly Language Programming",
      date: "4th Year",
      responsibilities: [
        "Created a 2D ping pong game using Assembly Language with TASM, demonstrating mastery of low-level hardware interfacing and graphics programming.",
        "Handled real-time input, ball movement, collision detection, and scoring logic within assembly constraints.",
        "Optimized performance through efficient memory and register usage in a resource-constrained environment.",
        "Project Link and Documentation: https://drive.google.com/drive/folders/1OSKLMn4lntljq0uXIg1_QnXQy_oR4Jx4?usp=drive_link",
      ],
    }
    
    
  ];

  
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Kurt. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Kurt was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Kurt was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Kurt was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Kurt’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Kurt was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [

    {
      name: "fb",
      imgPath: "/images/facebook.png",
      url: "https://www.facebook.com/kurt.saranillomacasling.1",
    },
    {
      name: "HackerRank",
      imgPath: "/images/hr.png",
      url: "https://www.hackerrank.com/profile/kurtmacasling11",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin1.png",
      url: "https://www.linkedin.com/in/kurtmacasling11/",
    },
    {
      name: "dribble",
      imgPath: "/images/dribbble.png",
      url: "https://dribbble.com/Kurtqt",
    },
    {
      name: "github",
      imgPath: "/images/g.png",
      url: "https://github.com/Kurtqttt",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };