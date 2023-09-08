import { Autocomplete } from "@mui/material";

import { autoCompleteProps } from "./Interface";
export const AutoCompleteX = ({
    id,
    onOpen,
    onClose,
    isOptionEqualToValue,
    getOptionLabel,
    options,
    loading,
    renderInput,
    onInputChange,
    onChange,
    disabled
}: autoCompleteProps) => {
    return (
        <Autocomplete
            id={id}
            onOpen={onOpen}
            onClose={onClose}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            options={options}
            loading={loading}
            onInputChange={onInputChange}
            onChange={onChange}
            renderInput={renderInput}
            disabled={disabled}
        />

    );
};