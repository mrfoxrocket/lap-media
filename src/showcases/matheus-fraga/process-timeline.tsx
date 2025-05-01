import { CheckCircle } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We start with a thorough assessment of your property and discuss your needs and budget.",
    },
    {
      number: 2,
      title: "Detailed Proposal",
      description:
        "You'll receive a comprehensive quote with material options, timeline, and transparent pricing.",
    },
    {
      number: 3,
      title: "Project Planning",
      description:
        "Once approved, we schedule your project and order premium materials specifically for your job.",
    },
    {
      number: 4,
      title: "Expert Installation",
      description: "Our certified team completes the work with minimal disruption and daily cleanup.",
    },
    {
      number: 5,
      title: "Quality Inspection",
      description:
        "We conduct a thorough inspection and walkthrough to ensure everything meets our high standards.",
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Your 10-year warranty is backed by our commitment to service and maintenance.",
    },
  ];

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary to-teal-500 transform -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline node */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-primary/20 blur-xs"></div>
                <div className="relative h-8 w-8 rounded-full bg-linear-to-r from-primary to-teal-500 flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
            >
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 flex md:block items-center gap-2">
                  {index % 2 === 0 ? (
                    <>
                      {step.title}
                      <CheckCircle className="h-5 w-5 text-primary ml-2 hidden md:inline" />
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5 text-primary  mr-2 hidden md:inline" />
                      {step.title}
                    </>
                  )}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>

            {/* Empty space for alignment */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
