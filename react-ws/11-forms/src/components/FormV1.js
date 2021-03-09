import  {useState,useEffect}  from 'react';

const FormV1 = () => {
    const [errors, setErrors] = useState({})
    const[isSubmitted,setIsSubmitted]=useState(false);

    function submitForm(e) {
        e.preventDefault();
        console.log(">>>> Form Submited");
        // Validations
        setErrors(validateForm);
        
        setIsSubmitted(true);
        console.log(user);
    }

    useEffect(() => {
        console.log(">>>> Use Effect<<<");
        
        if(Object.keys(errors).length===0 && isSubmitted){
            console.log(">>> Saving Data <<<<");
            console.log(user);

        }

    },[errors])
    
    
    const [user, setUser] = useState({
        userName: '',
        password: '',
        emailAddress: '',
        dob: ''
    
    });
    
    function handleChange(e) {
        const { name, value } = e.target;
    
        setUser(
            {
                ...user,
                [name]: value
            })
    }
    
    
    function validateForm() {
    
        let errors = {}
    
        if (!user.userName.trim()) {
            errors.userName = "User name is required";
        } else if (user.userName.length < 3) {
            errors.userName = "User name must be at least 3 characters length";
        }
    
        if (!user.emailAddress) {
            errors.emailAddress = 'Email address is required';
        } else if (!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test((user.emailAddress)))) {
            errors.emailAddress = "Invalid Email Address";
        }
    
    
        console.log("ERRORS");
        console.log(errors);
    
        return errors;
    }
    
    return (
        <div>
            <h1>Forms Demo </h1> <hr />


            <form onSubmit={e => submitForm(e)}>
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" onChange={e => handleChange(e)} />
                    <span>{errors.userName}</span>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>Email Address</label>
                    <input type="text" name="emailAddress" onChange={e => handleChange(e)} />
                    <span>{errors.emailAddress}</span>
                </div>

                <div>
                    <label>date of birth</label>
                    <input type="date" name="dob" onChange={e => handleChange(e)} max="1990-01-31" />

                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>



            </form>
        </div>
    );
};

export default FormV1;