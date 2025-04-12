const GradientButton = ({handleAction, Icon, width, rounded, text,label}) => {
  return (
    <div className='flex flex-row justify-between'>
      <div className={`flex items-center justify-between ${width === 'full' ? 'w-full' : ''}`}>
        <button
          className={`${rounded === 'xl' ? 'rounded-xl' : 'rounded-3xl'} py-3 px-4 flex w-full flex-row gap-1.5 justify-center bg-gradient-to-br from-green-400 to-blue-600  text-white  transition-transform duration-300 hover:scale-105 hover:bg-green-500`}
          onClick={handleAction}
        >
          <Icon size={20} color='white' className='self-center' />
          <span className='self-center font-semibold'>{text ? text : label}</span>
        </button>
      </div>
    </div>
  );
};
export default GradientButton;