import React, { useState } from 'react';

const DynamicForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        category: ''
    });
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setFormData({
            name: formData.name,
            age: formData.age,
            category: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.category === '') {
            setFormError('Please select a category.');
            return;
        }
        setFormError('');
        const { category, ...filteredData } = formData;
        console.log('Form Data:', filteredData);
    };

    const renderAdditionalFields = () => {
        switch (formData.category) {
            case 'student':
                return (
                    <>
                        <div>
                            <label>Student Code:</label>
                            <input
                                type="text"
                                name="studentCode"
                                value={formData.studentCode || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Institute Name:</label>
                            <input
                                type="text"
                                name="instituteName"
                                value={formData.instituteName || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Grades:</label>
                            <input
                                type="text"
                                name="grades"
                                value={formData.grades || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                );
            case 'employee':
                return (
                    <>
                        <div>
                            <label>Company Name:</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>CTC:</label>
                            <input
                                type="text"
                                name="CTC"
                                value={formData.CTC || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Notice Period:</label>
                            <input
                                type="text"
                                name="noticePeriod"
                                value={formData.noticePeriod || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div>
                <label>Category:</label>
                <select name="category" value={formData.category} onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                </select>
            </div>

            {renderAdditionalFields()}

            {formError && <p style={{ color: 'red' }}>{formError}</p>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicForm;
