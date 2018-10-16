/**
 * 
 */

function callSystemService()
{
	webOS.service.request("luna://com.palm.systemservice",
        {
            method:"time/getSystemTime",
            parameters:{subscribe: true},
            onSuccess: function (args) {
				document.getElementById("lbl").innerHTML = args.localtime.day + "/" + args.localtime.month + "/" + args.localtime.year;
            },
            onFailure: function (args) {
            	document.getElementById("lbl").innerHTML = args;
            }
        });
}

