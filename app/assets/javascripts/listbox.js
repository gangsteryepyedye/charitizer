
function assignList()
{
	$('#product_first_list :selected').each(function(i,selected)
	{
		$('#product_second_list').append('<option value="'+selected.value+'">'+selected.text+'</option>');
		$("#product_first_list  option[value='"+selected.value+"']").remove();

	});

}

function unassignList()
{
	$('#product_second_list :selected').each(function(i,selected)
	{
		$('#product_first_list').append('<option value="'+selected.value+'">'+selected.text+'</option>');
		$("#product_second_list  option[value='"+selected.value+"']").remove();

	});

}


function assignListCol()
{
	$('#collection_first_list :selected').each(function(i,selected)
	{
		$('#collection_second_list').append('<option value="'+selected.value+'">'+selected.text+'</option>');
		$("#collection_first_list  option[value='"+selected.value+"']").remove();

	});

}

function unassignListCol()
{
	$('#collection_second_list :selected').each(function(i,selected)
	{
		$('#collection_first_list').append('<option value="'+selected.value+'">'+selected.text+'</option>');
		$("#collection_second_list  option[value='"+selected.value+"']").remove();

	});

}


$(document).ready(function(){
	$('#product_first_list').dblclick(function(){
		assignList();
	});
	$('#product_second_list').dblclick(function(){
		unassignList();
	});

	$('#collection_first_list').dblclick(function(){
		assignListCol();
	});
	$('#collection_second_list').dblclick(function(){
		unassignListCol();
	});

$('#tosecond').click(function()
{
	assignList();
});

$('#tofirst').click(function()
{
	unassignList();
});


$('#tosecondcol').click(function()
{
	assignListCol();
});

$('#tofirstcol').click(function()
{
	unassignListCol();
});

});