import Card from "./Card";

const Index = () => {
    
  return (
    <div className="mt-5">
      <div className="grid grid-cols-5 place-items-center m-3">
        <div>
          <div className="bg-blue-400 text-start p-1">New</div>
          <div className="mt-5">
            <Card />
          </div>
        </div>
        <div className="bg-blue-400 w-52 text-start p-1">Progress</div>
        <div className="bg-blue-400 w-52 text-start p-1">Finished</div>
        <div className="bg-blue-400 w-52 text-start p-1">Demo Done</div>
        <div className="bg-blue-400 w-52 text-start p-1">Lead Generation</div>
      </div>
    </div>
  );
};

export default Index;
