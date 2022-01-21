parasails.registerPage('search', {
    data: {
        result: [],
        filterNach: 'farbe',
        searchTerm: "",
    },
    methods: {
        search: function () {
            fetch('/api/v1/bra/find?filterNach=' + encodeURIComponent(this.filterNach) + '&wert=' + encodeURIComponent(this.searchTerm), { cache: "no-cache" })
                .then(function (response) { return response.json() })
                .then((data) => (this.result = data))
        },
        deleteBra: function (id) {
            fetch('/api/v1/bra/delete?id=' + id)
                .then(function (data) { alert('Der BH Eintrag wurde aus der Datenbank gelöscht.') })
                .then(function () { location.reload() })
        }
    },
    mounted() {
        this.search();
    }
})