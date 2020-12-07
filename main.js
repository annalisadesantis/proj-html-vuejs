var app = new Vue({
    el: "#root",
    data: {
        // HEADER
        header: {
            logo_header: "immagini/logo-mobile.png",
            logo_name: "logo-avada",
            menu: ["Home", "Services", "About", "Videos", "Blog", "Store"],
            button_header: "Schedule a workout"
        },

        // MENU A TENDINA
        tendina: false,

        // FOOTER
        footer:{
            logo_footer: "immagini/logo.png",
            text_footer: "Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.",
            icon_social: [
                {
                    icon: "fa-facebook-f",
                    link: "#"
                },
                {
                    icon: "fa-twitter",
                    link: "#"
                },
                {
                    icon: "fa-youtube",
                    link: "#"
                },
                {
                    icon: "fa-instagram",
                    link: "#"
                },
                {
                    icon: "fa-linkedin-in",
                    link: "#"
                }
            ],
            title_box: "Recent Posts",
            links_footer: ["The best protein shake", "Ultimate cardio workout", "New juices available now", "Tips to find training partners", "20 best healthy recipes"],
            contact_footer: "Contact Informations",
            address_footer: "4746 Tipple Road Michigan 48449",
            general_footer: ["Mobile : 1.800.000.0000", "Email : info@your-company.com"]
        }
    },
    methods:{
        // Show menu tendina
        show_menu(){

            if (this.tendina == false) {
                this.tendina = true;
            }else{
                this.tendina = false;
            }
        }
    }

});
