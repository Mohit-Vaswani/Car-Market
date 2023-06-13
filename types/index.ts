import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>; // handle click is going to be optional because sometimes its going to be a submit button, so we don't necessarily need a handleClick.
}