import React from 'react';
import { useForm } from "react-hook-form";


const FormV2 = () => {

    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        // final submission
        console.log(data);
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" ref={register({ required: true, minLength: 3 })} />

                    {errors.userName && errors.userName.type === "required" && (
                        <span className="error">You must enter user name</span>
                    )}
                    {errors.userName && errors.userName.type === "minLength" && (
                        <span className="error">username must be at least 3 characters</span>
                    )}

                </div>
                <div>
                    <label>Email Address</label>
                    <input type="text" name="emailAddress" ref={register} />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default FormV2;