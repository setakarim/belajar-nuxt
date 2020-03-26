export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://reqres.in/api/"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ["auth"]
  },
  auth: {
    redirect: {
      login: "/login",
      home: "/",
      logout: "/login"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "login", method: "delete" },
          user: { url: "users/1", method: "get", propertyName: "data" }
        }
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      },
      social: {
        _scheme: "oauth2",
        authorization_endpoint: "https://accounts.google.com/o/oauth2/auth",
        userinfo_endpoint: "https://www.googleapis.com/oauth2/v3/userinfo",
        scope: ["openid", "profile", "email"],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: "token",
        token_type: "Bearer",
        redirect_uri: "",
        client_id:
          "903032570541-hri09rblcnbk4dsccvl23f9hr1i153hc.apps.googleusercontent.com",
        token_key: "access_token",
        state: "UNIQUE_AND_NON_GUESSABLE"
      }
    }
  }
};
