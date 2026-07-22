class ProductValidation {
    textError = document.querySelectorAll('.text-error');

    checkForm(data) {

        this.textError.forEach(error => error.innerHTML = '');
        let isValid = true;

        const titleRegex = /^[A-Za-zآ-ی0-9\s_-]{2,100}$/;
        if (!titleRegex.test(data.title)) {
            if (this.textError[0]) this.textError[0].innerHTML = 'title is invalid';
            isValid = false;
        }

        const priceRegex = /^[1-9]\d*$/;
        if (!priceRegex.test(data.price)) {
            if (this.textError[1]) this.textError[1].innerHTML = 'price is invalid';
            isValid = false;
        }

        if (!data.image) {
            if (this.textError[2]) this.textError[2].innerHTML = 'image is required';
            isValid = false;
        } else {
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif"
            ];

            if (!allowedTypes.includes(data.image.type)) {
                if (this.textError[2]) this.textError[2].innerHTML = 'image format is invalid';
                isValid = false;
            }
        }

        const backgroundRegex = /^(purple|yellow|teal|orange|red|blue|pink|green)$/;
        if (!backgroundRegex.test(data.background)) {
            if (this.textError[3]) this.textError[3].innerHTML = 'background is invalid';
            isValid = false;
        }

        return isValid;
    }
}

export default ProductValidation;