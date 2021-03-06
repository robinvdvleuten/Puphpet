$(document).ready(function(){
    $(".tags").select2({
        tags: [],
        tokenSeparators: [","]
    });

    $(".selectTags").select2();

    $('#apacheAddVhost').click(function(){
        var vhostContainer = $('#apache-vhost-count');
        var currentCount = vhostContainer.attr('rel');

        $.get('/add/vhost', { id: ++currentCount }, function(data) {
            vhostContainer.attr('rel', currentCount);

            vhostContainer.append(data);
        });

        return false;
    });

    $("body").delegate(".apacheDelVhost", "click", function() {
        var vhostNum = $(this).attr('rel');
        $("#" + vhostNum).slideUp();

        return false;
    });

    $('#mysqlAddDbuser').click(function(){
        var dbContainer = $('#mysql-dbuser-count');
        var currentCount = dbContainer.attr('rel');

        $.get('/add/dbuser', { id: ++currentCount }, function(data) {
            dbContainer.attr('rel', currentCount);

            dbContainer.append(data);
        });

        return false;
    });

    $("body").delegate(".mysqlDelDb", "click", function() {
        var dbNum = $(this).attr('rel');
        $("#" + dbNum).slideUp();

        return false;
    });

    $('.apacheShowMore').click(function(){
        var id = $(this).attr('rel');

        $('#' + id).toggle();

        return false;
    });

    $('.multiselect').multiselect({
        maxHeight: 300,
        buttonWidth: '400px',
        buttonText: function(options, select) {
            if (options.length == 0) {
              return 'None selected <b class="caret"></b>';
            }
            else if (options.length > 5) {
              return options.length + ' selected  <b class="caret"></b>';
            }
            else {
              var selected = '';
              options.each(function() {
                selected += $(this).text() + ', ';
              });
              return selected.substr(0, selected.length -2) + ' <b class="caret"></b>';
            }
        }
    });
});
