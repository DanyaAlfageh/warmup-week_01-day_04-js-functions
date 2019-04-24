const isLeapYear = function(checkYear)
{
	divByFour = checkYear%4 == 0;
    divByHundred = checkYear%100 == 0;
    divByFourHund = checkYear%400 == 0;
    
    if(!Number.isInteger(checkYear)||checkYear<0)
 		{
			if(checkYear<0)
				console.log("Years Have to be equal to 0 or Greater. Please Pass Proper date!");
			else 
				console.log("The Input Data Type is Not Correct, Please pass Numbers only!");
		}
      
    else{
        	if( (divByFour && !divByHundred) || (divByFour && divByFourHund) )
      			console.log("Leap Year");
    		else console.log("Not A Leap Year");
		}

}