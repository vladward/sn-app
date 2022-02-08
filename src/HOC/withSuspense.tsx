import React from 'react';
import PreLoader from "../components/PreLoader/PreLoader";

export const withSuspense = (Component: React.ComponentType) => {
    return (props: any) => {
        return <React.Suspense fallback={<PreLoader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}