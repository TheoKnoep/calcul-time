console.log(Notification.permission); 

Notification.requestPermission().then(function(result) {
    console.log(result);
  });



let notification = new Notification('Nouveautés', {
    body: "- Nouveau style", 
    icon: "logo-144.png"
}); 