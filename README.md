<<< HEAD

### GAME INFUSION 
</br>
<h4> INTRODUCTION </h4>
<p>
    Game Infusion is a video streaming cum e-Commerce website that fetches data from various APIs to display video game related information and professional video
  gaming tournaments like Esports from around the world. The website features an e-commerce functionality that enables the visitor to buy games, gears (mainly consoles)
  and game passes. The website also contains search functionality where it fetches data from YouTube v3.0 API to provide you with the live stream results
  of various YouTubers that matches the game you searched for.
</p>
</br>
<h4> TECHNOLOGY STACK </h4>
<p> The Technologies and APIs used for building this websites are as follows: </p>
<p> 1. React JS </p>
<p> 2. YouTube v3.0 API </p>
<p> 3. PandaScore API </p>
<p> 4. Commerce JS </p>
<p> 5. Stripe JS </p>
<p> 6. CSS3 &nbsp; &nbsp; <i> and </i></p>
<p> 7. Gamespot API (was used but discarded later due to unsupported CORS poilcy when site is deployed).</p>
</br>
<h4> NPM PACKAGES </h4>
<p> These are some of the npm packages used in this website : </p>
<p> 1. React Router Dom <p/>
<p> 2. React Player </p>
<p> 3. React to PDF </p>
<p> 4. Particle JS &nbsp; &nbsp; <i> and </i> </p>
<p> 5. React Preloader </p>
</br>
<h4> OVERVIEW OF THE CODE </h4>
<p> A high level overview of the code is as follows - the site uses <strong> React Hooks </strong> to change, store and update state of various components, 
  it uses <strong>React Router Dom</strong> to traverse between different pages. The video functionality of this website is powered by <strong>React Player</strong>. The receipt
  functionality after purchase of an item is facilitated by <strong> React to PDF </strong>. The backend of this website that was used for ecommerce functionality is possible
  due to <strong>Commerce JS</strong>. Payment functionality is made possible with the help of <strong>Stripe JS</strong>.</p>
  <p>Regarding the use of APIs, every ESPORTS data ie, Leaderboards, Fixtures and Match streams are all fetched by using the <strong> PandaScore API </strong> and the YouTube
  contents like 'YouTube Streams' and search results are fetched using the <strong>YouTube v3.0 API</strong>. Dynamic rendering of the 'Happenings' tab was rendered using
    the <strong> Gamespot API </strong> but unfortunately had to be discarded due to CORS policy.</p>
 </br>
 <h4>FUTURE UPDATES</h4>
 <p>Once I'am done with my other projects, my portfolio website and possibly after I get hired, I will start working on the mobile version of thie website.</p>
 </br>
 <h4>DISTANT FUTURE PLANS</h4>
 <p>In decent future, I have plans of rewriting the code of the website and trying to improve the code quality which is bit messy as of now and might try to make
  it scalable if I gain exprerience from professional environment. Nothing regarding my distant future plans is certain right now.</p>
 </br>
 <h4>KNOWN ISSUES</h4>
 <p>As mentioned in the <i>IMPORTANTREAD.md</i> file, fetching data from PandaScore API and Gamespot API was hindered by the CORS policy that blocks cross domain resource
  sharing. As a result of that anyone who would like to see all the features of this website will have to install an extension named, <strong> Allow CORS : Access Control
  Allow Origin'</strong> from the <i>Chrome Web Store</i>. I regret the inconvinience caused but that is the only way to experience this website. Alternatively, you
  can watch my video of this website from my portfolio website which has been recorded in development mode and where everything is working nicely. While the PandaScore API
  at least works with a CORS unblocking extension, the Gamespot API still refuses to work which is why I was forced to remove the dynamic rendering of content on
  the 'Happenings' tab and add static data just so that the tab doesn't weirdly show a blank screen upon clicking. But you can still click on the 'News' and 'Reviews'
  to read more about the contents.</p>
  <p> One more issue that I encountered is with Stripe JS where I had difficulties trying to send data to backend (commerce JS) due to some Indian Government Regulations 
  which I couldn't figure out and that is why I had to emulate the payment procedure instead of actually doing the processing. </p>
  </br>
  <h3>I hope you had a good time reading the documentation.</h3>
  
  ### THANK YOU FOR VISITING THE WEBSITE AND GIVING YOUR TIME TO READ THIS DOCUMENTATION !
  
  >>>
