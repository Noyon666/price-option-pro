const priceOptions = () => {
  [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited cardio equipment use",
        "Locker room access",
        "Fitness classes (limited)",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited cardio equipment use",
        "Full locker room access",
        "Unlimited fitness classes",
        "Personal trainer consultation (1/month)",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: "$89.99/month",
      features: [
        "Access to gym facilities for the whole family",
        "Unlimited cardio equipment use",
        "Full locker room access",
        "Unlimited fitness classes",
        "Personal trainer consultation (2/month)",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: "$19.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited cardio equipment use",
        "Locker room access",
        "Student ID required",
      ],
    },
    {
      id: 5,
      name: "Senior Membership",
      price: "$24.99/month",
      features: [
        "Access to gym facilities",
        "Unlimited cardio equipment use",
        "Full locker room access",
        "Seniors aged 65+",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">best price in the city</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((Option) => (
          <priceOption key={option.id} option={option}></priceOption>
        ))}
      </div>
    </div>
  );
};

export default priceOptions;
