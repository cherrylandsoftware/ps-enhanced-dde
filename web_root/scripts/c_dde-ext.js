var $j = jQuery.noConflict();
$j(function(){
	var extras = 3;
	var template = $j('#search-template');
	if(template !=undefined){
		for(var i = extras; i >0; i--){
			var clone = $j(template).clone().removeAttr('id');
			$j('select[name="fieldnum_2"]', clone).attr('name', 'fieldnum_'+(i+2))
				.removeAttr('onchange')
				.change(function(){
					set_comp(this, $j(this).parent().next('span').find('select').get(0));
				});
			$j('select[name="comparator2"]', clone).attr('name', 'comparator'+(i+2));
			$j(template).after(clone);
		}
	}
});