


// const StoryTile = ({ image, profileImage, username, onClick }) => {

  
//   return (
//     <div
//       onClick={onClick}
//       className="relative w-28 h-44 rounded-xl overflow-hidden cursor-pointer group"
//     >
//       {/* Background Image */}
//       <img
//         src={image}
//         alt="story"
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//       />

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

//       {/* Profile Image */}
//       <div className="absolute top-2 left-2 p-[2px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400">
//         <img
//           src={profileImage}
//           alt={username}
//           className="w-9 h-9 rounded-full border-2 border-white object-cover"
//         />
//       </div>

//       {/* Username */}
//       <div className="absolute bottom-2 left-2 right-2">
//         <p className="text-white text-sm font-semibold truncate">{username}</p>
//       </div>
//     </div>
//   );
// };

// export default StoryTile;




export const StoryTile = ({ story, mystory = false,onOpenstory,showName=true }) => {
  return (
    <div onClick={onOpenstory} className="flex size-24 flex-col items-center relative ">
      <div className="size-20 flex items-center overflow-visible justify-center rounded-full  border-3 border-gray-500/30">
        <img
          src={(story && story?.user?.avatar) || "/assets/noprofile.avif"}
          alt="story"
          className="size-20 rounded-full object-cover"
        />
      </div>
      {mystory && (
        <div className="size-4 bg-white flex items-center justify-center absolute rounded-full bottom-6 right-2 border-3 border-gray-500/30">
          +
        </div>
      )}
      {showName && <p className="truncate max-w-24 text-xs ">
        {story?.user.name || "nameet mandwal"}
      </p>}
    </div>
  );
}

