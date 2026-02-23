export default function StatusBar(){
    return (
        <>
            <button className="w-90 h-18 p-6 bg-[#10A95B] flex flex-col items-center justify-center text-white rounded-md">
                <h1 className="font-bold">You win!</h1>
                <span className="font-medium">Well done! 🎉</span>
            </button>        
        </>
    );
}