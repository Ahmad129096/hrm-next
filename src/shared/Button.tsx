import { Button } from "@mui/material";
import { ButtonProps } from "./Interface";

export const ButtonX = ({
    type,
    fullWidth,
    color,
    variant,
    disabled,
    endIcon,
    onClick,
    btnText,
    sx
}: ButtonProps) => {
    return (
        <Button
            type={type}
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            disabled={disabled}
            endIcon={endIcon}
            onClick={onClick}
            sx={sx}

        >{btnText}</Button>
    );
};