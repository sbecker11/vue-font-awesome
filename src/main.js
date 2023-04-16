import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faPhone, faPhoneVolume, 
    faUserSecret, faBriefcaseMedical, 
    faUserClock, faBacteria, faClockFour, 
    faCoffee, faWater, faXmark, faCheck, 
    faUser, faCheckCircle, faUsers
} from "@fortawesome/free-solid-svg-icons";
// import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
// import { faThin } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faPhoneVolume, 
    faUserSecret, faUserClock, faCoffee,
    faBriefcaseMedical, faBacteria, faClockFour, 
    faWater, faXmark, faCheck, faUser,
    faCheckCircle, faUsers
    // faJs, faVuejs
);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
