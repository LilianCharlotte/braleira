parasails.registerPage('quiz', {
    data: {
        step: 1,
        brustumfang: null,
        unterbrustbreite: null,
        k_klein: false,
        k_groß: false,
        k_passt: false,
        k_passtSehrGut: false,
    },
    methods: {
        inc: function () {
            this.step = this.step + 1;
        },
        dec: function () {
            this.step = this.step - 1;
        },
        gotoPage: function (n) {
            this.step = n;
        }
    }
});
