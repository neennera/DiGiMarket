export default function Sidebar() {
  return (
    <div className="w-full sm:w-[15%] sticky h-full top-2">
      <a href="#userInfo">
        <p className="text-md font-gray hover:underline">User Information</p>
      </a>
      <a href="#shopManage">
        <p className="text-md font-gray hover:underline">Shop Management</p>
      </a>
      <a href="#newItem">
        <p className="text-md font-gray hover:underline">new Item</p>
      </a>
    </div>
  );
}
