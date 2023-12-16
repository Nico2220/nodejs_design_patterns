export const body = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style/main.css" />
    <link rel="stylesheet" href="./style/mobile/mobile.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="shortcut icon" href="./img/IMG_1866.jpg" />
    <script defer src="./js/index.js" type="text/javascript"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Alex Smith » Comments Feed"
      href="./img/cesar-rincon-1024x1024.jpg"
    />
    <script
      src="https://kit.fontawesome.com/7c95a20ef4.js"
      crossorigin="anonymous"
    ></script>
    <title>Nicolas Philibert</title>
  </head>
  <body>
    <header class="header">
      <a href="./index.html" class="name">
        <div class="cicle">N</div>
        <span class="firstname">Nicolas</span>
        <span class="lastname">Philibert</span>
      </a>

      <nav class="navbar">
        <ul class="nav-items">
          <li class="nav-item">
            <a href="./index.html">About Me</a>
          </li>

          <li class="nav-item">
            <a href="./works.html">My works</a>
          </li>

          <li class="nav-item last-item">
            <a href="./blog.html">Blog</a>
          </li>
          <li class="nav-item last-item">
            <a href="#question">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="menu-btn">
        <span class="menu-btn__burger"></span>
      </div>
    </header>

    <section class="hero">
      <div class="hero_container">
        <div class="hero_mg">
          <img src="./img/me.svg" class="img_me" />
        </div>
        <div class="hero_desc">
          <div>
            <p class="role">Full Stack Developer</p>
            <h1 class="me">Nicolas Philibert</h1>
            <p class="profile_desc">
              Hi, I’m a full-stack software engineer with about 5 years of
              experience. For the past few years, I have been developing web
              applications using javascript/typescript language. I’m currently
              working as a freelancer at The Good Seat, I’m hands-on in all
              stages of the software development cycle, from planning and design
              to development and deployment. My working days are different; My
              tasks may involve building infrastructure(AWS), implementing
              backend services, building frontend components, and
              fixing/optimizing existing code.
            </p>
          </div>
          <div class="cv-contact">
            <a class="cv" href="./document/Nicolas-Philibert-Resume(1).pdf"
              >Download Cv</a
            >
            <a class="contact" href="mailto:nphilibert17@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </section>

    <section class="secvices">
      <h2 class="secvices_hero">What I Do</h2>
      <div class="line1"></div>
      <div class="line2"></div>

      <div class="services_items">
        <div class="items_cont">
          <div class="item">
            <div class="icon_container">
              <img src="./img/interface.svg" class="icon" />
            </div>
            <div class="service_desc">
              <h3>Integration</h3>
              <p>
                I transform design into functional application. I integrate
                beautiful and complex interfaces to give a good user experience
                with React, Redux and Typescript
              </p>
            </div>
          </div>

          <div class="item">
            <div class="icon_container">
              <img src="./img/API.svg" class="icon" />
            </div>
            <div class="service_desc">
              <h3>API Design and implementation</h3>
              <p>
                I design, implement and maintain API in Nodejs, express and
                MongoDb.I'm attentive to client's problem so I write
                documentation of API, in case other engineers will use it.
              </p>
            </div>
          </div>
        </div>
        <div class="items_cont">
          <div class="item">
            <div class="icon_container">
              <img src="./img/website.svg" class="icon" />
            </div>
            <div class="service_desc">
              <h3>Full WebSite</h3>
              <p>
                Using all of my skills in front-end and back-end to Build entire
                website from Scratch.From the front end to the backend, From
                user story to a real functional website.
              </p>
            </div>
          </div>

          <div class="item">
            <div class="icon_container">
              <img src="./img/algo.svg" class="icon" />
            </div>
            <div class="service_desc">
              <h3>Algorithm</h3>
              <p>
                I'm a problem solver. Using my skill in data structure and
                algorithm to provide the best solution to your problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h2 class="secvices_hero">Testemonial</h2>
      <div class="line1"></div>
      <div class="line2"></div>

      <div class="testimonials_container">
        <div class="testimonial_item item1">
          <div class="testimonial_prof">
            <img src="./img/Mamadou 1.svg" class="icon_profile" />
          </div>

          <div class="testimonial_content">
            <p class="testimonial_text">
              " I worked with Nicolas on the project named "Lotto". He designed
              the API to make it easier to use for Front-end developers. Always
              attentive to clients' problems, he demonstrates a flawless sense
              of detail. That's why I recommend Nicolas to anyone looking for a
              Back-end developer"
            </p>
            <p class="testimonial_pers">Mamadou</p>
            <p class="testimonial_pers_role">Frontend-Developer</p>
          </div>
        </div>

        <div class="testimonial_item">
          <div class="testimonial_prof">
            <img src="./img/profile-pic (3).png" class="icon_profile" />
          </div>

          <div class="testimonial_content">
            <p class="testimonial_text">
              " Nicolas developed my loan management application. He implemented
              algorithms that increased my turnover by over 40% and also my
              productivity. I recommend Nicolas to anyone looking for a
              developer."
            </p>
            <p class="testimonial_pers">Billy</p>
            <p class="testimonial_pers_role">Economiste</p>
          </div>
        </div>
      </div>
    </section>
    <section class="question" id="question">
      <h2 class="secvices_hero">Want to work ?</h2>
      <div class="line1"></div>
      <div class="line2"></div>

      <div class="question_container">
        <p>
          If you need a modern and powerful website for your business, startup
          or yourself, I am available for work. You can email me directly at
          <a href="mailto:nphilibert17@gmail.com" class="question_content"></a>
            nphilibert17@gmail.com</a
          >
        </p>
      </div>
    </section>

    <section class="fotter">
      <div class="social_links">
        <a
          href="https://www.linkedin.com/in/nicolas-philibert-bb0833206/"
          target="_blank"
          >Linkedin</a
        >
        <a href="https://github.com/Nico2220?tab=repositories" target="_blank"
          >Github</a
        >
        <a href="https://www.instagram.com/kicodev_2220/">Instagram</a>
      </div>
    </section>
  </body>
</html>
`;
