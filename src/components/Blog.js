import React from 'react';

class Blog extends React.Component {


  render() {
    return (
      <div>
        <section className="homepage-section homepage-blog container-fluid">
        <div className="row row-centered">
          <div className="blog-content col-lg-10 col-xs-12">
          {/* I'm a hard-coded blog post! Don't do this!*/ }
            <h3>"You should start a blog"</h3>
            <p className="date-posted">August 10th, 2017</p>
            <p>The last thing I thought I would be doing in 2017 was starting a blog, but here I am. As a recent graduate of a web development bootcamp, I'm part of lots of conversations about how to gain exposure and experience. "You should start a blog" is a commonly-overheard phrase in these circles.</p>

            <p>Even using the term <em>blog</em> feels weird, like if I call this a blog I'll be forced to write about my crushes or my...fitness journey? In reality, it will be much less interesting than that.</p>

            <p>"What will you write about, Josh?" asks no-one.</p>

            <p>How I'm building this site, to start with. It's my first <em>real</em> react project (what does that mean?) and some people might find it interesting (most will not). Eventually I'd like to branch out to other areas, including but not limited to: </p>
            <ul>
              <li>Vancouver, BC</li>
              <li>New technologies I've learned to work with</li>
              <li>Charlottetown, PEI</li>
              <li>Figuring out how to make websites look like they weren't designed by a 5th grader</li>
              <li>Sports</li>
              <li>Web development projects I've started working on</li>
              <li>Podcasts and TV shows I like</li>
              <li>Bike trips</li>
            </ul>

            <p>One blog in particular that inspires me is Peter Rukavina's at <a href="http://ruk.ca" rel="noopener noreferrer" target="_blank">ruk.ca</a>. Peter has been maintaining his journal, where he writes about topics including <a href="http://ruk.ca/about" rel="noopener noreferrer" target="_blank">"technology, design, printing, travel and Prince Edward Island"</a>, since around the time that I first logged onto the internet. While I don't subscribe to his RSS feed nor do I read every post, I admire his writing and consistency, and I've often found myself thinking "I would like to do something like this some day".</p>

              <p>I guess that's enough for this first post. Next time I'll talk more about the project, how it's structured, and how I plan on going forward with it. For now just take in the beautiful blues and yellows, my selfie I took in my kitchen, and any bugs that might prohibit you from enjoying the site in any way.</p>

          </div>
        </div>
      </section>
      </div>
    );
  }
}


export default Blog;
