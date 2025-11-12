

function ToggleSwitch({name, onChange}){


    return (
            <label className="inline-flex items-center cursor-pointer max-md:">
                <input type="checkbox" value={name} className="sr-only peer" 
                    onClick = {onChange}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-1 text-m font-medium text-gray-300 dark:text-gray-300">{name}</span>
            </label>
    );
}

export default ToggleSwitch;;