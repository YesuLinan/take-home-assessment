import React, { useState } from 'react'

interface UseFormProps<T, S> {
    initialState: T; // Initial form values
    setValueCallback?: S; // Optional callback when a value changes
};

// Define input types for special handling (only 'file' used here)
// Can be extended to handle other input types like checkbox, radio, etc.
type InputType = 'file';

// Defines the structure of the event target for input changes
interface InputChangeTarget {
    name: string,
    files: FileList | null,
    type: string,
    value?: any
}

// Defines the shape of the input change event
interface InputChangeEvent  {
    target: InputChangeTarget // Target element that triggered the event
}

const useForm = <T>(props: UseFormProps<T, any>) => {
  
    const { initialState, setValueCallback } = props;

    /* Local state */
    const [values, setValues] = useState<any>(initialState);
    const [initialValuesState, setInitialValuesState] = useState<any>(initialState);
    const [errors, setErrors] = useState<any>({});
    const [filePreview, setFilePreview] = useState<File | null>(null);

    const hasErrors = errors && Object.keys(errors).length > 0;

    // Handles changes for all form inputs (including files)
    const handleChange = (event: InputChangeEvent) => {
        const { name, type, files } = event.target;
        let { value } : any = event.target;

        if (type === 'file') {
            setFilePreview(files ? files[0] : null);
        } else {
             // For other input types, update corresponding value in form state
            setValues((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }

        // If provided, call the callback with:
        // - Changed value as an object (keyed by input name)
        // - Event metadata: type, name, value, and files
        // - An object with setErrors to allow error state updates
        if (setValueCallback) {
            setValueCallback(
                {[name]: value},
                {type, name, value: event.target.value, files},
                {setErrors}
            );
        }
    };

    //Resets the form values, errors, and file preview to initial states.
    const resetForm = () => {
        setValues(initialValuesState);
        setFilePreview(null);
        setErrors({});
    }

    // Return form state and helpers for use in components
    return {
        values,
        errors,
        hasErrors,
        filePreview,
        handleChange,
        setValues,
        resetForm
    };
}

export default useForm;