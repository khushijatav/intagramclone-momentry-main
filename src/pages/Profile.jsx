import { StoryTile } from "../component/StoryTile";
export default function Profile() {
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("loggedInUser", loggedInUser);  

  return (
    <div className="p-4">
      <div className="flex gap-2">
        <StoryTile 
        story={{
          user: {name:"nameet mandwal", avatar:"/assets/noprofile.avif" }
        }}
        mystory={true}
      showName={false} 
      />
      <div className="flex-1 space-y-2">
        <p className="capitalize font-medium text-lg">Nameet Mandwal</p>
     <div className="grid grid-cols-3 w-full">
      <div className="flex flex-col"></div>
<span className="font-bold">9</span>
<span className="font-bold">posts</span>
     </div>
     <div className="flex flex-col">
       <span className="font-bold">0</span>
       <span className="font-bold">followers</span>
     </div>
     <div className="flex flex-col">
       <span className="font-bold">0</span>
       <span className="font-bold">following</span>
     </div>
      </div>
      </div>
    </div>
  );
}
