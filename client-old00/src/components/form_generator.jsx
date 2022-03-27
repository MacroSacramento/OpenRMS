import React, { Component } from 'react';

let FormGenerator = (object) => {

    let formObject = object.object;

    let GenerateForm = (formInput) => {
        return formInput.map((input, i) => {
            if (input.formGroup) return renderFormGroup(input.formGroup, i);
            if (input.inputGroup) return renderInputGroup(input.inputGroup, i);
            return renderInput(input, inputs);
        })
    }

    let renderFormGroup = (formGroup, i) => {
        return (
            <>
                <div key={i} className="flex flex-wrap w-full border-b-2 pb-2">
                    <p className="font-semibold text-2xl">{formGroup.name}</p>
                </div>
                { GenerateForm(formGroup.inputs) }
            </>
        );
    }

    let renderInputGroup = (inputGroup, i) => {
        return inputGroup.map((input, i) => {
            return renderInput(input, inputGroup.length, i);
        })
    }

    let renderInput = (input, length, i) => {
        let conSel = () => {
            if (length > 1) {
                return (i == 0) ? "w-full md:w-1/2 px-3 mb-6 md:mb-0" : "w-full md:w-1/2 px-3"
            } else return "w-full px-3 mb-6 md:mb-0"
        }

        return (
            <>
                <div className={conSel() + " pt-5"}>
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor={input.id}>
                        {input.label}
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder} />
                </div>
            </>
        )
    }

    return (
        <>
            <form className="container w-full flex flex-wrap appearance-none md:px-72">
                {GenerateForm(formObject)}
            </form>
        </>
    )

};

export default FormGenerator;