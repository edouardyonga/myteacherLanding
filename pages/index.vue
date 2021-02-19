<template>
  <div class="">
    <div class="home">
      <!-- banner -->
      <div class="banner" id="banner">
        <!-- header -->
        <header>
          <nav
            class="navbar navbar-expand-lg navbar-light bg-gradient-secondary"
          >
            <h1>
              <nuxt-link to='/' class="navbar-brand text-white" style="text-transform: none;">
              MyTeachers.Tech<br/>

              <p class="moto">
                - We offer Accelerated Training Programs<br>
<span>- Hands on Corporate Training</span>
              </p>
               </nuxt-link>
            </h1>
            <button
              class="navbar-toggler ml-md-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=" navbar-toggler-icon" style="color:white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-lg-auto text-center">
                <li class="nav-item active mr-lg-3">
                  <nuxt-link class="nav-link" to="/"
                    >Home
                    <span class="sr-only">(current)</span>
                  </nuxt-link>
                </li>
                <li class="nav-item mr-lg-3 mt-lg-0 mt-3">
                  <a class="nav-link scroll" href="#services">services</a>
                </li>
                <li class="nav-item mr-lg-3 mt-lg-0 mt-3">
                  <a class="nav-link scroll" href="#contact">Register</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <!-- //header -->
        <div class="container">
          <!-- banner-text -->
          <div class="banner-text text-center">
            <div class="slider-info">
              <h3>Become an IT Pro</h3>
              <p class="text-red" style="color:red">
                Rapid Courses: <strong><i>No Experience needed!</i></strong>
              </p>

            </div>
          </div>
        </div>
      </div>
      <!-- register -->
      <div class="w3-register py-4 position-relative" id="register">
        <img
          class="position-absolute img-fluid agile-img"
          src="i1.png"
          alt=""
        />
        <div class="container py-lg-5">
          <div class="row register-form py-md-5">
            <div class="offset-lg-2"></div>
            <!-- register details -->
            <div class="offset-lg-4"></div>
            <div class="col-lg-6 wthree-form-left py-md-5 pt-sm-5 pb-sm-3">
              <div class="title-wthree">
                <h3 class="agile-title text-center">
                  Get your Dream Job Fast
                </h3>
                <span></span>
              </div>
              <div>
                <div class="agileits-services-row row py-md-5 pb-5">

                <h4 class="agile-title text-center mx-auto">
                  Free Registration: <b class="text-red">Ending Soon</b>
                </h4>
                </div>
              </div>
              <!-- register form grid -->
              <!-- <div class="register-top1">
                            <form action="#" method="get" class="register-wthree">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-user"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label>
                                                First name
                                            </label>
                                            <input class="form-control" type="text" placeholder="Johnson" name="email" required="">
                                        </div>
                                        <div class="col-md-5">
                                            <label>
                                                Last name
                                            </label>
                                            <input class="form-control" type="text" placeholder="Kc" name="email" required="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-envelope-open"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                Email
                                            </label>
                                            <input class="form-control" type="email" placeholder="example@email.com" name="email" required="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-lock"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                password
                                            </label>
                                            <input type="password" class="form-control" placeholder="*******" name="Password" id="password1" required="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-1 d-md-flex align-items-end justify-content-end px-md-0">
                                            <label class="mb-0">
                                                <span class="fas fa-lock"></span>
                                            </label>
                                        </div>
                                        <div class="col-md-11">
                                            <label>
                                                confirm password
                                            </label>
                                            <input type="password" class="form-control" placeholder="*******" name="Password" id="password2" required="">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-lg-5 mt-3">
                                    <div class="offset-1"></div>
                                    <div class="col-md-11">
                                        <button type="submit" class="btn btn-agile btn-block w-100">register</button>
                                    </div>
                                </div>
                            </form>
                        </div> -->
              <!--  //register form grid ends here -->
            </div>
          </div>
          <!-- //register details container -->
        </div>
      </div>
      <!-- //register -->
      <!-- services -->
      <div class="agileits-services py-5 position-relative" id="services">
        <div class="container py-lg-5">
          <div class="title-wthree text-center">
            <h3 class="agile-title text-white">
             Select your courses and register
            </h3>
            <span></span>
            <p class="reg-subtitle">
              A professional will contact you ASAP
            </p>
          </div>
          <div class="agileits-services-row row py-md-5 pb-5">
            <div class="col-lg-6 mx-auto">
              <div class="agileits-services-grids">
                <h4 class="sec-title">Our Novice to Pro Programs</h4>
                <span></span>
                <div>
                  <div v-for="(course, index) in foundation" :key='index' class="form-check">
                      <label class="form-check-label pt-2">
                        <input
                        v-model="selected"
                          type="checkbox"
                          class="form-check-input"
                          name="optradio"
                          :value="course"
                        />{{course}}
                      </label>
                    </div>

                </div>
              </div>
            </div>
            <!-- <div class="col-lg-6">
              <div class="agileits-services-grids">
                <h4 class="sec-title">Specialization Courses</h4>
                <span></span>
                <div>
                  <div v-for="(course, index) in specialization" :key='index' class="form-check">
                      <label class="form-check-label pt-2">
                        <input
                        v-model="selected"
                          type="checkbox"
                          class="form-check-input"
                          name="optradio"
                          :value="course"
                        />{{course}}
                      </label>
                    </div>

                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- //services -->

      <!-- contact -->
      <div class="contact-wthree position-relative" id="contact">
        <div class="container py-sm-5">
          <div class="row py-lg-5 py-4">
            <div class="col-lg-4">
              <div class="title-wthree">
                <h3 class="agile-title">Your Info</h3>
                <span></span>
                <p>
                  Please fill out the form for online registration we will get back with you shortly.
                </p>
              </div>
            </div>
            <div class="offset-2"></div>
            <div class="col-lg-6 mt-lg-0 mt-5">
              <!-- register form grid -->
              <div class="register-top1">
                <form action="#" method="get" class="register-wthree">
                  <div class="form-group">
                    <div class="row">
                      <div
                        class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0"
                      >
                        <label class="mb-0">
                          <span class="fas fa-user"></span>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <label> Name </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Johnson"
                          name="email"
                          required=""
                        />
                      </div>

                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div
                        class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0"
                      >
                        <label class="mb-0">
                          <span class="fas fa-envelope-open"></span>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <label> Email </label>
                        <input
                          class="form-control"
                          type="email"
                          placeholder="example@email.com"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                  </div>



                  <div class="form-group">
                    <div class="row">
                      <div
                        class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0"
                      >
                        <label class="mb-0">
                          <span class="fas fa-phone"></span>
                        </label>
                      </div>

                      <div class="col-md-10">
                        <label> Phone </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="+237 654309211"
                          name="email"
                          required=""
                        />
                      </div>



                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div
                        class="col-md-2 d-md-flex align-items-end justify-content-end px-md-0"
                      >
                        <label class="mb-0">
                          <span class="fas fa-map"></span>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <label> City </label>
                        <input
                          class="form-control"
                          placeholder="city"
                          required=""
                        />
                      </div>
                    </div>
                  </div>


                  <div class="row mt-lg-5 mt-3">
                    <div class="offset-2"></div>
                    <div class="col-md-10">
                      <button
                        type="submit"
                        class="btn btn-agile btn-block w-100"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <!--  //register form grid ends here -->
            </div>
          </div>
        </div>
      </div>
      <!-- //contact -->

      <!-- footer -->
      <footer id="footer" class="text-sm-left text-center">
        <div class="container py-4 py-sm-5">
          <h2>
            <nuxt-link to='/' class="navbar-brand text-white">
              <img src="/logo-white.png"/>
               </nuxt-link>
          </h2>
          <hr />
          <div class="d-flex justify-content-between footer-bottom-cpy">
            <div class="cpy-right">
              <p>
                © 2021 My Teacher Tech
              </p>
            </div>
          </div>
        </div>
      </footer>
      <!-- //footer -->

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected:[],
    foundation: [
      "Cyber Security",
    "Databases Administration",
     "Linux system Administration & Engineering",
     "Networking: - CCNA, Network+",
     "Cloud Computing",
     "AWS Training & Certifications Prep",
     "Web Development: Full Stack",
     "Automation – Ansible, Git, Scripting",
     "Vmware, KVM",
     "Computer Hardware/Software Engineering, A+",
     "Windows System Administration",
     "Containers – Docker, kubernetes",
     "Red Hat: RHCSA, RHCE, Ansible, containers",
     "Technical Job Interview Preparation and Resume Review",
     "Mortgage Underwriting"

],
    specialization: [
      "Red Hat System Administrator",
      "Web Development",
      "Certification Prep - RHCSA",
      "Certification Prep – RHCE",
      "Linux configuration and troubleshooting",
      "Troubleshooting Redhat systems",
      "Database Administration – postgress",
      "Database Administration – Oracle 12c",
      "Networking  - CCNA,  Network+",
      "Cyber Security – Security+",
      "AWS – AWS Certifications"
      ],
  }),
};
</script>

