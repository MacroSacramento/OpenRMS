import React from 'react'
import FormGenerator from './components/form_generator';

const formEmployeeNew = [
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
        submitText: "Create Employee",
    }
];

const app = () => {
    return (
        <>
            <div>
                <FormGenerator object={ formEmployeeNew } />
            </div>
        </>
    );
};

export default app