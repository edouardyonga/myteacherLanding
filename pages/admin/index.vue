<template>
  <div class="">
    <div class="home">
      <!-- banner -->

      <!-- register -->
      <div class="w3-register py-4 position-relative">
        <!-- <img
          class="position-absolute img-fluid agile-img"
          src="i1.png"
          alt=""
        /> -->
        <div class="container py-lg-5">
          <div class="row register-form py-md-5">
            <!-- register details -->
            <div class="col-lg-6 mx-auto wthree-form-left py-md-5 pt-sm-5 pb-sm-3">
              <div class="title-wthree">
                <h3 class="agile-title text-center">
                  List of Registrations
                </h3>
                <span></span>
              </div>
              <div>
                <div class="agileits-services-row row py-md-5 pb-5">
                </div>
              </div>
            </div>
          </div>
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
          </div>
        </div>
      </div>
      <!-- //services -->

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
  asyncData(context){
    return this.$axios.get(`${process.env.baseUrl}subscribe`)
    .then(res => {
      return {subscribers : res.data}
    })
    .catch(error=> {
      console.log(error)
    })
  },

  head(){
    return {title: Admin}
  }

}
</script>

