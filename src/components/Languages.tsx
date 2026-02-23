import Language from '../assets/languages.json'
export default function Languages(){
    const languages = Language.map((el,index) => 
         <li key={index} style={{backgroundColor : el.backgroundColor,color: el.color}} className='p-1 flex justify-center font-bold rounded-sm'>{el.name}</li>
    );
    return (
        <>
            <div className="w-90.25 h-12.75">
                <ul className='flex justify-center items-center flex-row gap-1 flex-wrap'>
                    {languages}
                </ul>
            </div>
        </>
    );
}