class jquery_init{
    constructor(){

    }

    init(){
        skinChanger();
        initSparkline();
        CustomJs();
        SearchDiv();

        setTimeout(function () {
            $('.page-loader-wrapper').fadeOut();
        }, 30);



        // toggle function
        $.fn.clickToggle = function (f1, f2) {
            return this.each(function () {
                var clicked = false;
                $(this).bind('click', function () {
                    if (clicked) {
                        clicked = false;
                        return f2.apply(this, arguments);
                    }

                    clicked = true;
                    return f1.apply(this, arguments);
                });
            });
        };

        // Light/Dark
        var toggleSwitch = document.querySelector('.dark_mode input[type="checkbox"]');
        var currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

        if (toggleSwitch) {

            toggleSwitch.addEventListener('change', switchTheme, false);
        }



        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5e44175da89cda5a188591ec/1e0t1qduj';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();

    }
}

export default new jquery_init();