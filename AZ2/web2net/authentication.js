// AZ-Authentication v1.0.0 | (c) web2net AS

var AZAuth = new AZAuthentication();
function AZAuthentication()
{
    _Main = this;
    _Main.ServerDomain = "http://api.web2net.no";
    _Main.ServerDomain = "http://localhost:57152";
    _Main.AuthRequest = function (callback)
    {

        callback("Hei");

        //AZLoadXMLHttpRequest(_Main.ServerDomain + "/api/authentication/authentication_1", "", function (response)
        //{
        //    callback(response);
        //});
    }

    return (
        {
            "AuthRequest": _Main.AuthRequest(function (response) { return response })
        });

    function AZLoadXMLHttpRequest(url, data, callback)
    {
        if (window.XMLHttpRequest)
        {
            var xmlhttp = new XMLHttpRequest();
        }
        else
        {
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function ()
        {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                if (callback != "")
                {
                    var response = "";
                    if (xmlhttp.responseText != "")
                    {
                        response = JSON.parse(xmlhttp.responseText);
                    }
                    callback(response);
                }
            }
        }
        var _Token = "7931A-D57F8-204D2-7B680-67B22-8AA24";
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + btoa(_Token));
        xmlhttp.send(data);
    }
}