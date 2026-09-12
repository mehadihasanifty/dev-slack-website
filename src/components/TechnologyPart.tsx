import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./technology.inteface";

const TechnologyPart = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Fetch JSON data and simulate loading state
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        // Importing local JSON dynamically or using fetch
        const data = await import("../../Explore.json");
        setTechnologies(data.default);
      } catch (error) {
        toast.error("Failed to load technologies data!");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`"${tech.name}" is already in your stack!`, {
        position: "top-right",
        autoClose: 2500,
      });
      return;
    }

    setStack((prevStack) => [...prevStack, tech]);
    toast.success(`"${tech.name}" added to your stack!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleRemoveFromStack = (tech: Technology) => {
    setStack((prevStack) => prevStack.filter((item) => item.id !== tech.id));
    toast.info(`"${tech.name}" removed from stack.`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from stack!", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div>
      <ToastContainer />

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
        {/* Technology Grid Column */}
        <div className="lg:col-span-3">
          {/* ⏳ Loading State Spinner */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500 mb-4"></div>
              <p className="text-sm font-medium text-slate-500">
                Loading technologies...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className={`flex flex-col justify-between rounded-2xl bg-white p-6 transition-all duration-200 ${
                      isAdded
                        ? "border-2 border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                        : "border border-slate-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Top Header Row: Icon + Badge */}
                      <div className="mb-4 flex items-center justify-between">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-8 w-8 object-contain"
                        />
                        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500">
                          {tech.badge}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-lg font-bold text-slate-900">
                        {tech.name}
                      </h3>
                      <p className="mt-2 min-h-[50px] text-xs leading-relaxed text-slate-400 line-clamp-3">
                        {tech.description}
                      </p>

                      {/* Meta Chips */}
                      <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                        <span className="rounded bg-slate-50 px-2 py-1 font-medium text-slate-500">
                          {tech.category}
                        </span>
                        <span className="font-medium">{tech.difficulty}</span>
                        <span className="flex items-center gap-1 font-bold text-slate-700">
                          <span className="text-amber-400">★</span>{" "}
                          {tech.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* Add to Stack Button */}
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`mt-6 w-full rounded-xl py-3 text-xs font-bold transition-all ${
                        isAdded
                          ? "cursor-not-allowed bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : "bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.99]"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar Panel: Your Stack */}
        <aside className="sticky top-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-1">
          <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
          <p className="mt-0.5 text-xs font-medium text-slate-400">
            {stack.length} Technology Selected
          </p>

          <div className="mt-5 space-y-3">
            {stack.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-xs text-slate-400">
                No technologies selected yet.
              </div>
            ) : (
              stack.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-6 w-6 object-contain"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveFromStack(item)}
                    className="p-1 text-slate-300 transition-colors hover:text-slate-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {stack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="mt-6 w-full rounded-xl border border-red-200 py-2.5 text-xs font-bold text-red-500 transition-colors hover:bg-red-50"
            >
              Remove All
            </button>
          )}
        </aside>
      </div>
    </div>
  );
};

export default TechnologyPart;