import React from 'react';

let FormGenerator = (object) => {

    let formObject = object.object;

    let GenerateForm = (formInput) => {
        return formInput.map((input, i) => {
            if (input.formGroup) return renderFormGroup(input.formGroup, i);
            if (input.inputGroup) return renderInputGroup(input.inputGroup, i);
            return renderInput(input, input.formGroup.inputs);
        })
    }

    let renderFormGroup = (formGroup) => {
        return (
            <div key={Math.random()*100}>
                <div>
                    <p>{formGroup.name}</p>
                </div>
                {GenerateForm(formGroup.inputs)}
            </div>
        );
    }

    let renderInputGroup = (inputGroup) => {
        return inputGroup.map((input, i) => {
            return renderInput(input, inputGroup.length, i);
        })
    }

    let renderInput = (input) => {
        return (
            <div key={Math.random()*100}>
                <label
                    htmlFor={input.id}>
                    {input.label}
                </label>
                <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder} />
            </div>
        )
    }


    let formSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={formSubmit}>
            {GenerateForm(formObject)}
        </form>
    )

};

export default FormGenerator;