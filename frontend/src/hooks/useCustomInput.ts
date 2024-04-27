import { useState } from "react";

import { InputChangeEvent } from "@/types";

const useCustomInput = (initialValue: string, validationFn: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [hasEdited, setHasEdited] = useState(false);
    const isValidInput = validationFn(enteredValue);

    const handleInputOnChange = (event: InputChangeEvent) => {
        setHasEdited(false);
        setEnteredValue(event.target.value);
    }

    const handleInputOnBlur = () => {
        setHasEdited(true);
    }

    return {
        value: enteredValue,
        hasError: hasEdited && !isValidInput,
        handleInputOnChange,
        handleInputOnBlur,
    };
}

export default useCustomInput;
