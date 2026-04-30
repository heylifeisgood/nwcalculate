'use client'

import { useState } from 'react'

interface GearSlot {
  name: string
  gearScore: number
}

export default function GearScoreCalculator() {
  const [gearSlots, setGearSlots] = useState<GearSlot[]>([
    { name: 'Helmet', gearScore: 0 },
    { name: 'Chest', gearScore: 0 },
    { name: 'Gloves', gearScore: 0 },
    { name: 'Pants', gearScore: 0 },
    { name: 'Boots', gearScore: 0 },
    { name: 'Amulet', gearScore: 0 },
    { name: 'Ring', gearScore: 0 },
    { name: 'Earring', gearScore: 0 },
    { name: 'Weapon 1', gearScore: 0 },
    { name: 'Weapon 2', gearScore: 0 },
  ])

  const updateGearScore = (index: number, value: number) => {
    const newGearSlots = [...gearSlots]
    newGearSlots[index].gearScore = value
    setGearSlots(newGearSlots)
  }

  const totalGearScore = gearSlots.reduce((sum, slot) => sum + slot.gearScore, 0)
  const averageGearScore = totalGearScore / gearSlots.length
  const filledSlots = gearSlots.filter(slot => slot.gearScore > 0).length

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nw-accent mb-4">Gear Score Calculator</h2>

      {/* Gear Slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gearSlots.map((slot, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-nw-primary rounded-lg">
            <label className="flex-1 text-nw-text font-medium">
              {slot.name}
            </label>
            <input
              type="number"
              value={slot.gearScore || ''}
              onChange={(e) => updateGearScore(index, parseFloat(e.target.value) || 0)}
              className="w-32 px-3 py-2 bg-nw-secondary border border-nw-accent/30 rounded text-nw-text focus:outline-none focus:border-nw-accent"
              placeholder="0"
              min="0"
              max="700"
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="bg-nw-primary rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-bold text-nw-accent mb-4">Results</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-nw-text/70">Average Gear Score</p>
            <p className="text-3xl font-bold text-nw-accent">
              {averageGearScore.toFixed(1)}
            </p>
          </div>
          <div>
            <p className="text-sm text-nw-text/70">Total Gear Score</p>
            <p className="text-3xl font-bold text-nw-text">
              {totalGearScore}
            </p>
          </div>
          <div>
            <p className="text-sm text-nw-text/70">Equipped Slots</p>
            <p className="text-3xl font-bold text-nw-text">
              {filledSlots} / {gearSlots.length}
            </p>
          </div>
        </div>

        {/* Gear Score Tiers */}
        <div className="pt-4 border-t border-nw-accent/30">
          <h4 className="font-semibold text-nw-text mb-3">Gear Score Tiers</h4>
          <div className="space-y-2">
            <div className={`p-3 rounded ${averageGearScore >= 600 ? 'bg-purple-900/30 border border-purple-500' : 'bg-nw-secondary/50'}`}>
              <span className="text-purple-400 font-semibold">Legendary (600+)</span>
              {averageGearScore >= 600 && <span className="float-right text-green-400">✓ Achieved</span>}
            </div>
            <div className={`p-3 rounded ${averageGearScore >= 500 && averageGearScore < 600 ? 'bg-yellow-900/30 border border-yellow-500' : 'bg-nw-secondary/50'}`}>
              <span className="text-yellow-400 font-semibold">Epic (500-599)</span>
              {averageGearScore >= 500 && averageGearScore < 600 && <span className="float-right text-green-400">✓ Current</span>}
            </div>
            <div className={`p-3 rounded ${averageGearScore >= 400 && averageGearScore < 500 ? 'bg-blue-900/30 border border-blue-500' : 'bg-nw-secondary/50'}`}>
              <span className="text-blue-400 font-semibold">Rare (400-499)</span>
              {averageGearScore >= 400 && averageGearScore < 500 && <span className="float-right text-green-400">✓ Current</span>}
            </div>
            <div className={`p-3 rounded ${averageGearScore < 400 && averageGearScore > 0 ? 'bg-green-900/30 border border-green-500' : 'bg-nw-secondary/50'}`}>
              <span className="text-green-400 font-semibold">Uncommon (0-399)</span>
              {averageGearScore < 400 && averageGearScore > 0 && <span className="float-right text-green-400">✓ Current</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
