const useLoginValidation = () => {
  return {
    login: {
      required: "Поле обязательно для заполнения.",
      pattern: {
        value: /^[A-Z|a-z][a-z]*_[A-Z|a-z]{2}_[0-9]{2}$/,
        message: "Некорректный ввод.",
      },
    },
    password: {
      required: "Поле обязательно для заполнения.",
    },
  };
};

export default useLoginValidation;
