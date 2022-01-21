parasails.registerPage('quiz', {
    data: {
        step: 1,
        brustumfang: '',
        unterbrustbreite: '',
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
