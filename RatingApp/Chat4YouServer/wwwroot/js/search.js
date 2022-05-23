$(function () {
    $('form').submit(async e => {
        e.preventDefault();
        const q = $('#search').val();
        $('tbody').load('/Rates/Search?query=' + q);
    });
});