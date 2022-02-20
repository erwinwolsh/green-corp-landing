document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      const formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input'); 
   
      const input = document.createElement('input');
      input.placeholder = "Введите ваш вариант";
      input.type = "text"; 
        
      formContainer.appendChild(input);
      document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
    }
   
    const otherInput = document.querySelector('.form__other-input');
    if (event.target.value !== 'other' && otherInput) { 
    document.querySelector('#form form').removeChild(otherInput); 
    }
  });