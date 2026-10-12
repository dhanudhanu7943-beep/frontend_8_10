import { useState } from "react";

const App = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        city: "",
        course:"",
        
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
            />

            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
            />

            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
            />
           <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Enter Course"
            />





            <button type="submit">
                Submit
            </button>

        </form>
    );
};

export default App;