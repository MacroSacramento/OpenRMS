import React from 'react';
import EmployeeCreate from './components/employees/employee_new';
import styles from './styles/styles.css';

const app = () => {
    return (
        <>
            <div className="flex justify-center w-full h-screen">
                <EmployeeCreate />
            </div>
        </>
    );
};

export default app;