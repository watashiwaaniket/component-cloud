export default function SelectionButton({label, onClick, className, type = "button"}){
    return (
        <button className={className} onClick={onClick} type={type}>
            {label}
        </button>
    );
}