(()=>{"use strict";var __webpack_modules__={823:()=>{eval("\n;// CONCATENATED MODULE: ./src/modules/auth.js\nconst auth = () => {\n  'use strict';\n\n  const buttonAuth = document.querySelector('.button-auth');\n  const modalAuth = document.querySelector('.modal-auth');\n  const closeAuth = document.querySelector('.close-auth');\n  const logInForm = document.getElementById('logInForm');\n  const inputLogin = document.getElementById('login');\n  const inputPassword = document.getElementById('password');\n  const userName = document.querySelector('.user-name');\n  const buttonOut = document.querySelector('.button-out');\n\n  const toggleModalAuth = () => {\n    modalAuth.classList.toggle('is-open');\n    inputLogin.removeAttribute('style');\n  };\n\n  const login = user => {\n    if (user.login.trim() !== '') {\n      logInForm.reset();\n      userName.textContent = user.login;\n      userName.style.display = 'inline';\n      buttonOut.style.display = 'block';\n      buttonAuth.style.display = 'none';\n      modalAuth.classList.remove('is-open');\n    } else {\n      inputLogin.style.cssText = 'border: 2px solid #ff0000';\n    }\n  };\n\n  const logout = () => {\n    userName.textContent = '';\n    userName.removeAttribute('style');\n    buttonOut.removeAttribute('style');\n    buttonAuth.removeAttribute('style');\n    localStorage.removeItem('gloDeliveryJS');\n  };\n  buttonOut.addEventListener('click', logout);\n\n  logInForm.addEventListener('submit', event => {\n    event.preventDefault();\n    const user = {\n      login: inputLogin.value,\n      password: inputPassword.value,\n    };\n    localStorage.setItem('gloDeliveryJS', JSON.stringify(user));\n    login(user);\n  });\n\n  buttonAuth.addEventListener('click', toggleModalAuth);\n  closeAuth.addEventListener('click', toggleModalAuth);\n  modalAuth.addEventListener('click', event => {\n    if (event.target.matches('.is-open')) {\n      toggleModalAuth();\n    }\n  });\n\n  if (localStorage.getItem('gloDeliveryJS')) {\n    login(JSON.parse(localStorage.getItem('gloDeliveryJS')));\n  }\n};\n\n/* harmony default export */ const modules_auth = (auth);\n\n;// CONCATENATED MODULE: ./src/modules/menu.js\nconst menu = () => {\n  'use strict';\n\n  const restaurant = 'tanuki';\n\n  const renderItems = data => data.forEach(item => console.log(item));\n\n  fetch(`./db/${restaurant}.json`)\n    .then(response => response.json())\n    .then(data => renderItems(data))\n    .catch(error => console.log(error));\n};\n\n/* harmony default export */ const modules_menu = (menu);\n\n;// CONCATENATED MODULE: ./src/menu.js\n\n\n\nmodules_auth();\nmodules_menu();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBZSxJQUFJLEVBQUM7OztBQzlEcEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBZSxJQUFJLEVBQUM7OztBQ2JjO0FBQ0E7O0FBRWxDLFlBQUk7QUFDSixZQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnktZm9vZC1qcy8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSIsIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLWpzLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIiwid2VicGFjazovL2RlbGl2ZXJ5LWZvb2QtanMvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJyk7XG4gIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJyk7XG4gIGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyk7XG4gIGNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcbiAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpO1xuXG4gIGNvbnN0IHRvZ2dsZU1vZGFsQXV0aCA9ICgpID0+IHtcbiAgICBtb2RhbEF1dGguY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xuICAgIGlucHV0TG9naW4ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ2luID0gdXNlciA9PiB7XG4gICAgaWYgKHVzZXIubG9naW4udHJpbSgpICE9PSAnJykge1xuICAgICAgbG9nSW5Gb3JtLnJlc2V0KCk7XG4gICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XG4gICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbEF1dGguY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dExvZ2luLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyOiAycHggc29saWQgI2ZmMDAwMCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHVzZXJOYW1lLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICBidXR0b25PdXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIGJ1dHRvbkF1dGgucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdnbG9EZWxpdmVyeUpTJyk7XG4gIH07XG4gIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dCk7XG5cbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxuICAgIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dsb0RlbGl2ZXJ5SlMnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgbG9naW4odXNlcik7XG4gIH0pO1xuXG4gIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbEF1dGgpO1xuICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbEF1dGgpO1xuICBtb2RhbEF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuaXMtb3BlbicpKSB7XG4gICAgICB0b2dnbGVNb2RhbEF1dGgoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2xvRGVsaXZlcnlKUycpKSB7XG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2xvRGVsaXZlcnlKUycpKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGg7XG4iLCJjb25zdCBtZW51ID0gKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgY29uc3QgcmVzdGF1cmFudCA9ICd0YW51a2knO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gZGF0YSA9PiBkYXRhLmZvckVhY2goaXRlbSA9PiBjb25zb2xlLmxvZyhpdGVtKSk7XG5cbiAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50fS5qc29uYClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiByZW5kZXJJdGVtcyhkYXRhKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuXG5hdXRoKCk7XG5tZW51KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///823\n")}},__webpack_exports__={};__webpack_modules__[823]()})();