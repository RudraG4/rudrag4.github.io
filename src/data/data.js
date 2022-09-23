function calculateDuration(date1, date2) {
  let totalmonths = Math.ceil(
    (new Date(date2.getFullYear(), date2.getMonth() + 1) - date1) /
      ((1000 * 60 * 60 * 24 * 365) / 12)
  );
  let years = parseInt(totalmonths / 12, 10);
  let months = totalmonths % 12;
  return [years, months].join(".");
}

const data = {
  basic_info: {
    name: "Rudra Gowda",
    short_name: "Rudra",
    current_designation: "Software Engineer",
    current_comapny: "Huawei Technologies India",
    experience: calculateDuration(new Date(2018, 8), new Date()),
    goal: "I'm a software engineer based in Bengaluru. I'm focused on expanding my experience in designing and developing high-performing websites.",
    links: {
      email: "mailto:rudragowda53@gmail.com",
      github: "https://github.com/RudraG4",
      linkedin: "https://www.linkedin.com/in/imrudrag",
      instagram: "https://www.instagram.com/im_rudrag/",
      codepen: "https://codepen.io/rudrag4",
      codesandbox: "https://codesandbox.io/u/RudraG4",
    },
  },
  skills_info: {
    skills: [
      {
        label: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        label: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
      {
        label: "Sass",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      },
      {
        label: "Javascript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        label: "React",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        label: "NodeJS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        label: "Express",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        label: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/java/java-original.svg",
      },
      {
        label: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
      },
      {
        label: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
      },
      {
        label: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      },
    ],
  },
  experience_info: [
    {
      designation: "Software Engineer",
      description:
        "Analyze and design systems with high quality based on requirements provided by customer. Integrate Huawei's FMS with third party systems. Develop and perform code review.",
      company: "Huawei Technologies India",
      from: "Jan 2020",
      to: "Present",
    },
    {
      designation: "Graduate Engineer Trainee",
      description:
        "Design and develop responsive web applications on IHUB, GDE Platform using various technologies. Build and deploy web apps.",
      company: "Huawei Technologies India",
      from: "Aug 2018",
      to: "Jan 2020",
    },
  ],
  projects_info: {
    featured: [
      {
        title: "Travel Booking Clone",
        description: "",
        picture:
          "https://github.com/RudraG4/Travel-Booking-Clone/blob/main/ig8u2c-3000.preview.csb.app_.png?raw=true",
        project_link: "https://github.com/RudraG4/Travel-Booking-Clone",
        live_link: "/Travel-Booking-Clone",
        languages: "React, Bootstrap",
      },
      {
        title: "Tic-Tac-Toe",
        description: "",
        picture:
          "https://github.com/RudraG4/Tic-Tac-Toe/raw/main/tictactoe.jpg",
        project_link: "https://github.com/RudraG4/Tic-Tac-Toe",
        live_link: "/Tic-Tac-Toe",
        languages: "React, Bootstrap",
      },
      {
        title: "Quizzy",
        description: "",
        picture: "https://github.com/RudraG4/quizzy/raw/main/quizzy.jpg",
        project_link: "https://github.com/RudraG4/quizzy",
        live_link: "/quizzy",
        languages: "React, Bootstrap",
      },
      {
        title: "Starwar Search",
        description: "",
        picture:
          "https://github.com/RudraG4/Starwar-Search/blob/main/starwars.jpg?raw=true",
        project_link: "https://github.com/RudraG4/Starwar-Search",
        live_link: "/Starwar-Search",
        languages: "React, Bootstrap",
      },
    ],
    best: [
      {
        title: "Meme Generator",
        description: "A React webapp to generate Random Memes",
        picture:
          "https://github.com/RudraG4/meme-generator/blob/master/memegenerator.jpg?raw=true",
        project_link: "https://github.com/RudraG4/meme-generator",
        live_link: "https://eh8ovm.csb.app/",
        languages: "React",
      },
      {
        title: "Digital Business Card",
        description:
          "A Digital Business Card - Static page application created using ReactJS",
        picture:
          "https://github.com/RudraG4/digital-business-card/raw/master/digital-business-card-coverimage.png",
        project_link: "https://github.com/RudraG4/digital-business-card",
        live_link: "/digital-business-card",
        languages: "React",
      },
      {
        title: "AirBnb Experience Clone",
        description:
          "An Airbnb Experirences Clone created using React to learn and demonstrate use of custom components, props to reuse the components, conditional rendering, use images etc",
        picture:
          "https://github.com/RudraG4/airbnb-exp-clone/blob/master/airbnb_exp_clone_coverimg.png?raw=true",
        project_link: "https://github.com/RudraG4/airbnb-exp-clone",
        live_link: "/airbnb-exp-clone",
        languages: "React",
      },
    ],
  },
};

export default data;
