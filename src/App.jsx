import React, { useState, useEffect } from "react";
import "./App.css";
import {
  GlobalStyle,
  About,
  Footer,
  Hero,
  Navbar,
  Projects,
  Technologies,
} from "./components";
import { ThemeProvider } from "./components/Context/ThemContext";

const App = () => {
  const projects = [
    {
      id: 0,
      title: "Weather App",
      description:
        "I made a weather app using HTML, CSS, Tailwind, and JavaScript.Users can check the weather from anywhere. I also added a feature that uses an API to give real-time weather updates.",
      link: "https://israil64.github.io/Weather-App/",
      img_url:
        "https://th.bing.com/th/id/OIP.gXXdmJyJ73sL5_NVwhkfzwHaFj?rs=1&pid=ImgDetMain",
      category: "JS",
      code: "https://github.com/israil64/Weather-App",
      language: ["HTML", "Tailwind", "Javascript"],
    },
    {
      id: 1,
      title: "Github User Search",
      description:
        "I built GitHubUserSearch, a web app using HTML, CSS, Tailwind, and JavaScript. It lets users find GitHub accounts by username using the GitHub API. The app shows 'not found' for incorrect usernames and indicates internet connectivity status.",
      link: "https://israil64.github.io/GitHubUserSearch/",
      img_url: "src/assets/img/github.png",
      category: "JS",
      code: "https://github.com/israil64/GitHubUserSearch",
      language: ["HTML", "Javascript", "Tailwind"],
    },
    {
      id: 2,
      title: "Password Generater ",
      description:
        "I developed a Password Generator app using React.js, Vite, and Tailwind CSS. Users generate custom passwords with numbers, symbols, and letters, adjusting the length with a slider. It includes a 'copy to clipboard' feature for easy use. I had used  like useState and useEffect hooks, and also received assistance from AI tools like GPT and Copilot for efficiency",
      link: "#3link",
      img_url:
        "https://codingartistweb.com/wp-content/uploads/2021/03/random-password-generator-01.png",
      category: "React",
      code: "https://github.com/israil64/Generate_Password",
      language: ["HTML", "Tailwind", "React"],
    },

    {
      id: 3,
      title: "Currency Converter",
      description:
        "I developed a currency converter application using React.js, Vite, and Tailwind CSS. The app utilizes a currency API to provide real-time exchange rates and features reusable components. During the development, I faced challenges with API handling, which I successfully addressed using AI.",
      link: "#3link",
      img_url:
        "https://blog.stackfindover.com/wp-content/uploads/2021/09/js-currency-converter.jpg",
      category: "React",
      code: "https://github.com/israil64/currency-converter",
      language: ["HTML", "Tailwind", "React"],
    },
    {
      id: 4,
      title: "Website in React Js",
      description:
        "I developed a website using React.js, Vite, and Tailwind CSS. This project included advanced routing with react-router-dom, enabling seamless navigation and dynamic URL handling. I implemented dark mode and light mode features using the Context API. The project showcases my skills in modern web development, component reusability, and state management.",
      link: "https://master--chaireactdom.netlify.app/",
      img_url:
        "https://velog.velcdn.com/images/jimmy0417/post/6cc2570d-dd7e-49f8-aec2-ae004736341c/blog_til_title_react_router.jpg",
      category: "React",
      code: "https://github.com/israil64/React-router-dom",
      language: ["HTML", "Tailwind", "React"],
    },
    {
      id: 5,
      title: "Jonh Website",
      description:
        "This is my website created using HTML, CSS and Tailwind. I made it while learning web development. I've used animations, hover effects, skew transitions, and text typing effects on it.",
      link: "https://israil64.github.io/John-Doe-Potfolio/",
      img_url: "src/assets/img/website.png",
      category: "JS",
      code: "https://github.com/israil64/John-Doe-Potfolio",
      language: ["HTML", "CSS", "Tailwind"],
    },
  ];
  const [loading, setLoading] = useState(true);
  const [themeMode, setThemeMode] = useState("light");

  function darkMode() {
    setThemeMode("dark");
  }
  function lightMode() {
    setThemeMode("light");
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider value={{ darkMode, lightMode, themeMode }}>
      <GlobalStyle />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Projects projects={projects} />
          <Technologies />
          <About />

          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
