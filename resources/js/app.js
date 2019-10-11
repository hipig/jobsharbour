import { InertiaApp } from "@inertiajs/inertia-vue";
import Vue from "vue";
import VueSnackbar from "vue-snack";
import VModal from "vue-js-modal";

Vue.mixin({ methods: { route: window.route } });
Vue.use(InertiaApp);
Vue.use(VueSnackbar, { close: true, position: "bottom-left" });
Vue.use(VModal);

const app = document.getElementById("app");

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`@/Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(app);
