import { Check, Minus } from 'lucide-react';
import React, { useState } from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className='flex p-6'>
            <div className='flex flex-row items-center'>
                <div onClick={() => setChecked(!checked)} className='h-6 w-6 rounded-md bg-purple-500 cursor-pointer items-center justify-center flex'>
                    <Check
                        size={18}
                        color="white"
                        className={`absolute transition-all duration-300 ease-in-out ${checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                    />
                    <Minus
                        size={18}
                        color="white"
                        className={`absolute transition-all duration-300 ease-in-out ${!checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                    />                
                </div>
                <span className='text-white ml-2 text-sm'>Are you a boy ?</span>
            </div>
        </div>
    );
};

export default Checkbox;
