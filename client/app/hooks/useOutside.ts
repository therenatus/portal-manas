import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type TypeOut = {
    ref: any
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisisble: boolean): TypeOut => {
    const [isShow, setIsShow] = useState(initialVisisble);
    const ref = useRef<HTMLElement>(null)

    const handleClickOutside = (event: any) => {
        if(ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return ()=> {
            document.addEventListener('click', handleClickOutside, true)
        }
    })

    return { ref, isShow, setIsShow}
}