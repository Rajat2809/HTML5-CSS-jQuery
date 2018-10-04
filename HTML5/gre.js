var qQuesAns=0;
var qQuesCorr=0;
var rQuesAns=0;
var rQuesCorr=0;
var avQuesAns=0;
var avQuesCorr=0;
jQuery(document).on('click','.btnSave',function(){
	debugger;
var section=jQuery('.section').val();
if(section=='Quant1')
{

	var quantVal = jQuery("input[name='mathQu']:checked").val();
	if(quantVal==1)
	{
		qQuesCorr = qQuesCorr + 1;
		qQuesAns = qQuesAns + 1;
	}
	if(quantVal==0)
	{
		qQuesAns = qQuesAns + 1;
	}
	
	
		
		sessionStorage.setItem("qQuesCorr", qQuesCorr);
		sessionStorage.setItem("qQuesAns", qQuesAns);


}
if(section=='Quant2')
{

	var quantVal = jQuery("input[name='cosQu']:checked").val();
	qQuesCorr = parseInt(sessionStorage.getItem("qQuesCorr"));
	qQuesAns = parseInt(sessionStorage.getItem("qQuesAns"));
	if(quantVal==1)
	{
		qQuesCorr = qQuesCorr + 1;
		qQuesAns = qQuesAns + 1;
	}
	if(quantVal==0)
	{
		qQuesAns = qQuesAns + 1;
	}
	
	
	
	sessionStorage.setItem("qQuesCorr", qQuesCorr);
	sessionStorage.setItem("qQuesAns", qQuesAns);
}
if(section=='Reading')
{
	var readingVal1 = jQuery("input[name='scoQu1']:checked").val();
	var readingVal2 = jQuery("input[name='scoQu2']:checked").val();
	if(readingVal1==1 && readingVal2==1)
	{
		rQuesCorr = rQuesCorr + 1;
		rQuesAns = rQuesAns + 1;
	}
	if(readingVal1==0 || readingVal2==0)
	{
		rQuesAns = rQuesAns + 1;
	}
	
	
	sessionStorage.setItem("rQuesCorr", rQuesCorr);
	sessionStorage.setItem("rQuesAns", rQuesAns);
}
if(section=='AV')
{
	var avVal = jQuery("input[name='videoQu']:checked").val();
	if(avVal==1)
	{
		avQuesCorr = avQuesCorr + 1;
		avQuesAns = avQuesAns + 1;
	}
	if(avVal==0)
	{
		avQuesAns = qQuesAns + 1;
	}
	
	
	sessionStorage.setItem("avQuesCorr", avQuesCorr);
	sessionStorage.setItem("avQuesAns", avQuesAns);
}

});
jQuery(document).on('click',"input[name='scoQu1']",function(){

jQuery('#option1').html(jQuery("input[name='scoQu1']:checked").data('opt'));
});
jQuery(document).on('click',"input[name='scoQu2']",function(){

jQuery('#option2').html(jQuery("input[name='scoQu2']:checked").data('opt'));
});
jQuery(document).on('click',".btnClear",function(){
	jQuery("input[type='radio']").each(function () { $(this).prop('checked', false); });
});