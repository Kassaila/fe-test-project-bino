const formValidation = () => {
  const $touchForm = $('#touch-form');

  if (!$touchForm) return;

  const init = () => {
    $touchForm.validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        subject: {
          required: true,
        },
        textarea: {
          required: true,
          minlength: 10,
        },
      },
    });
  };

  return {
    init,
  };
};

export default formValidation();
