import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Set your Preferences",
      description:
        "Specify the type of content you want to create, whether it's blog posts, articles, or social media updates.",
      imageSrc:
        "https://framerusercontent.com/images/SnOMPU6z1fTbyK6AXARZO3yyU4.svg",
    },
    {
      step: "Step 2",
      title: "Let AI do the work",
      description:
        "Our advanced algorithms analyze your input and generate content that's tailored to your exact specifications.",
      imageSrc:
        "https://framerusercontent.com/images/2wzFTufOIYFCvajBgjCmWDa4Q.svg",
    },
    {
      step: "Step 3",
      title: "Review, edit and download",
      description:
        "Review the AI-generated content, make any necessary edits, and fine-tune it to perfection. Share it with your audience.",
      imageSrc:
        "https://framerusercontent.com/images/EFpJnUQCLUuoPPsdBxZcAxXcK0.svg",
    },
  ];

  return (
    <section className="how-it-works bg-black text-white py-20 px-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-8xl font-medium leading-tight">
          How it <span class="font-medium ">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-indigo-500">
              Works
              </span>
            </span>
        </h2>
      </div>

      {/* Steps */}
      <div className="flex gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-card rounded-lg p-6 text-center"
          >
            <p className="uppercase text-sm text-gray-400 mb-4">{step.step}</p>
            <div className="mb-4">
              <img
                src={step.imageSrc}
                alt={`Illustration for ${step.step}`}
                className="mx-auto h-10 w-10 object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
