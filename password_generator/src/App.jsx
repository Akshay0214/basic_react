import { useEffect, useState } from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import generator from './assets/generator';


export default function App(){
    const [length, setlength] = useState(8)
    const [numberIncluded, setNumberIncluded] = useState(false)
    const [characterIncluded, setCharacterIncluded] = useState (false)
    const [isCopied, setIsCopied] = useState(false)

    const [password, setPassword] = useState("");

    useEffect(() => {
        setPassword(generator(length,numberIncluded,characterIncluded),
        setIsCopied(false)
    )},[numberIncluded,characterIncluded,length])

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex items-start justify-center">
                <div className='px-20 py-10 bg-gray-700 rounded-3xl w-250 mt-20'>
                    <h1 className="text-gray-300 text-4xl font-medium text-center">Password Generator</h1>
                    <div className='rounded-2xl mt-8 mb-4 relative'>
                        <input className='bg-gray-100 outline-none text-xl rounded-3xl py-4 pl-4 w-full' 
                            value={password}
                            readOnly
                        />
                        <button className='bg-blue-600 text-gray-200 text-xl px-6 py-3 border-none rounded-3xl absolute top-0.5 right-1 shadow-xl shadow-blue-200/20'
                            onClick={() => {
                                navigator.clipboard.writeText(password)
                                setIsCopied(true)
                            }}
                        >{isCopied? 'copied' : 'copy'}</button>
                    </div>
                    <div className='text-gray-300 px-3 py-5 flex gap-10'>
                        <ToggleSwitch 
                            name="Include Numbers"
                            onChange = {() => setNumberIncluded(!numberIncluded)}
                        />
                        <ToggleSwitch
                            name="Include Characters"
                            onChange = {() => setCharacterIncluded(!characterIncluded)}
                        />
                        <div className='grow flex gap-2 justify-center items-center'>
                            <label htmlFor="default-range" 
                                className="text-m text-nowrap font-medium text-gray-300 dark:text-white">
                                    Length: {length}
                            </label>
                            <input id="default-range" 
                                type="range" min="8" max="30" Value={length} 
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
                                onChange={(e) => setlength(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}