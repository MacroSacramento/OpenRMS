import React, { Component } from 'react';

let EmployeeCreate = () => {

    return (
        <>
            <div className="flex justify-self-center pt-5">
                <form>
                    {EmployeeForm}
                </form>
            </div>
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
                            { name: "First Name", type: "text", placeholder: "" },
                            { name: "Last Name", type: "text", placeholder: "" }
                        ]

                },
            ]
        },
    }
];

let EmployeeFormInputs = (formInputs) => {

    let efi = formInputs.map(element => {
        if (element.inputGroup) {
            element.inputGroup.map((forms, i) => {
                return (
                    <>{forms.name}</>
                )
            })
        }
    });

    return formInputs;

}

let EmployeeForm = EmployeeNewForm.map((input, i) => {
    console.log(EmployeeFormInputs(input.formGroup.inputs))
    return (
        <>
            <p key={i} className="font-semibold text-2xl border-b-2">{input.formGroup.name}</p>
            {EmployeeFormInputs(input.formGroup.inputs)}
        </>
    );

});

export default EmployeeCreate;