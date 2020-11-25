const stylesheets = [
  'style-1.css', 
  'style-2.css', 
  'style-3.css',
  'style-4.css'
];

const btn = document.querySelector('#btn-change-theme');
btn.addEventListener('click', () => {
  stylesheet = stylesheets[Math.floor(Math.random() * stylesheets.length)];
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = stylesheet;
  head.appendChild(link);
});