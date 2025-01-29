import { useEffect } from "react";

const useTabTitle = (title: string) => {
            useEffect(()=>{
                // setting the document tab title
                document.title = title;
            }, [title])
}

export default useTabTitle;