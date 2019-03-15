$(document).ready(function() {
    // Setup - add a text input to each footer cell
    var i = 0;
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        if(i != 0){
        $(this).html( '<input type="text" placeholder="'+title+'" />' );}
        else{
        	$(this).html( '<input placeholder="Search By  : "value", " disabled />' );
        }
        i++;
    } );
 
    // DataTable
    var table = $('#example').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );