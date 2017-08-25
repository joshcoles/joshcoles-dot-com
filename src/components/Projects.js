import React from 'react';
import showdown from 'showdown';

    let converter = new showdown.Converter();
    let markdownText = '#hello, markdown!';
    let html = converter.makeHtml(markdownText);

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    // Every project's description needs to be an array - every new string
    // in the array is a new paragraph.
    projects: [
        {
         name: "Vancouver Ipsum",
         url: "http://vancouveripsum.com",
         description: [
          "This a very simple ipsum generator that I built in Angular 4. I started very simple, but hope to add more features as I develop my skills through a course that I'm taking."
          ],
         stack: ["Angular 4", "CSS", "Firebase", "Bootstrap" ]
       },
        {
         name: "joshcoles.com",
         url: "http://joshcoles.com",
         description: [
          "Very meta - you're here right now. This is my own, personal web playground where I can get some experience building in React.js. It's also, conveniently, a place to show off some of my other work.",
          "Note that I kind of just started this one day without much planning ahead, which I know is bad practice. My goal is to continue to refactor this in my spare time and continue to improve it as I add features."
          ],
         stack: ["React.js", "Node.js", "Firebase", "Bootstrap", "HTML", "SASS", "Create React App" ]
       },
       {
         name: "masterexteriors.ca",
         url: "https://github.com/joshcoles/master-exteriors",
         description: [
         "I'm in the process of building this site for my father's business, 'Master Exteriors'. I'm planning on deploying it in September after I get some photos of his work while I'm home in PEI this summer.",
         "This is a static site built with an Express.js server and styled with SASS. I hope that it can bring in a bit more local business for him, so I'm going to put some work into SEO before it launches."
         ],
         stack: ["Node.js", "Express.js", "SASS", "jQuery"]
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
        name: "Responsive Page",
        url: "https://adhesive-paperback.glitch.me/",
        description: [
        "This is just a little responsive page I built as part of a job application a few months ago."
        ],
        stack: ["HTML", "CSS"]
       },
       {
        name: "Social or Nothing",
        url: "http://www.socialornothing.com/",
        description: [
        "I chose this to showcase some of the work I did at Pivot & Pilot. I mostly contributed to the styling of this site, including some fun jQuery animations."
        ],
        stack: ["PHP", "Wordpress", "jQuery", "HTML", "SASS"]
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
        stack: ["HTML", "CSS"]
       },
    ]
  }
}

  render() {
    return (
      <section className="project-section container">
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
              <h3>Tech Stack: </h3>
              <ul className="tech-stack">
                {project.stack.map((tech, index) => {
                  return (
                    <li key={ index }>{tech}</li>
                  )
                })}
              </ul>
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