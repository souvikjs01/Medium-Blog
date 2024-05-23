import pic from '../assets/prof.svg'

const Avatar = ({name, size}: {name?: string, size: 'small' | 'big'}) => {
  return (
    
    <div className={`relative inline-flex items-center justify-center ${size === 'big' ? 'w-10 h-10' : 'w-6 h-6' } h-6 overflow-hidden bg-gray-100 rounded-full cursor-pointer`}>
        
        
        {!name ? (<img className=' text-white' src={pic} alt="profile" />) : (<span className={`${size === 'big' ? 'text-xl' : 'text-sm'} text-black`}>{name[0].toUpperCase()}</span>)}
    </div>

  )
}

export default Avatar
