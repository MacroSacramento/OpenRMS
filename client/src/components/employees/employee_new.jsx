import React, { Component } from 'react';

let EmployeeCreate = () => {

    return (
        <>
            <form className="w-full max-w-lg">
                {EmployeeForm}
            </form>
        </>
    )

};

const EmployeeNewForm = [
    {
        formGroup: {
            name: "Personal Information",
            inputs: [
                {
                    inputGroup:
                        [
                            { label: "First Name", id: "firstName", type: "text", placeholder: "Jane" },
                            { label: "Last Name", id: "lastName", type: "text", placeholder: "Doe" }
                        ]

                },
            ]
        },
    }
];

let EmployeeFormInputs = (formInputs) => {

    let efi = formInputs.map(element => {
        if (element.inputGroup) return element.inputGroup.map((forms, i) => {
            let conSel = (i == 0) ? "w-full md:w-1/2 px-3 mb-6 md:mb-0" : "w-full md:w-1/2 px-3";
            return (
                <>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className={conSel}>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={forms.id}>
                                {forms.label}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={forms.id} type="text" placeholder={forms.placeholder}></input>
                        </div>
                    </div>
                </>
            )
        })
    });

    return efi;

}

let EmployeeForm = EmployeeNewForm.map((input, i) => {
    return (
        <>
            {/* <p key={i} className="font-semibold text-2xl border-b-2">{input.formGroup.name}</p> */}
            {EmployeeFormInputs(input.formGroup.inputs)}
        </>
    );

});

export default EmployeeCreate;