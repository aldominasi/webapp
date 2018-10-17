/**
 * 
 */

function callAuthSyno()
{
	console.log("ok");
	webOS.service.request("luna://com.example.app.synoservice/",
        {
            method:"aaa",
            parameters:{},
            subscribe: true,
            onSuccess: function (args) {
				console.log(args);
            },
            onFailure: function (args) {
            	console.log(args);
            }
        });
};