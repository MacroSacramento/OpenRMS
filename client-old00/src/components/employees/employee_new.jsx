import React, { Component } from 'react';

let EmployeeCreate = () => {

    return (
        <>
            <form className="container w-full flex flex-wrap appearance-none md:px-40">
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
                {
                    inputGroup: 
                    [
                        { label: "Username", id: "username", type: "text", placeholder: "User" }
                    ]
                },
                {
                    inputGroup:
                        [
                            { label: "Password", id: "password", type: "password", placeholder: "Password" }
                        ]
                },
                {
                    inputGroup:
                    [
                        { label: "Address", id: "address", type: "text", placeholder: "123 Palm Lane"}
                    ]
                }
            ]
        },
    }
];

let EmployeeFormInputs = (formInputs) => {
    let efi = formInputs.map(element => {
        if (element.inputGroup) return element.inputGroup.map((forms, i) => {
            let conSel = () => {
                if(element.inputGroup.length > 1) {
                    return (i == 0) ? "w-full md:w-1/2 px-3 mb-6 md:mb-0" : "w-full md:w-1/2 px-3"
                } else return "w-full px-3 mb-6 md:mb-0"
            }

            return (
                <>
                    <div className={conSel() + " pt-5"}>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={forms.id}>
                            {forms.label}
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={forms.id} type={forms.type} placeholder={forms.placeholder}></input>
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
            <div className="flex flex-wrap w-full border-b-2 pb-2">
                <p key={i} className="font-semibold text-2xl">{input.formGroup.name}</p>
            </div>
            {EmployeeFormInputs(input.formGroup.inputs)}
        </>
    );

});

export default EmployeeCreate;