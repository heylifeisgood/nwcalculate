"use client";

import { useState } from "react";
import CraftingCalculator from "@/components/CraftingCalculator";
import TradingCalculator from "@/components/TradingCalculator";
import GearScoreCalculator from "@/components/GearScoreCalculator";

type CalculatorType = "crafting" | "trading" | "gearscore";

export default function Home() {
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorType>("crafting");

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-nw-accent mb-2">
            New World Calculator
          </h1>
          <p className="text-nw-text/80">
            Comprehensive tools for crafting, trading, and gear optimization
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCalculator("crafting")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCalculator === "crafting"
                  ? "bg-nw-accent text-nw-primary"
                  : "bg-nw-secondary text-nw-text hover:bg-nw-secondary/80"
              }`}
            >
              Crafting Calculator
            </button>
            <button
              onClick={() => setActiveCalculator("trading")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCalculator === "trading"
                  ? "bg-nw-accent text-nw-primary"
                  : "bg-nw-secondary text-nw-text hover:bg-nw-secondary/80"
              }`}
            >
              Trading Calculator
            </button>
            <button
              onClick={() => setActiveCalculator("gearscore")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCalculator === "gearscore"
                  ? "bg-nw-accent text-nw-primary"
                  : "bg-nw-secondary text-nw-text hover:bg-nw-secondary/80"
              }`}
            >
              Gear Score Calculator
            </button>
          </div>
        </nav>

        {/* Calculator Content */}
        <div className="bg-nw-secondary rounded-xl p-6 shadow-2xl">
          {activeCalculator === "crafting" && <CraftingCalculator />}
          {activeCalculator === "trading" && <TradingCalculator />}
          {activeCalculator === "gearscore" && <GearScoreCalculator />}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-nw-text/60">
          <div className="mb-4">
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/about"
                className="hover:text-nw-accent transition-colors"
              >
                About
              </a>
              <span className="text-nw-text/40">•</span>
              <a
                href="/privacy"
                className="hover:text-nw-accent transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-nw-text/40">•</span>
              <a
                href="/contact"
                className="hover:text-nw-accent transition-colors"
              >
                Contact
              </a>
              <span className="text-nw-text/40">•</span>
              <a
                href="/disclaimer"
                className="hover:text-nw-accent transition-colors"
              >
                Disclaimer
              </a>
            </nav>
          </div>
          <p className="text-sm">
            Made for New World players • Not affiliated with Amazon Games
          </p>
        </footer>
      </div>
    </main>
  );
}
