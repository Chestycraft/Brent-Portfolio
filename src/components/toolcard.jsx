export const Toolcard = ({ logos }) => {
  return (
    <div className="w-[150px] lg:w-[200px] flex flex-col items-center ">
      <div className="h-[100px] lg:h-[100px] w-full flex items-center justify-center border border-white bg-white/10 rounded-br-3xl rounded-tl-3xl py-5">
        <img
          src={logos.src}
          alt={logos.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="text-center mt-2">{logos.name}</p>
    </div>
  );
};
