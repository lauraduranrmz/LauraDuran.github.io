let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #bf92e2;">Desarrollo sitios web y proyectos de programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
