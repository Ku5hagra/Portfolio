import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Portfolio",
        description: "My first prominent project in web development.",
        body: `###### This Portfolio Website is a personal website created using React, HTML, CSS, JavaScript, Bootstrap, and various React libraries. The main objective of this project is to showcase myself in an organized manner.

#### Key Features:
##### * Responsive Design:
 The website is designed to be fully responsive, ensuring optimal viewing experience across different devices and screen sizes.
##### * React Framework:
 The project is built using React, a popular JavaScript library for building user interfaces. React provides a component-based approach, making it easier to manage and reuse code.
##### * JSX/HTML and CSS:
 The website structure is built using JSX, while CSS is used to style and customize the appearance of the website. This allows for a personalized and professional design.
##### * Bootstrap Integration:
 Bootstrap is utilized to enhance the website's responsiveness and provide a consistent modern design.
##### * React Libraries:
 Various React libraries are incorporated to enhance functionality and interactivity. These include React Router for navigation, React Icons for icons, and animation libraries for engaging effects.
##### * Interactive Elements:
 JavaScript is used to add interactive elements like animated transitions, smooth scrolling, and form validations. These help engage visitors and provide a dynamic user experience.`,
        imageurl: "https://i.imgur.com/7zuvbzo.png",
          github: "https://github.com/Ku5hagra/portfolio", // Replace with actual repo
    live: "https://kushagra-agrawal.netlify.app/",           // Replace with actual deployment
      },
      {
        id: 2,
        title: "ProgressPal - AI Roadmap Generator",
        description: "Frontend development of an AI-assisted personalized roadmap platform.",
        body: `###### ProgressPal is an AI-supported roadmap generator designed to simplify learning journey creation and tracking. Built using ReactJS, Tailwind CSS, and JavaScript, the application emphasizes user interactivity and clean design.

#### Key Features:
##### * Roadmap UI:
 Designed and implemented an intuitive, modular interface to help users visualize their learning paths effectively.
##### * AI Support:
 Integrated an AI mechanism (in backend) that helps generate learning roadmaps based on user input and goals.
##### * Tailwind CSS:
 Utilized utility-first Tailwind classes for responsive layout and rapid styling, allowing for a clean and modern look.
##### * Report Generation:
 A custom report generation module was developed to automate learning summary creation and minimize manual efforts.
##### * Reusable Components:
 Built highly reusable and efficient components for better maintainability and scalability.
##### * Smooth UX:
 Implemented transitions and progress indicators for better user experience during roadmap tracking.`,
        imageurl: "https://i.ibb.co/SXw2GYCg/unnamed.png",
         github: "https://github.com/Ku5hagra/progresspal", // Replace with actual repo
    live: null,
      },
      {
        id: 3,
        title: "VIRTOMO - Virtual Conferencing App",
        description: "A virtual conferencing platform built with Unity and Blender for immersive remote collaboration.",
        body: `###### VIRTOMO is a Unity-based 3D virtual conferencing application that simulates realistic, immersive meeting environments. Designed for users to interact in virtual spaces, it blends creative modeling with interactive user interfaces.

#### Key Features:
##### * 3D Environment:
 Developed immersive, stylized conference spaces using Blender for modeling and Unity for integration.
##### * Lobby UI:
 Built a fully functional virtual lobby as the central navigation space with Unity UI components.
##### * Audio Communication:
 Implemented real-time audio communication using Unity's networking tools to simulate in-person interaction.
##### * Avatar System:
 Configured avatar-based presence to enhance personal representation within the space.
##### * Multi-Platform Support:
 Designed with potential expansion towards VR headsets and other platforms.`,
        imageurl: "https://i.ibb.co/gL6LHpSM/Screenshot-2025-05-22-075800.png",
         github: "https://github.com/Ku5hagra/Confrence",
    live: null,
      },
      {
        id: 4,
        title: "VIRTUAL MINDSCAPE - Cognitive VR App",
        description: "A Unity VR application designed for brain stimulation through creative and logical puzzles.",
        body: `###### Virtual Mindscape is a cognitive VR application created in Unity, aimed at stimulating both hemispheres of the brain. The app uses gamified puzzles to enhance mental agility and creativity.

#### Key Features:
##### * Cognitive Puzzles:
 Integrated brain-training puzzles that stimulate both logic and creativity through immersive VR interaction.
##### * Dual-Hemisphere Engagement:
 Activities are structured to engage both left-brain (logical) and right-brain (creative) thinking.
##### * Immersive Experience:
 Designed VR scenes that captivate the user with atmospheric visuals and spatial sound.
##### * Unity VR Development:
 Built using Unity’s XR framework, ensuring smooth interaction with VR controllers and devices.
##### * Educational Value:
 Focused on mental development, problem-solving, and immersive learning through active participation.
##### * Adaptive Challenges:
 Puzzles scale in difficulty to match user progress and performance.`,
        imageurl: "https://www.telefonica.com/en/wp-content/uploads/sites/5/2023/10/Realidad-virtual-Virtual-Reality.jpg",
        github: null,
    live: null,
      }
    ],
    blogs: [
      {
        id: 1,
        title: "The Easiest Technologies for Beginners: A Smooth Start to Your Tech Journey",
        description: "Embrace these beginner-friendly technologies and get hands-on experience.",
        body: `Are you a beginner eager to dive into the vast realm of technology? Fear not! Today, we'll explore some of the easiest technologies for newcomers, offering you a smooth and encouraging start to your tech journey.

1. **HTML:** Say hello to Hypertext Markup Language! With its straightforward syntax and tags, HTML is the foundation of every web page. Learning the basics allows you to structure content and bring your ideas to life on the internet.

2. **CSS:** Cascading Style Sheets is the perfect companion to HTML. It enables you to add style, color, and layout to your web pages. With a few lines of code, you can transform a plain design into an eye-catching masterpiece.

3. **Python:** Known for its readability and simplicity, Python is an excellent choice for beginner programmers. Its clear syntax and extensive libraries make it easy to grasp fundamental programming concepts and build functional applications.

4. **WordPress:** If you're interested in creating websites without diving deep into coding, WordPress is a user-friendly platform. With its intuitive interface and abundant themes and plugins, you can quickly build and manage websites with minimal technical knowledge.`,
        imageurl: "https://blog.100mentors.com/wp-content/uploads/2017/01/easytouse.jpg",
      },
      {
        id: 2,
        title: "AI in Web Development: Transforming How We Build Websites",
        description: "Explore the upcoming use of AI in web development and how it promises to revolutionize the way we build and enhance websites.",
        body: `#### AI's Role in Web Development:

- **Smart Design:** AI tools can analyze user behavior to create personalized website designs. They generate layouts, color schemes, and content placement suggestions, streamlining the design process.

- **Enhanced UX:** AI algorithms analyze user interactions and real-time feedback to optimize performance and navigation, leading to enhanced user experiences and increased engagement.

- **Content Generation:** AI-powered NLP algorithms can generate content like blog posts or product descriptions based on guidelines and keywords. This automation saves time and provides valuable assistance to web developers.

- **Chatbots & Assistants:** AI chatbots offer instant support to visitors, answering queries and providing a personalized experience.

#### Latest Trends:

- **Automated Testing:** AI can automate testing processes, identifying bugs and suggesting improvements, thereby enhancing website quality and reducing development time.

- **Voice-Enabled Interfaces:** With the rise of voice assistants, AI allows developers to create voice-enabled interactions for more accessible browsing experiences.`,
        imageurl: "https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-4297.jpg?w=740&t=st=1689085456~exp=1689086056~hmac=e4f5f030494ba186206895efe8cbe692ee77009b15fce691ad31c7fe03fdb437",
      },
      {
        id: 3,
        title: "Mastering Programming Languages and Data Structures",
        description: "Practical tips to help you master programming languages and develop a strong foundation in data structures and algorithms.",
        body: `Learning a programming language and understanding data structures and algorithms are essential for aspiring developers. Here are some practical strategies:

- **Hands-on Practice:** Actively engage in coding exercises and projects. Utilize online coding platforms that provide real-world examples and challenges to enhance your practical skills.

- **Interactive Learning:** Leverage online tutorials, bootcamps, and MOOCs. These platforms often offer interactive coding environments and up-to-date content.

- **Collaborative Learning:** Join coding communities, participate in forums, and collaborate with other learners. Discussions and code reviews can deepen your understanding.

- **Stay Updated:** Follow reputable programming blogs, podcasts, and YouTube channels to stay informed about the latest updates, frameworks, and best practices.

- **Focus on Fundamentals:** Dedicate time to study fundamental data structures and algorithms. Solve challenges on platforms like LeetCode or HackerRank to strengthen your problem-solving skills.`,
        imageurl: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
      },
      {
        id: 4,
        title: "Getting the Most Out of React: Advanced Tips and Tricks",
        description: "Learn advanced React techniques to optimize performance and enhance your development workflow.",
        body: `#### Efficient State Management

- **useMemo and useCallback:** Prevent unnecessary re-renders by memoizing expensive computations and callbacks.
- **Context API:** For global state (like theme or auth), consider React Context to avoid prop drilling.
- **Custom Hooks:** Create custom hooks to reuse logic across components, keeping code DRY.

#### Optimizing Rendering

- **React.memo:** Wrap functional components with React.memo to prevent re-rendering when props haven't changed.
- **Key Prop Best Practices:** Use stable keys in lists to help React identify items across renders.
- **Batching Updates:** React automatically batches state updates, but ensure you update state appropriately to avoid extra renders.

#### Developer Workflow

- **React DevTools:** Use browser extensions to inspect component hierarchy and check hook states.
- **Testing:** Use testing libraries (Jest, React Testing Library) to write unit and integration tests for components.
- **Code Splitting:** Use React.lazy and Suspense to split code and improve load times.

By incorporating these tips, you can write cleaner, more efficient React code and create performant applications.`,
        imageurl: "https://img.freepik.com/free-vector/gradient-metaverse-background_23-2149257046.jpg",
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
