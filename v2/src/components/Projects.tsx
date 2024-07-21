import React from 'react';
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Conductor",
          url: "https://www.senseilabs.com/conductor/",
          description: ["Conductor is the SaaS product that I worked on for over 4.5 years beginning in 2020. While I can't go into details about its tech stack, I can say that Conductor is a complex product designed to streamline enterprise-grade transformations, project and portfolio management."],
          stack: [],
        },
        {
          name: "Order Up",
          url: "https://github.com/joshcoles/order-up",
          description: [
            "This was originally built for a job application, and relied on an external API. I then polished up this simple order-tracking app and replaced their API with my own, which I built using express."
          ],
          stack: ["React.js", "SCSS", "Node.js", "Axios", "Express"]
        },        
        {
          name: "Island Roofing and Siding",
          url: "https://github.com/joshcoles/master-exteriors?tab=readme-ov-file",
          description: [
            "My father and brother own a small carpentry business in Prince Edward Island, and put together this static site using a great template by Softnio."
          ],
          stack: ["HTML", "SCSS", "Firebase", "jQuery", "Basin"]
        },
        {
          name: "Widerfunnel (now Conversion)",
          url: "https://conversion.com/case-studies/",
          description: [
            "In my previous role at WiderFunnel (now Conversion) I was fortunate enough to get to work on some extremely recognizeable brands. Here are some case studies featuring our work with companies like Sport Chek, Envoy and The Motley Fool."
          ],
          stack: ["Optimizely", "Visual Website Organizer", "Google Optimize", "jQuery", "HTML", "SCSS", "Webpack"]
        },
        {
          name: "joshcoles.com",
          url: "http://joshcoles.com",
          description: [
            "Very meta - you're here right now. This is my own, personal web playground where I can get some experience building in React.js. It's also, conveniently, a place to show off some of my other work.",
            "Like all side projects, this is a work in progress"
          ],
          stack: ["React.js", "Node.js", "Firebase", "Bootstrap", "HTML", "SCSS", "Create React App"]
        },
        {
         name: "Vancouver Ipsum",
         url: "http://vancouveripsum.com",
         description: [
          "This a very simple ipsum generator that I built while learning Angular 4. Fun and simple to use."
          ],
         stack: ["Angular 4", "CSS", "Firebase", "Bootstrap" ]
        },
        {
         name: "Github Battle",
         url: "https://github-battle.joshcoles.com/",
         description: [
         "This was 100% built following Tyler Davies' amazing react fundamentals course at reacttraining.com.",
         "I hosted it at the end of the tutorial and figured I might as well include it."
         ],
         stack: ["Node.js", "Express.js", "AJAX", "Bootstrap", "jQuery", "PostgreSQL"]
        },
       {
        name: "Money on the Board",
        url: "https://github.com/joshcoles/money-on-the-board",
        description: [
        "Money on the Board was my final project at Lighthouse Labs. Users could use it to make pledges to charities based on the occurance of in-game hockey events like goals or hits.",
        "The application was built for a live demo using faked data from a sports statistics API. It lives on in memory only."
        ],
        stack: ['Express.js', 'Node.js', 'PostgreSQL', 'Knex.js', 'React.js', 'HTML', 'SASS', 'Materialize CSS', 'Git', 'jQuery', 'Socket.io']
       },
       {
        name: "Cool Parts of the City",
        url: "https://github.com/joshcoles/Cool-Parts-of-the-City",
        description: [
        "This was my midterm project at Lighthouse Labs. My team chose to work with the Google Maps API, and we settled on the aptly-named 'Cool Parts of the City'.",
        "Essentially any hypothetical user could create an account and save different maps, each with their own set of markers with "
        ],
        stack: ["HTML", "CSS", "Node.js", "Express.js", "Bootstrap", "jQuery", "PostgreSQL", "Knex.js", "Git"]
       },
      ]
    }
  }

  render() {
    return (
      <section className="project-section container">
        <h2 className="project-heading">Some stuff I've built or worked on</h2>
        <div className="row projects-list">
        {this.state.projects.map((project, index) => {
          return (
            <div className="project-outer col-lg-4 col-sm-12" key={index}>
              <a href={project.url}>
                <div className="project-inner">
                  <h2>{project.name}</h2>
                  {project.description.map((paragraph, index) => {
                    return (
                      <p key={index}>{paragraph}</p>
                    )
                  })}
                  {
                    project.stack.length > 0 && (
                      <>
                        <h3>Tech Stack: </h3>
                        <ul className="tech-stack">
                          {project.stack.map((tech, index) => {
                            return (
                              <li key={index}>{tech}</li>
                          )
                        })}
                      </ul>   
                      </>
                    )
                  }
                </div>
              </a>
            </div>
          )
        })}
        </div>
      </section>
    )
  }
}


export default Projects;