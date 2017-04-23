function submitToMailingList() {
    var serializedList = $('#mailing-list').serializeArray();
    var mailingDict = {};
    for (var i in serializedList) {
        var subDict = serializedList[i];
        mailingDict[subDict['name']] = subDict['value'];
    }
    $.ajax({
        url: '/api/mailing/',
        type: 'POST',
        data: mailingDict,
        success: function (data) {
            Materialize.toast(data.message, 4000);
            $("#mailing-list").trigger('reset');
        },
        error: function (data) {
            Materialize.toast(data.message, 4000);
        }
    });
};