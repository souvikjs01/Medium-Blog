

import { ChangeEvent } from "react"

interface InputType {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LableInput = ({label, placeholder, type, onChange}: InputType) => {
  return (
    <div>
      <div className=' text-sm font-medium text-left py-2'>
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} type={type} className=' w-full px-2 py-1 border rounded border-slate-200'/>
    </div>
  )
}

export default LableInput
