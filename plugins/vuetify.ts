import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//import "~/assets/scss/style.scss";

import {
  BLUE_THEME,
} from "~/theme/LightTheme";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "BLUE_THEME",
      themes: {
        BLUE_THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: "md"
      },
      VTextField: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VTextarea: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VSelect: {
        variant: "outlined",
        density: "comfortable",
        color: "primary",
      },
      VListItem: {
        minHeight: "45px",
      },
      VTooltip: {
        location: "top",
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
  // nuxtApp.vueApp.use(PerfectScrollbar);
  // nuxtApp.vueApp.use(VueApexCharts);
  // nuxtApp.vueApp.use(VueTablerIcons);
});
