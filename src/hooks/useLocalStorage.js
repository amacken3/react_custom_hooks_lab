import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const value = localStorage.getItem(key) ?? initialValue;
    const [ storageValue, setStorageValue ] = useState(value);

    useEffect(() => {
        localStorage.setItem(key, storageValue)
    }, [key, storageValue]);

    return [storageValue, setStorageValue]
}