export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type InputProps = {
    id: string;
    type: string;
    value: string;
    label: string;
    errorMsg: string;
    required: boolean;
    prefixIcon: string;
    placeholder?: string;
    onBlur: () => void;
    onChange: (event: InputChangeEvent) => void;
}

