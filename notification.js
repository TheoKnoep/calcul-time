console.log(Notification.permission); 

Notification.requestPermission().then(function(result) {
    console.log(result);
  });



let notification = new Notification('Nouveautés', {
    body: "- Nouveau style"
}); 