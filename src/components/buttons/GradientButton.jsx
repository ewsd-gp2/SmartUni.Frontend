const GradientButton = ({handleAction, Icon, width, rounded, text, label}) => {
  return (
    <div className='flex flex-row justify-between'>
      <div className={`flex items-center justify-between ${width === 'full' ? 'w-full' : ''}`}>
        <button
          // className={`${rounded === 'xl' ? 'rounded-xl' : 'rounded-3xl'} py-3 px-4 flex w-full flex-row gap-1.5 justify-center bg-gradient-to-br from-green-400 to-blue-600  text-white  transition-transform duration-300 hover:scale-105 hover:bg-green-500`}
          className={`
            ${rounded === 'xl' ? 'rounded-xl' : 'rounded-3xl'} 
            py-2 px-3 md:py-3 md:px-4 
            flex flex-row gap-1.5 md:gap-2 
            justify-center items-center 
            bg-gradient-to-br from-green-400 to-blue-600 
            text-white transition-transform 
            duration-300 hover:scale-105 hover:bg-green-500
            ${width === 'full' ? 'w-full' : 'w-auto'}
          `}
          onClick={handleAction}
        >
          <Icon size={20} color='white' className='self-center' />
          <span className='font-semibold text-sm md:text-base whitespace-nowrap'>{text ? text : label}</span>
        </button>
      </div>
    </div>
  );
};
export default GradientButton;