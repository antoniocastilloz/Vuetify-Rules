let data = () => {
    return {
        rules: {
            required: value => !!value || "Campo requerido.",
            sixCounter: value =>
                value.length >= 6 || "A senha deve contar com 6 ou mais caracteres",
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "E-mail inválido.";
            }
        }
    };
}