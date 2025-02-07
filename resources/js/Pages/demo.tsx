import { useForm } from '@inertiajs/react';
import React from 'react';

const Demo = () => {
    const { data, setData, post, errors } = useForm({
        name: "" // Add necessary fields
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default form submission

        post("/data", {
            onSuccess: (response) => {
                console.log("Submitted Data:", response);
            },
            preserveState: true // Prevents full-page reload
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Demo;
