'use client'
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProvidersProps {
    children: ReactNode;
}

export function ContextProviders({ children }: ProvidersProps): JSX.Element {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}


