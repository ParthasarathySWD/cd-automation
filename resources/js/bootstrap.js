window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
// 

require('../js/bundles/libscripts.bundle.js');
require('../js/bundles/apexcharts.bundle.js');
// require('../js/bundles/c3.bundle.js');
// require('../js/bundles/chartist.bundle.js');
// require('../js/bundles/datatablescripts.bundle.js');
require('../js/bundles/easypiechart.bundle.js');
require('../js/bundles/flotscripts.bundle.js');
require('../js/bundles/jvectormap.bundle.js');
require('../js/bundles/knob.bundle.js');
require('../js/bundles/libscripts.bundle.js');
require('../js/bundles/mainscripts.bundle.js');
require('../js/bundles/vendorscripts.bundle.js');
require('mdbreact/dist/mdbreact.js');
// require('../js/themejs/index.js');