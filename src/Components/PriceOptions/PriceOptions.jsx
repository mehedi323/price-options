import PriceOption from "../PriceOption/PriceOption";

 
const PriceOptions = () => {
  
    const priceOptions =  [
      {
        "id": "basic",
        "name": "Basic Membership",
        "features": [
          "Access to gym facilities",
          "Standard workout equipment",
          "Locker access"
        ],
        "price": "30 "
      },
      {
        "id": "standard",
        "name": "Standard Membership",
        "features": [
          "Access to gym facilities",
          "Standard workout equipment",
          "Locker access",
          "Group fitness classes"
        ],
        "price": "50 "
      },
      {
        "id": "premium",
        "name": "Premium Membership",
        "features": [
          "Access to gym facilities",
          "Full range of workout equipment",
          "Locker access",
          "Group fitness classes",
          "Personal training sessions"
        ],
        "price": "80 "
      }
    ]
 
  
  return (
    <div>
      <h2 className="text-4xl text-center mt-4 mb-4">Best Price in the Trwn</h2>
      <div className="grid md:grid-cols-3 gap-4 m-6   ">
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default PriceOptions;