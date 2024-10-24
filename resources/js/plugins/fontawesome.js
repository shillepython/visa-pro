import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Импортируем необходимые иконки из free-solid-svg-icons и free-brands-svg-icons
import {
    faBars,
    faTimes,
    faComments,
    faPhone,
    faFileAlt,
    faCalendarAlt,
    faBriefcase,
    faGlobe,
    faLock,
    faQuoteLeft,
    faBolt
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// Добавляем иконки в библиотеку
library.add(
    faBars,
    faBolt,
    faTimes,
    faComments,
    faPhone,
    faFileAlt,
    faCalendarAlt,
    faBriefcase,
    faGlobe,
    faLock,
    faQuoteLeft,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
);

export default {
    install: (app) => {
        app.component('font-awesome-icon', FontAwesomeIcon);
    }
};
