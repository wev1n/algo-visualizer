import Image from "next/image";

export default function Benefits() {
  return (
    <section className="grid grid-cols-2 gap-6 p-20">
      <Image
        src="/popsy/studying.svg"
        alt="studying.svg"
        width={800}
        height={800}
      />

      <div className="flex justify-center flex-col">
        <h3 className="text-4xl font-bold">
          Unlock the Power of Algorithms and Data Structures with Our
          Interactive Platform
        </h3>
        <p className="py-12 text-md">
          Experience improved understanding of complex algorithms, hands-on
          learning, and real-time code execution.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-2xl pb-4">Enhance Knowledge</h4>
            <p>
              Gain a deeper understanding of algorithms through interactive
              visualizations and practical examples.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-2xl pb-4">Interactive Learning</h4>
            <p>
              Engage in hands-on learning with real-time code execution and
              step-by-step explanations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
