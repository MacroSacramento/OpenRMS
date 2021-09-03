import React from 'react';
import EmployeeCreate from './components/employees/employee_new';
import FormGenerator from './components/form_generator';
import styles from './styles/styles.css';

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

const app = () => {
    return (
        <>
            <div className=" w-full h-screen">
                <FormGenerator object={EmployeeNewForm} />
            </div>
        </>
    );
};

export default app;