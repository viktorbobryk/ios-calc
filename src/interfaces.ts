import * as React from "react";

export interface  IButtonProps {
    type: string;
    value: string;
    handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // onRemove: (id: number) => void
}

// export interface  IEvent{
// //     event: React.MouseEvent<HTMLInputElement>
// // }