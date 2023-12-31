import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Portfolio",
        description:
          "This project is my first prominent project in the field of web-development.",
        body: "###### This Portfolio Website is a personal website created using React, HTML, CSS, JavaScript, Bootstrap, and various React libraries. The main objective of this project is to showcase myself in an organnised manner .\n\n#### Key Features:\n##### * Responsive Design:\n The website is designed to be fully responsive, ensuring optimal viewing experience across different devices and screen sizes.\n##### * React Framework:\n The project is built using React, a popular JavaScript library for building user interfaces. React provides a component-based approach, making it easier to manage and reuse code.\n##### * JSX/HTML and CSS:\n The website structure is built using JSX, while CSS is used to style and customize the appearance of the website. This allows for a personalized and professional design.\n##### * Bootstrap Integration:\n Bootstrap, a widely-used CSS framework, is utilized to enhance the website's responsiveness and provide a consistent and modern design.\n##### * React Libraries:\n Various React libraries are incorporated to enhance the functionality and interactivity of the website. These libraries include React Router for navigation, React Icons for adding icons, or React Animation libraries for creating engaging animations.\n##### * Interactive Elements:\n JavaScript is used to add interactive elements to the website, such as animated transitions, smooth scrolling, form validations, and interactive sliders. These elements help engage visitors and provide a dynamic user experience.",
        imageurl: "https://i.imgur.com/7zuvbzo.png",
      },

      // {
      //   id: 2,
      //   title: "project 2",
      //   description: "This project is about",
      //   body: "body",
      //   imageurl:
      //     "https://media.istockphoto.com/id/1227556289/photo/software-development-workplace-in-bright-office-with-wooden-table-programming-coding-code-on.jpg?s=612x612&w=0&k=20&c=LK-4Gl_wsdVppG1SdoWt7be10wuK7N6WMMTF-t_T3mM=",
      // },

      // {
      //   id: 3,
      //   title: "project 3",
      //   description: "This project is about",
      //   body: "body",
      //   imageurl:
      //     "https://media.istockphoto.com/id/1132331606/photo/businessman-reviewing-project-timeline.jpg?s=612x612&w=0&k=20&c=aTILFAsDU7fLr-YH9AR8IyXUdVwMUE0m8A9oKPJxZgI=",
      // },
      // {
      //   id: 4,
      //   title: "project 4",
      //   description: "This project is about",
      //   body: "body",
      //   imageurl:
      //     "https://media.istockphoto.com/id/1132331606/photo/businessman-reviewing-project-timeline.jpg?s=612x612&w=0&k=20&c=aTILFAsDU7fLr-YH9AR8IyXUdVwMUE0m8A9oKPJxZgI=",
      // },
    ],

    blogs: [
      {
        id: 1,
        title:
          "The Easiest Technologies for Beginners: A Smooth Start to Your Tech Journey",
        description:
          "Embrace these beginner-friendly technologies and don't hesitate to get hands-on experience",
        body: "Are you a beginner eager to dive into the vast realm of technology? Fear not! Today, we'll explore some of the easiest technologies for newcomers, offering you a smooth and encouraging start to your tech journey.\n\n1. HTML: Say hello to Hypertext Markup Language! With its straightforward syntax and tags, HTML is the foundation of every web page. Learning the basics allows you to structure content and bring your ideas to life on the internet.\n\n2. CSS: Cascading Style Sheets is the perfect companion to HTML. It enables you to add style, color, and layout to your web pages. With a few lines of code, you can transform a plain design into an eye-catching masterpiece.\n\n3. Python: Known for its readability and simplicity, Python is an excellent choice for beginner programmers. Its clear syntax and extensive libraries make it easy to grasp fundamental programming concepts and build functional applications.\n\n4. WordPress: If you're interested in creating websites without diving deep into coding, WordPress is a user-friendly platform. With its intuitive interface and abundant themes and plugins, you can quickly build and manage websites with minimal technical knowledge.",
        imageurl:
          "https://media.istockphoto.com/id/621700672/photo/fast-internet-concept-autonomous-self-driving-car-technology.jpg?s=612x612&w=0&k=20&c=CQLJR6Yao4PYqWXvByTQu89i8hZs4RSBcu3YivIRoz8=",
      },

      {
        id: 2,
        title:
          "Embracing the Metaverse: Exploring the Next Frontier of Digital Experience",
        description:
          "As the metaverse continues to evolve, it presents us with an exciting new frontier in the digital realm.",
        body: "In the realm of emerging technologies, the concept of the metaverse has gained significant attention and holds the potential to reshape the way we interact, work, and socialize. In this blog, we'll delve into the metaverse, its latest advancements, and the implications it holds for our digital future.\n\n###### Understanding the Metaverse:\nThe metaverse refers to a virtual universe, a collective space that combines augmented reality (AR), virtual reality (VR), and the internet. It enables users to interact with digital environments and other users in real-time, transcending physical boundaries.\n\n###### Exploring Latest Advancements:\n* NFTs and Virtual Assets: The metaverse is witnessing a surge in the creation and trading of non-fungible tokens (NFTs), enabling ownership of virtual assets like digital art, virtual real estate, and in-game items.\n* Social Metaverse: Platforms like Decentraland, Roblox, and Fortnite are paving the way for social interactions within the metaverse, offering users immersive experiences, virtual events, and shared spaces.\n* Virtual Commerce: E-commerce is being reimagined within the metaverse, allowing users to shop for virtual and physical goods, bridging the gap between virtual and real-world economies.\n\n###### Implications and Future Outlook:\nThe metaverse has the potential to transform various industries, including entertainment, gaming, education, and remote work. It opens up avenues for immersive learning experiences, collaborative virtual workspaces, and entirely new forms of entertainment and socialization.",
        imageurl:
          "https://img.freepik.com/free-vector/gradient-metaverse-background_23-2149257046.jpg",
      },

      {
        id: 3,
        title: "The Future Unveiled: AI's Impact on Web Development",
        description:
          "Web developers can unlock new possibilities with the advancement in AI",
        body: "Artificial Intelligence (AI) is rapidly reshaping various industries, and web development is no exception. In this blog, we'll explore the upcoming use of AI in web development and how it promises to revolutionize the way we build and enhance websites.\n\n##### AI's Role in Web Development:\n* Smart Design: AI-powered tools can analyze user behavior and preferences to create personalized and intuitive website designs. These tools generate layouts, color schemes, and content placement suggestions, streamlining the design process.\n* Enhanced User Experience: AI algorithms can analyze user interactions, gather feedback, and make real-time improvements to optimize website performance, responsiveness, and navigation. This leads to enhanced user experiences and increased engagement.\n* Content Generation: AI-powered natural language processing (NLP) algorithms can generate content, such as blog posts or product descriptions, based on specific guidelines and keywords. This automation saves time and provides valuable assistance to web developers.\n* Chatbots and Virtual Assistants: AI-powered chatbots and virtual assistants offer instant support to website visitors, answering queries, providing recommendations, and offering a personalized experience.\n\nLatest Trends:\n* Automated Testing: AI algorithms can automate testing processes, identifying bugs, and suggesting improvements, thereby enhancing website quality and reducing development time.\n* Voice-Enabled Interfaces: With the rise of voice assistants, integrating AI to create voice-enabled interfaces in websites allows users to interact with websites through natural language commands.\n* Predictive Analytics: AI algorithms can analyze user data and patterns to make predictions and recommendations, enabling web developers to optimize content, user flows, and marketing strategies.",
        imageurl:
          "https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-4297.jpg?w=740&t=st=1689085456~exp=1689086056~hmac=e4f5f030494ba186206895efe8cbe692ee77009b15fce691ad31c7fe03fdb437",
      },
      {
        id: 4,
        title:
          "Mastering Programming Languages and Data Structures: Effective Learning Strategies",
        description:
          "Following these strategies, and embark on an exciting journey of becoming a proficient programmer and problem solver.",
        body: "Learning a programming language and understanding data structures and algorithms are essential skills for aspiring developers and data scientists. To effectively grasp these concepts in today's fast-paced technological landscape, it is crucial to employ the latest learning strategies. In this blog, we'll explore some practical tips to help you master programming languages and develop a strong foundation in data structures and algorithms.\n* Hands-on Practice: Actively engage in coding exercises and projects. Utilize online coding platforms and resources that provide real-world examples and challenges to enhance your practical skills.\n* Interactive Learning: Leverage interactive online tutorials, coding bootcamps, and MOOCs to learn programming languages and gain hands-on experience. These platforms often offer up-to-date content and provide interactive coding environments.\n* Collaborative Learning: Join coding communities, participate in forums, and collaborate with fellow learners. Engaging in discussions and code reviews can deepen your understanding and expose you to different perspectives.\n* Stay Updated: Follow reputable programming blogs, podcasts, and YouTube channels to stay informed about the latest language updates, frameworks, and best practices.\n* Focus on Data Structures and Algorithms: Dedicate time to study and practice fundamental data structures and algorithms. Solve coding challenges on platforms like LeetCode or HackerRank to strengthen your problem-solving skills.",
        imageurl:
          "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg&ga=GA1.1.1219736714.1689084703&semt=ais",
      },
    ],
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
