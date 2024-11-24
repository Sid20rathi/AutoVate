import ShimmerButton from "./ui/shimmer-button";

export const ZapCell = ({
    name,
    index,
    onClick
}: {
    name?: string; 
    index: number;
    onClick: () => void;
}) => {
    return <div onClick={onClick} >
        <ShimmerButton className="shadow-2xl text-white font-extrabold text-2xl w-72 h-24">{index}. {name}
        
        </ShimmerButton>
        
        
     
      
    </div>
}