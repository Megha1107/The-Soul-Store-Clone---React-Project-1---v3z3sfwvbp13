



export default function CloseButton({width, height, color, effect}) {
    return (
        <svg width= {width ? width :"20"} height={height ? height :"20"} 
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" 
                width= {width ? width :"20"} height={height ? height :"20"} fill= {color ? color : "#999"} 
                className={`${effect}`} /> 
        </svg>
    )
}
