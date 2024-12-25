import {useState} from "react"

export default function RPSButton(props) {

    const [isHovered,setIsHovered] = useState(false)

    const RPSClickHandler = (e) => {
        console.log("test")
    }

    const RPSHovered = (e) => {
        setIsHovered(!isHovered)
    }

    return <>
        <div onMouseEnter={RPSHovered} onMouseLeave={RPSHovered} onClick={RPSClickHandler} className="bg-white hover:bg-black hover:cursor-pointer w-fit h-fit rounded-full">
            <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full">
                <props.icon color={isHovered ? "white" : "black"} style={{ 
                    width: '10vw', 
                    height: '10vw' 
                    }} />
            </div>
        </div>
    </>
}