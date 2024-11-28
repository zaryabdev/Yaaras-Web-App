// import ClientDetails from './ClientDetails'
import ClientListing from "./ClientListing";

const Clients = () => {
  return (
    <div className="h-[calc(100vh-4rem)]  lg:h-screen  flex overflow-y-hidden">
      <div className="h-full w-64  ">
        <ClientListing />
      </div>
      <div className="flex flex-col flex-1 flex-shrink min-w-0 overflow-y-scroll">
        {/* <ClientDetails /> */}
      </div>
    </div>
  );
};

export default Clients;
