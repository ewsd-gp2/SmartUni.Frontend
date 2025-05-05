import { useRef } from 'react';

export const StudentVoice = () => {
  const containerRef = useRef(null);

  const handleCardClick = (index) => {
    if (containerRef.current) {
      const card = containerRef.current.children[index];
      const cardWidth = card.clientWidth;
      const containerWidth = containerRef.current.clientWidth;
      const scrollPosition = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-12 md:mt-20 mx-4 md:mx-15">
      <div className="flex justify-center">
        <h1 className="md:text-3xl text-xl text-teal-600 font-semibold">Our Students' Voice</h1>
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        className="mt-20 flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth"
      >
        {/* Card 1 */}
        <div
          onClick={() => handleCardClick(0)}
          className="flex-shrink-0 w-72 md:w-90 bg-gray-100 border-2 border-gray-800 rounded-xl flex items-center flex-col py-10 snap-center transition-all duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"}
            alt="blogImage"
            className="object-cover rounded-full w-24 h-24"
          />
          <h1 className="mt-5 font-semibold text-xl md:text-2xl">John Doe</h1>
          <p className="mt-5 text-sm px-5 text-center">
          SmartUni transformed the way I learn. The personalized tutoring and easy-to-use dashboard helped me stay organized and achieve my academic goals faster.
          </p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => handleCardClick(1)}
          className="flex-shrink-0 w-72 md:w-90 bg-gray-100 border-2 border-gray-800 rounded-xl flex items-center flex-col py-10 snap-center transition-all duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"}
            alt="blogImage"
            className="object-cover rounded-full w-24 h-24"
          />
          <h1 className="mt-5 font-semibold text-xl md:text-2xl">Smith</h1>
          <p className="mt-5 text-sm px-5 text-center">
          Thanks to SmartUni’s collaborative tools, I felt supported every step of the way. The interactive sessions made studying engaging and effective.
          </p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => handleCardClick(2)}
          className="flex-shrink-0 w-72 md:w-90 bg-gray-100 border-2 border-gray-800 rounded-xl flex items-center flex-col py-10 snap-center transition-all duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&s"}
            alt="blogImage"
            className="object-cover rounded-full w-24 h-24"
          />
          <h1 className="mt-5 font-semibold text-xl md:text-2xl">Ricky</h1>
          <p className="mt-5 text-sm px-5 text-center">
          The resources and guidance available on SmartUni gave me the confidence to excel in my courses. It’s like having a tutor and study group all in one!
          </p>
        </div>
      </div>
    </div>
  );
};